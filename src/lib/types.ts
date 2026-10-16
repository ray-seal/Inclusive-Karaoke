export interface LicenceInfo {
  /** Who made it */
  creator: string;
  /** Where it came from (URL or description) */
  source: string;
  /** SPDX id or plain description, e.g. "CC0-1.0" */
  licence: string;
  attribution?: string;
  /** Must be true only after a human has checked the licence. */
  verified: boolean;
  notes?: string;
}

/** Kept separate on purpose: these are NOT interchangeable. */
export type VisualKind = "placeholder" | "makaton-symbol" | "makaton-sign" | "bsl-sign" | "picture";

export interface VisualAsset {
  id: string;
  kind: VisualKind;
  /** Path under /public, e.g. /visuals/star.svg */
  src: string;
  /** Text alternative for screen readers */
  alt: string;
  licence: LicenceInfo;
  /** Who reviewed this content (required before real use of signs/symbols) */
  reviewedBy?: string;
}

export interface WordTiming {
  text: string;
  /** seconds */
  start: number;
  end: number;
}

export interface LyricLine {
  text: string;
  start: number;
  end: number;
  /** Optional word-level timing; line-level timing is always required. */
  words?: WordTiming[];
}

export interface VisualCue {
  assetId: string;
  start: number;
  end: number;
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  /** Licence for the lyrics and composition */
  lyricsLicence: LicenceInfo;
  audio: { src: string; durationSeconds: number; licence: LicenceInfo };
  lyrics: LyricLine[];
  assets: VisualAsset[];
  cues: VisualCue[];
}
