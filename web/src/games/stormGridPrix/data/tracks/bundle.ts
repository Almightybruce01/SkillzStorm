import { LANE_CENTER as P01, TRACK_NAME as N01, TRACK_SLUG as S01, TRACK_THEME as T01 } from './track01.gen';
import { LANE_CENTER as P02, TRACK_NAME as N02, TRACK_SLUG as S02, TRACK_THEME as T02 } from './track02.gen';
import { LANE_CENTER as P03, TRACK_NAME as N03, TRACK_SLUG as S03, TRACK_THEME as T03 } from './track03.gen';
import { LANE_CENTER as P04, TRACK_NAME as N04, TRACK_SLUG as S04, TRACK_THEME as T04 } from './track04.gen';
import { LANE_CENTER as P05, TRACK_NAME as N05, TRACK_SLUG as S05, TRACK_THEME as T05 } from './track05.gen';
import { LANE_CENTER as P06, TRACK_NAME as N06, TRACK_SLUG as S06, TRACK_THEME as T06 } from './track06.gen';
import { LANE_CENTER as P07, TRACK_NAME as N07, TRACK_SLUG as S07, TRACK_THEME as T07 } from './track07.gen';
import { LANE_CENTER as P08, TRACK_NAME as N08, TRACK_SLUG as S08, TRACK_THEME as T08 } from './track08.gen';
import { LANE_CENTER as P09, TRACK_NAME as N09, TRACK_SLUG as S09, TRACK_THEME as T09 } from './track09.gen';
import { LANE_CENTER as P10, TRACK_NAME as N10, TRACK_SLUG as S10, TRACK_THEME as T10 } from './track10.gen';
import { ELITE_BIOME_TRACKS } from './biomeEliteCircuits';
import type { StormTrackDef } from './types';

export type { LanePoint, StormTrackDef } from './types';

export const STORM_GRID_TRACKS: StormTrackDef[] = [
  { slug: S01, name: N01, theme: T01, points: P01 },
  { slug: S02, name: N02, theme: T02, points: P02 },
  { slug: S03, name: N03, theme: T03, points: P03 },
  { slug: S04, name: N04, theme: T04, points: P04 },
  { slug: S05, name: N05, theme: T05, points: P05 },
  { slug: S06, name: N06, theme: T06, points: P06 },
  { slug: S07, name: N07, theme: T07, points: P07 },
  { slug: S08, name: N08, theme: T08, points: P08 },
  { slug: S09, name: N09, theme: T09, points: P09 },
  { slug: S10, name: N10, theme: T10, points: P10 },
  ...ELITE_BIOME_TRACKS,
];

/** Elite multiplayer: core five circuits + rainforest + coastal biomes (host pick). */
export const MULTIPLAYER_TRACKS: StormTrackDef[] = [
  ...STORM_GRID_TRACKS.slice(0, 5),
  ...ELITE_BIOME_TRACKS,
];
