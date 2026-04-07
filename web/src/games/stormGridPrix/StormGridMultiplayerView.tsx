import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { MULTIPLAYER_TRACKS } from './data/tracks/bundle';
import { buildPolyline } from './engine/trackGeometry';
import type { Polyline } from './engine/trackGeometry';
import { createPlayerState, DEFAULT_RACE_CONFIG, getWorldPose, stepCar, type CarState } from './engine/RaceSimulation';
import { sfxBoost, sfxFinish, sfxLap, sfxEngineHum, unlockRacingAudio } from './audio/racingAudio';
import { BODY_STYLES, CAR_CLASSES } from './constants/eliteTuning';
import { useStormGridRelay, stormGridRelayUrl, type RemotePeer } from './network/useStormGridRelay';
import type { PublicRoom } from './network/stormGridProtocol';

const TOTAL_LAPS = 3;
const HUES = [190, 280, 40, 120, 330, 25, 310, 200];

function hueForPlayer(room: PublicRoom, id: string): number {
  const idx = room.players.findIndex((p) => p.id === id);
  return HUES[idx % HUES.length] ?? 200;
}

function peerToCar(peer: RemotePeer): CarState {
  return {
    progress: peer.progress,
    speed: 0,
    lateral: peer.lateral,
    lap: peer.lap,
  };
}

function readLoadout() {
  try {
    const e = parseInt(localStorage.getItem('sgp_elite_engine') || '0', 10);
    const b = parseInt(localStorage.getItem('sgp_elite_body') || '0', 10);
    const car = CAR_CLASSES[Math.min(CAR_CLASSES.length - 1, Math.max(0, e))];
    const body = BODY_STYLES[Math.min(BODY_STYLES.length - 1, Math.max(0, b))];
    return { car, body };
  } catch {
    return { car: CAR_CLASSES[0], body: BODY_STYLES[0] };
  }
}

