import { useCallback, useEffect, useRef, useState } from 'react';
import type { PublicRoom, RelayToClient, RelayToServer, Standing } from './stormGridProtocol';

export function stormGridRelayUrl(): string {
  return import.meta.env.VITE_STORMGRID_RELAY_URL || 'ws://127.0.0.1:3333';
}

export type RemotePeer = {
  progress: number;
  lap: number;
  lateral: number;
  timeMs: number;
};

export function useStormGridRelay() {
  const wsRef = useRef<WebSocket | null>(null);
  const [connected, setConnected] = useState(false);
  const [playerId, setPlayerId] = useState<string | null>(null);
  const [room, setRoom] = useState<PublicRoom | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [raceGo, setRaceGo] = useState<{ raceStartMs: number; trackIndex: number } | null>(null);
  const [standings, setStandings] = useState<Standing[] | null>(null);
  const [remotePeers, setRemotePeers] = useState<Record<string, RemotePeer>>({});

  const send = useCallback((msg: RelayToServer) => {
    const ws = wsRef.current;
    if (!ws || ws.readyState !== WebSocket.OPEN) {
      setError('Not connected to relay');
      return;
    }
    ws.send(JSON.stringify(msg));
  }, []);

  useEffect(() => {
    return () => {
      wsRef.current?.close();
    };
  }, []);

  const connect = useCallback(() => {
    setError(null);
    if (wsRef.current?.readyState === WebSocket.OPEN || wsRef.current?.readyState === WebSocket.CONNECTING) return;
    const url = stormGridRelayUrl();
    const ws = new WebSocket(url);
    wsRef.current = ws;

    ws.onopen = () => setConnected(true);
    ws.onclose = () => {
      setConnected(false);
      if (wsRef.current === ws) wsRef.current = null;
    };
    ws.onerror = () => {
      setError('Cannot reach relay. Run: npm run stormgrid:relay');
    };

    ws.onmessage = (ev) => {
      let msg: RelayToClient;
      try {
        msg = JSON.parse(ev.data) as RelayToClient;
      } catch {
        return;
      }
      switch (msg.type) {
        case 'welcome':
          setPlayerId(msg.playerId);
          break;
        case 'room_state':
          setRoom({
            ...msg.room,
            visibility: msg.room.visibility ?? 'private',
            publicFillTarget: msg.room.publicFillTarget ?? 6,
          });
          if (msg.room.phase === 'lobby') {
            setRaceGo(null);
            setStandings(null);
            setCountdown(null);
            setRemotePeers({});
          }
          break;
        case 'countdown':
          setCountdown(msg.n);
          break;
        case 'race_go':
          setRemotePeers({});
          setRaceGo({ raceStartMs: msg.raceStartMs, trackIndex: msg.trackIndex });
          setCountdown(null);
          break;
        case 'peer_state':
          setRemotePeers((prev) => ({
            ...prev,
            [msg.playerId]: {
              progress: msg.progress,
              lap: msg.lap,
              lateral: msg.lateral,
              timeMs: msg.timeMs,
            },
          }));
          break;
        case 'player_finished':
          break;
        case 'race_complete':
          setStandings(msg.standings);
          setRaceGo(null);
          break;
        case 'error':
          setError(msg.message);
          break;
        default:
          break;
      }
    };
  }, []);

  const disconnect = useCallback(() => {
    wsRef.current?.close();
    wsRef.current = null;
    setConnected(false);
    setRoom(null);
    setPlayerId(null);
    setRaceGo(null);
    setStandings(null);
    setRemotePeers({});
  }, []);

  return {
    connect,
    disconnect,
    send,
    connected,
    playerId,
    room,
    error,
    setError,
    countdown,
    raceGo,
    standings,
    remotePeers,
  };
}
