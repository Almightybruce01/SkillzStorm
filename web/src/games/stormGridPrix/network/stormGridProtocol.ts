/** Wire format for StormGrid Prix Elite relay (browser ↔ Node ws server). */

export type PublicPlayer = {
  id: string;
  name: string;
  ready: boolean;
  isHost: boolean;
};

export type RoomPhase = 'lobby' | 'countdown' | 'racing' | 'results';

export type RoomVisibility = 'private' | 'public';

export type PublicRoom = {
  code: string;
  trackIndex: number;
  phase: RoomPhase;
  players: PublicPlayer[];
  minPlayers: number;
  maxPlayers: number;
  /** Private: host starts when all ready (min 2). Public: auto-starts at publicFillTarget players. */
  visibility?: RoomVisibility;
  publicFillTarget?: number;
};

export type Standing = { playerId: string; name: string; timeMs: number; place: number };

export type RelayToClient =
  | { type: 'welcome'; playerId: string }
  | { type: 'room_state'; room: PublicRoom }
  | { type: 'countdown'; n: number }
  | { type: 'race_go'; raceStartMs: number; trackIndex: number }
  | { type: 'peer_state'; playerId: string; progress: number; lap: number; lateral: number; timeMs: number }
  | { type: 'player_finished'; playerId: string; place: number; timeMs: number }
  | { type: 'race_complete'; standings: Standing[] }
  | { type: 'error'; message: string };

export type RelayToServer =
  | { type: 'create_room'; displayName: string; visibility?: RoomVisibility }
  | { type: 'join_room'; code: string; displayName: string }
  | { type: 'leave_room' }
  | { type: 'set_ready'; ready: boolean }
  | { type: 'set_track'; trackIndex: number }
  | { type: 'set_visibility'; visibility: RoomVisibility }
  | { type: 'start_race' }
  | { type: 'reset_lobby' }
  | { type: 'race_state'; progress: number; lap: number; lateral: number; timeMs: number }
  | { type: 'race_done'; timeMs: number };