function StormGridMultiplayerRace({
  gameTitle,
  track,
  raceStartMs,
  playerId,
  room,
  remotePeers,
  send,
}: {
  gameTitle: string;
  track: (typeof MULTIPLAYER_TRACKS)[number];
  raceStartMs: number;
  playerId: string;
  room: PublicRoom;
  remotePeers: Record<string, RemotePeer>;
  send: (msg: import('./network/stormGridProtocol').RelayToServer) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const polyRef = useRef<Polyline | null>(null);
  const playerRef = useRef(createPlayerState());
  const keysRef = useRef(new Set<string>());
  const rafRef = useRef(0);
  const lastRef = useRef(0);
  const finishedRef = useRef(false);
  const remoteRef = useRef(remotePeers);
  remoteRef.current = remotePeers;
  const roomRef = useRef(room);
  roomRef.current = room;
  const boostHeldRef = useRef(false);
  const boostCdRef = useRef(0);
  const boostTimerRef = useRef(0);

  const { car: carClass, body: bodyStyle } = useMemo(() => readLoadout(), [raceStartMs]);

  const cfg = useMemo(
    () => ({
      ...DEFAULT_RACE_CONFIG,
      accel: DEFAULT_RACE_CONFIG.accel * carClass.accelMul,
      maxSpeed: DEFAULT_RACE_CONFIG.maxSpeed * carClass.topSpeedMul,
    }),
    [carClass.accelMul, carClass.topSpeedMul]
  );

  useEffect(() => {
    unlockRacingAudio();
    polyRef.current = buildPolyline(track.points);
    playerRef.current = createPlayerState();
    finishedRef.current = false;
    boostCdRef.current = 0;
    boostTimerRef.current = 0;
  }, [track]);

  useEffect(() => {
    const id = window.setInterval(() => {
      const poly = polyRef.current;
      if (!poly || finishedRef.current) return;
      const p = playerRef.current;
      const elapsed = Date.now() - raceStartMs;
      send({
        type: 'race_state',
        progress: p.progress,
        lap: p.lap,
        lateral: p.lateral,
        timeMs: elapsed,
      });
    }, 100);
    return () => window.clearInterval(id);
  }, [raceStartMs, send]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === 'Space') e.preventDefault();
      keysRef.current.add(e.code);
    };
    const offKey = (e: KeyboardEvent) => keysRef.current.delete(e.code);
    window.addEventListener('keydown', onKey);
    window.addEventListener('keyup', offKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('keyup', offKey);
    };
  }, []);

  useEffect(() => {
    lastRef.current = performance.now();
    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - lastRef.current) / 1000);
      lastRef.current = now;
      const poly = polyRef.current;
      if (!poly) {
        rafRef.current = requestAnimationFrame(loop);
        return;
      }

      const elapsed = Date.now() - raceStartMs;

      if (!finishedRef.current) {
        const k = keysRef.current;
        let throttle = 0;
        if (k.has('ArrowUp') || k.has('KeyW')) throttle += 1;
        if (k.has('ArrowDown') || k.has('KeyS')) throttle -= 0.55;
        let steer = 0;
        if (k.has('ArrowLeft') || k.has('KeyA')) steer -= 1;
        if (k.has('ArrowRight') || k.has('KeyD')) steer += 1;

        boostCdRef.current = Math.max(0, boostCdRef.current - dt);
        boostTimerRef.current = Math.max(0, boostTimerRef.current - dt);
        const wantBoost = k.has('Space') || boostHeldRef.current;
        if (wantBoost && boostCdRef.current <= 0 && !finishedRef.current) {
          boostCdRef.current = carClass.id === 'proximity-x' ? 2 : 2.35;
          boostTimerRef.current = 0.42;
          sfxBoost();
        }

        const prevLap = playerRef.current.lap;
        stepCar(playerRef.current, poly, throttle, steer, dt, cfg);
        if (boostTimerRef.current > 0) {
          playerRef.current.speed = Math.min(playerRef.current.speed + 4.2 * dt, cfg.maxSpeed * 1.42);
        }
        if (playerRef.current.lap > prevLap) {
          sfxLap();
        }
        sfxEngineHum(playerRef.current.speed / cfg.maxSpeed);

        if (playerRef.current.lap > TOTAL_LAPS) {
          finishedRef.current = true;
          send({ type: 'race_done', timeMs: elapsed });
          sfxFinish();
        }
      }

      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (canvas && ctx) {
        const w = canvas.width;
        const h = canvas.height;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, w, h);
        ctx.scale(dpr, dpr);
        const cw = w / dpr;
        const ch = h / dpr;
        const poseP = getWorldPose(poly, playerRef.current, 1);
        ctx.save();
        ctx.translate(cw / 2, ch / 2);
        ctx.rotate(-poseP.angle);
        ctx.translate(-poseP.x, -poseP.y);
        const pts = poly.points;
        for (let i = 1; i < pts.length; i++) {
          const a = pts[i - 1];
          const b = pts[i];
          ctx.strokeStyle = track.theme;
          ctx.globalAlpha = 0.22;
          ctx.lineWidth = (a.w + b.w) * 0.45;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
          ctx.globalAlpha = 0.95;
          ctx.strokeStyle = '#475569';
          ctx.lineWidth = 7;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
        ctx.restore();
        ctx.save();
        ctx.translate(cw / 2, ch / 2);
        ctx.rotate(-poseP.angle);
        ctx.translate(-poseP.x, -poseP.y);

        const drawCar = (x: number, y: number, ang: number, hue: number, lead: boolean) => {
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(ang);
          ctx.fillStyle = lead ? `hsl(${hue} 78% 58%)` : `hsl(${hue} 85% 52%)`;
          ctx.shadowColor = track.theme;
          ctx.shadowBlur = lead ? 18 : 10;
          ctx.fillRect(-14, -8, 28, 16);
          ctx.shadowBlur = 0;
          ctx.fillStyle = '#0f172a';
          ctx.fillRect(10, -5, 4, 3);
          ctx.restore();
        };

        roomRef.current.players.forEach((pl) => {
          if (pl.id === playerId) return;
          const rp = remoteRef.current[pl.id];
          if (!rp) return;
          const ghost = peerToCar(rp);
          const pose = getWorldPose(poly, ghost, 1);
          drawCar(pose.x, pose.y, pose.angle, hueForPlayer(roomRef.current, pl.id), false);
        });

        drawCar(poseP.x, poseP.y, poseP.angle, bodyStyle.primaryHue, true);

        if (boostTimerRef.current > 0) {
          ctx.save();
          ctx.translate(poseP.x, poseP.y);
          ctx.rotate(poseP.angle);
          const g = ctx.createLinearGradient(-52, 0, -10, 0);
          g.addColorStop(0, 'rgba(251, 191, 36, 0)');
          g.addColorStop(0.38, 'rgba(249, 115, 22, 0.88)');
          g.addColorStop(1, 'rgba(220, 38, 38, 0.95)');
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.moveTo(-16, -7);
          ctx.lineTo(-54, -4);
          ctx.lineTo(-62, 0);
          ctx.lineTo(-54, 4);
          ctx.lineTo(-16, 7);
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        }

        ctx.restore();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.fillStyle = '#e2e8f0';
        ctx.font = '600 13px system-ui,sans-serif';
        ctx.fillText(`${gameTitle} · ${track.name} · ELITE SYNC`, 14, 22);
        ctx.fillStyle = '#a855f7';
        ctx.font = '11px system-ui,sans-serif';
        ctx.fillText(
          `Lap ${Math.min(playerRef.current.lap, TOTAL_LAPS)}/${TOTAL_LAPS} · ${(elapsed / 1000).toFixed(2)}s`,
          14,
          40
        );
        ctx.fillStyle = '#38bdf8';
        ctx.fillText('WASD · Space / BOOST · sync timer', 14, ch / dpr - 14);
        if (finishedRef.current) {
          ctx.fillStyle = 'rgba(15,23,42,0.75)';
          ctx.fillRect(0, ch / dpr / 2 - 24, cw / dpr, 48);
          ctx.fillStyle = '#e2e8f0';
          ctx.font = '600 14px system-ui,sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('Finish sent — waiting for grid…', cw / dpr / 2, ch / dpr / 2 + 4);
          ctx.textAlign = 'left';
        }
      }

      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [gameTitle, track, playerId, raceStartMs, send, cfg, carClass.id, bodyStyle.primaryHue]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas?.parentElement) return;
    const ro = new ResizeObserver(() => {
      const r = canvas.parentElement!.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(r.width * dpr);
      canvas.height = Math.floor(Math.min(520, Math.max(300, r.width * 0.56)) * dpr);
    });
    ro.observe(canvas.parentElement);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-violet-500/35 bg-black shadow-[0_0_40px_rgba(139,92,246,0.15)]">
      <canvas ref={canvasRef} className="block w-full touch-none" />
      <button
        type="button"
        className="absolute bottom-16 right-3 flex h-14 w-20 touch-manipulation flex-col items-center justify-center rounded-xl border border-orange-500/50 bg-gradient-to-b from-orange-500/30 to-red-600/40 font-display text-[10px] font-black text-orange-100 active:scale-95"
        onPointerDown={(e) => {
          e.preventDefault();
          boostHeldRef.current = true;
        }}
        onPointerUp={() => {
          boostHeldRef.current = false;
        }}
        onPointerLeave={() => {
          boostHeldRef.current = false;
        }}
      >
        BOOST
        <span className="text-[8px] font-normal text-orange-200/80">fire</span>
      </button>
    </div>
  );
}

