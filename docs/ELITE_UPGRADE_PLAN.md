# StormGrid / platform — elite upgrade roadmap

## Shipped in this wave

- **Garage**: engine preset + body style (solo), persisted for multiplayer paint.
- **Boost**: Space + on-screen BOOST, flame strip, audio sting, tuned cooldown.
- **Biomes**: Mystic Rainforest Apex, Coastal Velocity Run (multiplayer + full solo grid).
- **Multiplayer**: private lobbies (host start, 2+, all ready) vs **public grid** (auto countdown at 6 drivers).
- **AAA New tab**: only `isAAA` catalog rows (StormGrid Prix, Storm Defenders).
- **AdSense**: env-driven slot IDs (`VITE_ADSENSE_SLOT_DEFAULT` + per-placement keys); production uses live ads when slots are real 10-digit units.

## Next elite phases

1. **Ghost recordings** — store last lap as replay polynomial; optional async leaderboard.
2. **Relay hosting** — deploy `stormgrid-relay.mjs` on Fly/Railway with `wss://` and `VITE_STORMGRID_RELAY_URL`.
3. **Damage / slipstream** — light rubber-band for public matchmaking feel (server-approved).
4. **3D ribbon preview** — Three.js track flyover before grid (optional quality tier).
