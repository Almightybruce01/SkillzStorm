import type { VercelRequest, VercelResponse } from '@vercel/node';

const CJ_PRODUCT_MAP: Record<string, { name: string; searchQuery: string }> = {
  vr_lite:        { name: 'VR Phone Headset', searchQuery: 'VR headset phone 3D glasses' },
  vr_pro:         { name: 'Standalone VR Headset', searchQuery: 'standalone VR headset 6DOF' },
  vr_ultra:       { name: 'Premium VR Headset', searchQuery: 'VR headset 4K eye tracking' },
  '3d_basic':     { name: '3D Glasses 5-pack', searchQuery: 'red cyan 3D glasses 5 pack' },
  '3d_polarized': { name: 'Polarized 3D Glasses', searchQuery: 'polarized 3D glasses' },
  '3d_clip':      { name: 'Clip-On 3D Glasses', searchQuery: 'clip on 3D glasses' },
  controller:     { name: 'Bluetooth Controller', searchQuery: 'bluetooth game controller mobile' },
  headphones:     { name: 'Wireless Earbuds', searchQuery: 'wireless earbuds low latency gaming' },
  stand:          { name: 'Phone Stand', searchQuery: 'adjustable phone tablet stand' },
  pencil_case:    { name: 'Pencil Case', searchQuery: 'cartoon pencil case pouch kids' },
  gel_pens:       { name: 'Gel Pens 12-pack', searchQuery: 'kawaii gel pens 12 pack' },
  sticker_pack:   { name: 'Sticker Pack 50pc', searchQuery: 'vinyl sticker pack 50pcs gaming' },
  backpack:       { name: 'School Backpack', searchQuery: 'cartoon school backpack kids' },
  erasers:        { name: 'Erasers Set 20pc', searchQuery: 'mini animal erasers set cute' },
  notebook:       { name: 'Notebook 3-pack', searchQuery: 'holographic notebook A5 lined' },
  labubu:         { name: 'Labubu Figure', searchQuery: 'labubu blind box figure' },
  mini_figures:   { name: 'Mini Figures 5-Pack', searchQuery: 'mini collectible figures surprise' },
  squishy_toy:    { name: 'Squishy Set 3pc', searchQuery: 'kawaii squishy toy slow rise' },
  blind_bag:      { name: 'Mystery Blind Bag', searchQuery: 'mystery toy blind bag kids' },
  pop_it:         { name: 'Pop-It Fidget', searchQuery: 'pop it fidget rainbow' },
  fidget_cube:    { name: 'Fidget Cube', searchQuery: 'fidget cube 6 sided' },
  fidget_spinner: { name: 'LED Spinner', searchQuery: 'LED fidget spinner light up' },
  magnetic_rings: { name: 'Magnetic Rings 3pc', searchQuery: 'magnetic fidget rings 3 pack' },
  stress_ball:    { name: 'Stress Balls 4pc', searchQuery: 'mesh stress ball neon squeeze' },
  fidget_slug:    { name: 'Fidget Slug', searchQuery: 'articulated fidget slug 3D' },
  infinity_cube:  { name: 'Infinity Cube', searchQuery: 'infinity cube fidget toy' },
};

async function getCJAccessToken(apiKey: string): Promise<string> {
  const resp = await fetch('https://developers.cjdropshipping.com/api2.0/v1/authentication/getAccessToken', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ apiKey }),
  });
  const data = await resp.json();
  if (data.code !== 200 || !data.data?.accessToken) {
    throw new Error(`CJ auth failed: ${data.message}`);
  }
  return data.data.accessToken;
}

async function searchCJProduct(token: string, query: string): Promise<{ pid: string; vid: string; name: string; image: string; sellPrice: number } | null> {
  const resp = await fetch(`https://developers.cjdropshipping.com/api2.0/v1/product/list?pageNum=1&pageSize=1&productNameEn=${encodeURIComponent(query)}`, {
    method: 'GET',
    headers: { 'CJ-Access-Token': token },
  });
  const data = await resp.json();
  if (data.code === 200 && data.data?.list?.length > 0) {
    const p = data.data.list[0];
    const variant = p.variants?.[0];
    return {
      pid: p.pid,
      vid: variant?.vid || '',
      name: p.productNameEn,
      image: p.productImage,
      sellPrice: variant?.variantSellPrice || p.sellPrice || 0,
    };
  }
  return null;
}

