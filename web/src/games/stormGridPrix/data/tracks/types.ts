export type LanePoint = { x: number; y: number; w: number };

export type StormTrackDef = {
  slug: string;
  name: string;
  theme: string;
  points: LanePoint[];
};
