
import type { Song } from "@/lib/types";

const audioLicence = {
  creator: "Pracchia-78",
  source:
    "https://commons.wikimedia.org/wiki/File:Anonimo_-_We_Wish_You_a_Merry_Christmas.ogg",
  licence: "Public domain dedication",
  attribution: "Pracchia-78 / Wikimedia Commons",
  verified: false,
  notes: "Check the source licence before public release.",
};

const lyricsLicence = {
  creator: "Traditional",
  source: "Traditional English Christmas carol",
  licence: "Public domain",
  attribution: "Traditional lyrics",
  verified: false,
  notes: "Verify the lyric version before release.",
};

export const weWishYouMerryChristmas: Song = {
  id: "we-wish-you-a-merry-christmas",
  title: "We Wish You a Merry Christmas",
  artist: "Traditional carol · instrumental backing",
  lyricsLicence,
  audio: {
    src: "/audio/we-wish-you-a-merry-christmas.ogg",
    durationSeconds: 93,
    licence: audioLicence,
  },
  lyrics: [
    {
  text: "We wish you a Merry Christmas",
  start: 0,
  end: 7,
  words: [
    words: [
  { text: "We", start: 2.4, end: 2.7 },
  { text: "wish", start: 2.7, end: 3.1 },
  { text: "you", start: 3.1, end: 3.4 },
  { text: "a", start: 3.4, end: 3.6 },
  { text: "Merry", start: 3.6, end: 4.5 },
  { text: "Christmas", start: 4.5, end: 7 },
],
    { text: "We wish you a Merry Christmas", start: 7, end: 14 },
    { text: "We wish you a Merry Christmas", start: 14, end: 21 },
    { text: "And a Happy New Year", start: 21, end: 28 },
    { text: "Good tidings we bring", start: 28, end: 33 },
    { text: "To you and your kin", start: 33, end: 38 },
    { text: "Good tidings for Christmas", start: 38, end: 44 },
    { text: "And a Happy New Year", start: 44, end: 50 },
    { text: "Now bring us some figgy pudding", start: 50, end: 57 },
    { text: "Now bring us some figgy pudding", start: 57, end: 64 },
    { text: "Now bring us some figgy pudding", start: 64, end: 71 },
    { text: "And bring it right here", start: 71, end: 77 },
    { text: "Good tidings we bring", start: 77, end: 81 },
    { text: "To you and your kin", start: 81, end: 85 },
    { text: "Good tidings for Christmas", start: 85, end: 89 },
    { text: "And a Happy New Year", start: 89, end: 93 },
  ],
  assets: [],
  cues: [],
};
