#!/usr/bin/env node
/**
 * StormGrid Prix — Elite multiplayer relay (WebSocket).
 * Rooms, join codes, queue/ready, synchronized countdown + race timer.
 *
 * Run: npm run stormgrid:relay
 * Dev: point Vite at ws://127.0.0.1:3333 (see VITE_STORMGRID_RELAY_URL).
 */
import { randomBytes } from 'crypto';
import { WebSocketServer } from 'ws';

const PORT = Number(process.env.STORMGRID_RELAY_PORT || 3333);
const MIN_PLAYERS = 2;
const MAX_PLAYERS = 8;
/** Multiplayer host selects among seven circuits (0–6). */
const TRACK_MAX = 6;
const PUBLIC_FILL_TARGET = 6;

const rooms = new Map();
/** @type {Map<any, string>} */
const wsToRoom = new Map();

function genCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
  if (rooms.has(code)) return genCode();
  return code;
}

function pid() {
  return `p_${randomBytes(5).toString('hex')}`;
}

function broadcastAll(room, msg) {
  const s = JSON.stringify(msg);
  for (const p of room.players) {
    if (p.ws.readyState === 1) p.ws.send(s);
  }
}

function broadcastOthers(room, exceptWs, msg) {
  const s = JSON.stringify(msg);
  for (const p of room.players) {
    if (p.ws === exceptWs) continue;
    if (p.ws.readyState === 1) p.ws.send(s);
  }
}

function publicRoom(room) {
  const visibility = room.visibility || 'private';
  return {
    code: room.code,
    trackIndex: room.trackIndex,
    phase: room.phase,
    minPlayers: MIN_PLAYERS,
    maxPlayers: MAX_PLAYERS,
    visibility,
    publicFillTarget: room.publicFillTarget ?? PUBLIC_FILL_TARGET,
    players: room.players.map((p) => ({
      id: p.id,
      name: p.name,
      ready: p.ready,
      isHost: p.id === room.hostId,
    })),
  };
}

function sendRoom(room) {
  broadcastAll(room, { type: 'room_state', room: publicRoom(room) });
}

function tryAutoPublicStart(room) {
  if (room.phase !== 'lobby') return;
  if ((room.visibility || 'private') !== 'public') return;
  if (room.players.length < (room.publicFillTarget || PUBLIC_FILL_TARGET)) return;
  startCountdown(room);
}

function maybeCompleteRace(room) {
  if (room.phase !== 'racing') return;
  if (room.finishes.length < room.expectedFinishers) return;
  const standings = [...room.finishes]
    .sort((a, b) => a.timeMs - b.timeMs)
    .map((f, i) => ({
      playerId: f.id,
      name: f.name,
      timeMs: f.timeMs,
      place: i + 1,
    }));
  room.phase = 'results';
  broadcastAll(room, { type: 'race_complete', standings });
  sendRoom(room);
}

function removePlayer(ws, roomCode) {
  const room = rooms.get(roomCode);
  if (!room) return;
  const leavingId = ws.playerId;
  room.players = room.players.filter((p) => p.ws !== ws);
  wsToRoom.delete(ws);
  if (room.players.length === 0) {
    rooms.delete(roomCode);
    return;
  }
  if (room.hostId === leavingId) {
    room.hostId = room.players[0].id;
  }
  if (room.phase === 'countdown') {
    room.phase = 'lobby';
    room.raceStartMs = null;
    room.finishes = [];
    room.players.forEach((p) => {
      p.ready = false;
    });
  } else if (room.phase === 'racing') {
    room.finishes = room.finishes.filter((f) => f.id !== leavingId);
    room.expectedFinishers = room.players.length;
    maybeCompleteRace(room);
    if (room.phase === 'racing') {
      sendRoom(room);
      return;
    }
    return;
  }
  if (room.phase === 'lobby') {
    room.players.forEach((p) => {
      p.ready = false;
    });
  }
  sendRoom(room);
}

function findRoomByWs(ws) {
  const code = wsToRoom.get(ws);
  return code ? rooms.get(code) : null;
}

function startCountdown(room) {
  if (room.phase !== 'lobby') return;
  room.phase = 'countdown';
  sendRoom(room);
  broadcastAll(room, { type: 'countdown', n: 3 });
  setTimeout(() => broadcastAll(room, { type: 'countdown', n: 2 }), 700);
  setTimeout(() => broadcastAll(room, { type: 'countdown', n: 1 }), 1400);
  setTimeout(() => {
    room.phase = 'racing';
    room.raceStartMs = Date.now();
    room.finishes = [];
    room.expectedFinishers = room.players.length;
    broadcastAll(room, {
      type: 'race_go',
      raceStartMs: room.raceStartMs,
      trackIndex: room.trackIndex,
    });
    sendRoom(room);
  }, 2100);
}

const wss = new WebSocketServer({ port: PORT });
console.log(`[stormgrid-relay] listening on ws://0.0.0.0:${PORT}`);