async function placeCJOrder(token: string, order: {
  orderNum: string;
  name: string;
  address: string;
  city: string;
  province: string;
  zip: string;
  country: string;
  phone: string;
  email: string;
  products: { vid: string; quantity: number }[];
}): Promise<any> {
  const resp = await fetch('https://developers.cjdropshipping.com/api2.0/v1/shopping/order/createOrder', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'CJ-Access-Token': token,
    },
    body: JSON.stringify({
      orderNumber: order.orderNum,
      shippingZip: order.zip,
      shippingCountryCode: order.country,
      shippingCountry: order.country,
      shippingProvince: order.province,
      shippingCity: order.city,
      shippingAddress: order.address,
      shippingCustomerName: order.name,
      shippingPhone: order.phone || '0000000000',
      remark: `SkillzStorm | ${order.email}`,
      products: order.products.map(p => ({ vid: p.vid, quantity: p.quantity })),
    }),
  });
  return resp.json();
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'POST only' });
  }

  const secret = req.headers['x-fulfill-secret'];
  if (!secret || secret !== process.env.ORDERS_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { sessionId, items, shippingName, shippingAddress, shippingCity, shippingState, shippingZip, shippingCountry, email } = req.body;
  const cjApiKey = process.env.CJ_API_KEY;

  if (!cjApiKey) {
    console.log(`[CJ] No CJ_API_KEY set — manual fulfillment needed for ${sessionId}`);
    return res.status(200).json({
      status: 'manual',
      reason: 'CJ_API_KEY not configured',
      sessionId,
      items: items.map((id: string) => ({ id, name: CJ_PRODUCT_MAP[id]?.name || id })),
      shipping: { name: shippingName, address: shippingAddress, city: shippingCity, state: shippingState, zip: shippingZip, country: shippingCountry },
    });
  }

  try {
    const token = await getCJAccessToken(cjApiKey);
    console.log(`[CJ] Authenticated. Processing ${items.length} items for ${sessionId}`);

    // Search CJ for matching products and collect variant IDs
    const orderProducts: { vid: string; quantity: number; name: string; cost: number }[] = [];
    const unmapped: string[] = [];

    for (const itemId of items as string[]) {
      const mapping = CJ_PRODUCT_MAP[itemId];
      if (!mapping) { unmapped.push(itemId); continue; }

      const cjProduct = await searchCJProduct(token, mapping.searchQuery);
      if (cjProduct && cjProduct.vid) {
        orderProducts.push({ vid: cjProduct.vid, quantity: 1, name: cjProduct.name, cost: cjProduct.sellPrice });
        console.log(`[CJ] Found: ${itemId} → ${cjProduct.name} ($${cjProduct.sellPrice}) vid:${cjProduct.vid}`);
      } else {
        unmapped.push(itemId);
        console.log(`[CJ] Not found on CJ: ${itemId} (${mapping.searchQuery})`);
      }
    }

    if (orderProducts.length === 0) {
      return res.status(200).json({
        status: 'manual',
        reason: 'No matching CJ products found — fulfill manually',
        sessionId,
        unmapped,
        shipping: { name: shippingName, address: shippingAddress, city: shippingCity, state: shippingState, zip: shippingZip, country: shippingCountry },
      });
    }

    // Place the order on CJ
    const cjResult = await placeCJOrder(token, {
      orderNum: sessionId.slice(-12),
      name: shippingName,
      address: shippingAddress,
      city: shippingCity,
      province: shippingState,
      zip: shippingZip,
      country: shippingCountry,
      phone: '',
      email,
      products: orderProducts.map(p => ({ vid: p.vid, quantity: p.quantity })),
    });

    console.log(`[CJ] Order result: ${JSON.stringify(cjResult)}`);

    return res.status(200).json({
      status: cjResult.code === 200 ? 'auto' : 'partial',
      cjResponse: cjResult,
      itemsOrdered: orderProducts.map(p => ({ name: p.name, cost: p.cost })),
      unmapped: unmapped.length > 0 ? unmapped : undefined,
    });
  } catch (err) {
    console.error(`[CJ] Error:`, err);
    return res.status(200).json({
      status: 'error',
      error: err instanceof Error ? err.message : String(err),
      sessionId,
      items: items.map((id: string) => ({ id, name: CJ_PRODUCT_MAP[id]?.name || id })),
      shipping: { name: shippingName, address: shippingAddress, city: shippingCity, state: shippingState, zip: shippingZip, country: shippingCountry },
    });
  }
}
