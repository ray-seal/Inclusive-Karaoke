
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
    start: 2.43,
    end: 9.73,
    words: [
      { text: "We", start: 2.43, end: 2.70 },
      { text: "wish", start: 2.70, end: 3.10 },
      { text: "you", start: 3.10, end: 3.40 },
      { text: "a", start: 3.40, end: 3.60 },
      { text: "Merry", start: 3.60, end: 4.50 },
      { text: "Christmas", start: 4.50, end: 9.73 },
    ],
  },
  {
    text: "We wish you a Merry Christmas",
    start: 9.73,
    end: 17.44,
  },
  {
    text: "We wish you a Merry Christmas",
    start: 17.44,
    end: 23.53,
  },
  {
    text: "And a Happy New Year",
    start: 23.53,
    end: 30.43,
  },
  {
    text: "Good tidings we bring",
    start: 30.43,
    end: 35.71,
  },
  {
    text: "To you and your kin",
    start: 35.71,
    end: 40.58,
  },
  {
    text: "Good tidings for Christmas",
    start: 40.58,
    end: 46.66,
  },
  {
    text: "And a Happy New Year",
    start: 46.66,
    end: 52.76,
  },
  {
    text: "Now bring us some figgy pudding",
    start: 52.76,
    end: 59.65,
  },
  {
    text: "Now bring us some figgy pudding",
    start: 59.65,
    end: 66.14,
  },
  {
    text: "Now bring us some figgy pudding",
    start: 66.14,
    end: 73.44,
  },
  {
    text: "And bring it right here",
    start: 73.44,
    end: 79.54,
  },
  {
    text: "We wish you a Merry Christmas",
    start: 79.54,
    end: 88.06,
  },
  {
    text: "And a Happy New Year",
    start: 88.06,
    end: 92.38,
  },
]