wss.on('connection', (ws) => {
  ws.playerId = pid();

  ws.send(JSON.stringify({ type: 'welcome', playerId: ws.playerId }));

  ws.on('message', (raw) => {
    let data;
    try {
      data = JSON.parse(raw.toString());
    } catch {
      return;
    }

    const room = findRoomByWs(ws);

    if (data.type === 'create_room') {
      const name = String(data.displayName || 'Racer').slice(0, 24);
      const visibility = data.visibility === 'public' ? 'public' : 'private';
      if (room) removePlayer(ws, room.code);
      const code = genCode();
      const r = {
        code,
        hostId: ws.playerId,
        trackIndex: 0,
        phase: 'lobby',
        raceStartMs: null,
        finishes: [],
        expectedFinishers: 0,
        visibility,
        publicFillTarget: PUBLIC_FILL_TARGET,
        players: [{ id: ws.playerId, name, ws, ready: false }],
      };
      rooms.set(code, r);
      wsToRoom.set(ws, code);
      sendRoom(r);
      tryAutoPublicStart(r);
      return;
    }

    if (data.type === 'join_room') {
      const code = String(data.code || '')
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, '')
        .slice(0, 6);
      const name = String(data.displayName || 'Racer').slice(0, 24);
      const r = rooms.get(code);
      if (!r) {
        ws.send(JSON.stringify({ type: 'error', message: 'Invalid room code' }));
        return;
      }
      if (r.players.length >= MAX_PLAYERS) {
        ws.send(JSON.stringify({ type: 'error', message: 'Room is full' }));
        return;
      }
      if (r.phase !== 'lobby') {
        ws.send(JSON.stringify({ type: 'error', message: 'Race already in progress' }));
        return;
      }
      if (room) removePlayer(ws, room.code);
      r.players.push({ id: ws.playerId, name, ws, ready: false });
      wsToRoom.set(ws, code);
      sendRoom(r);
      tryAutoPublicStart(r);
      return;
    }

    if (data.type === 'leave_room') {
      if (!room) return;
      removePlayer(ws, room.code);
      return;
    }

    if (!room) {
      ws.send(JSON.stringify({ type: 'error', message: 'Join or create a room first' }));
      return;
    }

    if (data.type === 'set_ready') {
      if (room.phase !== 'lobby') return;
      const p = room.players.find((x) => x.ws === ws);
      if (p) p.ready = !!data.ready;
      sendRoom(room);
      return;
    }

    if (data.type === 'set_track') {
      if (room.hostId !== ws.playerId) return;
      if (room.phase !== 'lobby') return;
      let idx = Number(data.trackIndex);
      if (Number.isNaN(idx)) idx = 0;
      room.trackIndex = Math.max(0, Math.min(TRACK_MAX, idx));
      sendRoom(room);
      return;
    }

    if (data.type === 'set_visibility') {
      if (room.hostId !== ws.playerId) return;
      if (room.phase !== 'lobby') return;
      room.visibility = data.visibility === 'public' ? 'public' : 'private';
      if (room.visibility === 'public') {
        room.players.forEach((p) => {
          p.ready = true;
        });
      }
      sendRoom(room);
      tryAutoPublicStart(room);
      return;
    }

    if (data.type === 'start_race') {
      if (room.hostId !== ws.playerId) return;
      if (room.phase !== 'lobby') return;
      if ((room.visibility || 'private') === 'public') {
        ws.send(
          JSON.stringify({
            type: 'error',
            message: 'Public grid starts automatically at 6 drivers',
          })
        );
        return;
      }
      const allReady = room.players.length > 0 && room.players.every((p) => p.ready);
      if (!allReady) {
        ws.send(JSON.stringify({ type: 'error', message: 'All players must ready up' }));
        return;
      }
      if (room.players.length < MIN_PLAYERS) {
        ws.send(JSON.stringify({ type: 'error', message: `Need at least ${MIN_PLAYERS} racers` }));
        return;
      }
      startCountdown(room);
      return;
    }

    if (data.type === 'reset_lobby') {
      if (room.hostId !== ws.playerId) return;
      if (room.phase !== 'results') return;
      room.phase = 'lobby';
      room.raceStartMs = null;
      room.finishes = [];
      room.players.forEach((p) => {
        p.ready = false;
      });
      sendRoom(room);
      return;
    }

    if (data.type === 'race_state') {
      if (room.phase !== 'racing') return;
      const { progress, lap, lateral, timeMs } = data;
      broadcastOthers(room, ws, {
        type: 'peer_state',
        playerId: ws.playerId,
        progress: Number(progress),
        lap: Number(lap),
        lateral: Number(lateral),
        timeMs: Number(timeMs),
      });
      return;
    }

    if (data.type === 'race_done') {
      if (room.phase !== 'racing') return;
      const timeMs = Number(data.timeMs);
      const existing = room.finishes.find((f) => f.id === ws.playerId);
      if (existing) return;
      const place = room.finishes.length + 1;
      const pl = room.players.find((p) => p.ws === ws);
      room.finishes.push({ id: ws.playerId, name: pl?.name || 'Racer', timeMs, place });
      broadcastAll(room, { type: 'player_finished', playerId: ws.playerId, place, timeMs });
      maybeCompleteRace(room);
      return;
    }
  });

  ws.on('close', () => {
    const code = wsToRoom.get(ws);
    if (code) removePlayer(ws, code);
  });
});
