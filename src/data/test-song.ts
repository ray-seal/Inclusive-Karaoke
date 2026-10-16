import type { Song } from "@/lib/types";

const own = (what: string) => ({
  creator: "Inclusive Karaoke project",
  source: "Created for this repository as test content",
  licence: "CC0-1.0",
  attribution: "None required",
  verified: false,
  notes: `Original ${what}. Placeholder for testing only; not for the pilot.`,
});

export const testSong: Song = {
  id: "test-song",
  title: "Test Song: Shine, Little Star",
  artist: "Inclusive Karaoke (original test content)",
  lyricsLicence: own("lyrics"),
  audio: { src: "/audio/test-song.wav", durationSeconds: 24, licence: own("synthesised melody") },
  lyrics: [
    { text: "Shine, little star", start: 0, end: 6,
      words: [
        { text: "Shine,", start: 0, end: 2 },
        { text: "little", start: 2, end: 4 },
        { text: "star", start: 4, end: 6 },
      ] },
    { text: "Shine so bright", start: 6, end: 12 },
    { text: "Sing along with us", start: 12, end: 18 },
    { text: "Happy tonight", start: 18, end: 24 },
  ],
  assets: [
    { id: "star", kind: "placeholder", src: "/visuals/star.svg", alt: "Placeholder picture of a star", licence: own("SVG image") },
    { id: "sing", kind: "placeholder", src: "/visuals/sing.svg", alt: "Placeholder picture of a musical note", licence: own("SVG image") },
  ],
  cues: [
    { assetId: "star", start: 0, end: 12 },
    { assetId: "sing", start: 12, end: 24 },
  ],
};
