import type { LyricLine, Song, VisualAsset } from "./types";

export function activeLineIndex(lines: LyricLine[], t: number): number {
  for (let i = lines.length - 1; i >= 0; i--) {
    if (t >= lines[i].start) return t < lines[i].end ? i : -1;
  }
  return -1;
}

/** Index of the word being sung, or -1 if the line has no word timings. */
export function activeWordIndex(line: LyricLine, t: number): number {
  if (!line.words) return -1;
  return line.words.findIndex((w) => t >= w.start && t < w.end);
}

export function activeAsset(song: Song, t: number): VisualAsset | undefined {
  const cue = song.cues.find((c) => t >= c.start && t < c.end);
  return cue && song.assets.find((a) => a.id === cue.assetId);
}