export function StormGridMultiplayerView({
  gameTitle,
  onFinish,
}: {
  gameTitle: string;
  onFinish: (finalScore: number) => void;
}) {
  const { connect, disconnect, send, connected, playerId, room, error, countdown, raceGo, standings, remotePeers } =
    useStormGridRelay();
  const [displayName, setDisplayName] = useState(() =>
    typeof localStorage !== 'undefined' ? localStorage.getItem('sgp_display') || 'Racer' : 'Racer'
  );
  const [joinCode, setJoinCode] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    connect();
    return () => disconnect();
  }, [connect, disconnect]);

  const saveName = useCallback((n: string) => {
    setDisplayName(n);
    try {
      localStorage.setItem('sgp_display', n);
    } catch {
      /* ignore */
    }
  }, []);

  const copyCode = useCallback((code: string) => {
    void navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  const host = room?.players.find((p) => p.isHost);
  const isHost = playerId != null && host?.id === playerId;

  if (standings) {
    const mine = standings.find((s) => s.playerId === playerId);
    const score = mine ? Math.floor(120000 / mine.place + Math.max(0, 120000 - mine.timeMs / 20)) : 0;
    return (
      <div className="space-y-4 rounded-xl border border-violet-500/35 bg-slate-950/95 p-5 text-slate-100">
        <p className="font-display text-lg font-black text-violet-300">Elite grid — results</p>
        <ul className="space-y-2">
          {standings.map((s) => (
            <li
              key={s.playerId}
              className={`flex items-center justify-between rounded-lg border px-3 py-2 text-sm ${
                s.playerId === playerId ? 'border-fuchsia-500/50 bg-fuchsia-500/10' : 'border-slate-700 bg-slate-900/50'
              }`}
            >
              <span>
                <span className="text-amber-400">#{s.place}</span> {s.name}
              </span>
              <span className="font-mono text-slate-400">{(s.timeMs / 1000).toFixed(2)}s</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-2 sm:flex-row">
          {isHost && (
            <button
              type="button"
              onClick={() => send({ type: 'reset_lobby' })}
              className="flex-1 rounded-lg border border-violet-500/50 bg-violet-500/15 py-2 text-sm font-bold text-violet-100"
            >
              Next race (lobby)
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              send({ type: 'leave_room' });
              onFinish(score);
            }}
            className="flex-1 rounded-lg border border-slate-600 py-2 text-sm text-slate-200"
          >
            Leave
          </button>
        </div>
      </div>
    );
  }

  if (raceGo && room && playerId) {
    const track = MULTIPLAYER_TRACKS[raceGo.trackIndex] ?? MULTIPLAYER_TRACKS[0];
    return (
      <div className="space-y-3">
        <StormGridMultiplayerRace
          key={`${raceGo.raceStartMs}-${raceGo.trackIndex}`}
          gameTitle={gameTitle}
          track={track}
          raceStartMs={raceGo.raceStartMs}
          playerId={playerId}
          room={room}
          remotePeers={remotePeers}
          send={send}
        />
      </div>
    );
  }

  const roomVis = room?.visibility ?? 'private';
  const fillTarget = room?.publicFillTarget ?? 6;

  return (
    <div className="space-y-4 rounded-2xl border border-violet-500/25 bg-slate-950/92 p-4 text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_48px_rgba(139,92,246,0.08)] sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-black text-violet-300">Multiplayer Elite</h3>
          <p className="mt-1 max-w-xl text-xs text-slate-500">
            6-char codes, server sync timer, seven circuits (incl. rainforest &amp; coastal). Solo Garage loadout applies here.
            Run relay:{' '}
            <code className="rounded bg-slate-800 px-1 text-[10px] text-cyan-300">npm run stormgrid:relay</code>
            <br />
            <span className="text-slate-600">Relay: {stormGridRelayUrl()}</span>
          </p>
        </div>
        <div
          className={`rounded-lg border px-2 py-1 text-[10px] font-mono uppercase ${
            connected ? 'border-emerald-500/40 text-emerald-400' : 'border-amber-500/40 text-amber-300'
          }`}
        >
          {connected ? 'relay online' : 'connecting…'}
        </div>
      </div>

      {error && (
        <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs text-red-200">{error}</p>
      )}

      <label className="block text-[10px] uppercase tracking-wider text-slate-500">Display name</label>
      <input
        value={displayName}
        onChange={(e) => saveName(e.target.value.slice(0, 24))}
        className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm"
        maxLength={24}
      />

      {!room ? (
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-700 p-3">
            <p className="mb-2 text-xs font-bold text-slate-300">Create lobby</p>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => send({ type: 'create_room', displayName, visibility: 'private' })}
                disabled={!connected}
                className="w-full rounded-lg border border-violet-500/50 bg-gradient-to-r from-violet-600/30 to-fuchsia-600/25 py-2 text-sm font-bold text-white disabled:opacity-40"
              >
                Private — you start the race
              </button>
              <button
                type="button"
                onClick={() => send({ type: 'create_room', displayName, visibility: 'public' })}
                disabled={!connected}
                className="w-full rounded-lg border border-amber-500/45 bg-amber-500/10 py-2 text-sm font-black text-amber-200 disabled:opacity-40"
              >
                Public grid — auto start at {fillTarget} drivers
              </button>
            </div>
          </div>
          <div className="rounded-lg border border-slate-700 p-3">
            <p className="mb-2 text-xs font-bold text-slate-300">Join with code</p>
            <input
              value={joinCode}
              onChange={(e) => setJoinCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6))}
              placeholder="SGP-XXXX"
              className="mb-2 w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 font-mono text-sm tracking-widest"
              maxLength={6}
            />
            <button
              type="button"
              onClick={() => send({ type: 'join_room', code: joinCode, displayName })}
              disabled={!connected || joinCode.length < 6}
              className="w-full rounded-lg border border-cyan-500/40 bg-cyan-500/10 py-2 text-sm font-bold text-cyan-100 disabled:opacity-40"
            >
              Join queue
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap items-center gap-3 rounded-lg border border-fuchsia-500/30 bg-fuchsia-500/5 p-3">
            <div>
              <p className="text-[10px] uppercase text-slate-500">Room code</p>
              <p className="font-mono text-2xl font-black tracking-[0.2em] text-fuchsia-300">{room.code}</p>
            </div>
            <button
              type="button"
              onClick={() => copyCode(room!.code)}
              className="rounded-lg border border-slate-600 px-3 py-1 text-xs text-slate-300"
            >
              {copied ? 'Copied' : 'Copy'}
            </button>
            <button
              type="button"
              onClick={() => send({ type: 'leave_room' })}
              className="ml-auto text-xs text-slate-500 underline"
            >
              Leave
            </button>
          </div>

          <div className="rounded-lg border border-slate-700 p-3">
            <p className="mb-2 text-[10px] uppercase text-slate-500">
              Queue ({room.players.length}/{room.maxPlayers})
              {roomVis === 'public'
                ? ` · public · auto at ${fillTarget}`
                : ` · private · host start (min ${room.minPlayers} ready)`}
            </p>
            <ul className="space-y-1">
              {room.players.map((p) => (
                <li key={p.id} className="flex items-center justify-between text-sm">
                  <span>
                    {p.name}
                    {p.isHost && <span className="ml-2 text-[10px] text-amber-400">HOST</span>}
                  </span>
                  <span className={p.ready ? 'text-emerald-400' : 'text-slate-500'}>{p.ready ? 'Ready' : 'Not ready'}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              disabled={roomVis === 'public'}
              onClick={() => send({ type: 'set_ready', ready: !room!.players.find((x) => x.id === playerId)?.ready })}
              className="mt-3 w-full rounded-lg border border-emerald-500/40 bg-emerald-500/10 py-2 text-sm text-emerald-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Toggle ready {roomVis === 'public' ? '(not used in public)' : ''}
            </button>
          </div>

          <div className="rounded-xl border border-slate-700/90 bg-slate-900/40 p-4 text-[11px] text-slate-400">
            <p className="font-bold text-slate-300">How to play</p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>WASD drive · Space or BOOST button — nitro fire behind the car.</li>
              <li>
                <strong className="text-violet-300">Private</strong>: everyone readies, host picks track and starts (2+).
              </li>
              <li>
                <strong className="text-amber-300">Public</strong>: share code; when {fillTarget} players are in the lobby,
                countdown starts automatically — no manual start.
              </li>
              <li>Use Solo tab for single-player; configure engine &amp; body in Solo Garage first.</li>
            </ul>
          </div>

          {isHost && (
            <div className="rounded-lg border border-slate-700 p-3">
              <p className="mb-2 text-xs font-bold text-slate-300">Host — visibility</p>
              <div className="mb-3 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => send({ type: 'set_visibility', visibility: 'private' })}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold ${
                    roomVis === 'private' ? 'bg-violet-500/25 text-violet-100 ring-1 ring-violet-400/40' : 'border border-slate-600 text-slate-400'
                  }`}
                >
                  Private
                </button>
                <button
                  type="button"
                  onClick={() => send({ type: 'set_visibility', visibility: 'public' })}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold ${
                    roomVis === 'public' ? 'bg-amber-500/20 text-amber-100 ring-1 ring-amber-400/40' : 'border border-slate-600 text-slate-400'
                  }`}
                >
                  Public ({fillTarget} auto)
                </button>
              </div>
              <p className="mb-2 text-xs font-bold text-slate-300">Pick circuit ({MULTIPLAYER_TRACKS.length} total)</p>
              <div className="grid max-h-[220px] gap-2 overflow-y-auto sm:grid-cols-2">
                {MULTIPLAYER_TRACKS.map((t, i) => (
                  <button
                    key={t.slug}
                    type="button"
                    onClick={() => send({ type: 'set_track', trackIndex: i })}
                    className={`rounded-lg border px-2 py-2 text-left text-xs ${
                      room.trackIndex === i ? 'border-violet-400 bg-violet-500/15' : 'border-slate-600 hover:border-violet-500/40'
                    }`}
                  >
                    <span className="block font-bold text-slate-100">{t.name}</span>
                    <span className="text-[10px] text-slate-500">{t.theme}</span>
                  </button>
                ))}
              </div>
              {roomVis === 'private' ? (
                <button
                  type="button"
                  onClick={() => send({ type: 'start_race' })}
                  className="mt-3 w-full rounded-lg border border-amber-500/50 bg-amber-500/15 py-2 text-sm font-black text-amber-200"
                >
                  Start elite race
                </button>
              ) : (
                <p className="mt-3 text-center text-xs text-amber-200/90">
                  Public grid — race launches automatically at {fillTarget} drivers ({room.players.length}/{fillTarget}).
                </p>
              )}
            </div>
          )}

          {!isHost && room.phase === 'lobby' && (
            <p className="text-center text-xs text-slate-500">
              {roomVis === 'public'
                ? `Public queue · ${room.players.length}/${fillTarget} — auto countdown when full`
                : 'Waiting for host to start…'}
            </p>
          )}
        </>
      )}

      {room?.phase === 'countdown' && countdown != null && (
        <div className="flex min-h-[160px] flex-col items-center justify-center rounded-xl border border-fuchsia-500/30 bg-slate-950/95 p-6">
          <p className="font-display text-7xl font-black text-fuchsia-300">{countdown}</p>
          <p className="mt-2 text-xs text-slate-500">Server sync</p>
        </div>
      )}
    </div>
  );
}
