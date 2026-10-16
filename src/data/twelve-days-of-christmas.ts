
import type { Song } from "@/lib/types";

const lyricsLicence = {
  creator: "Traditional",
  source: "Traditional English Christmas carol",
  licence: "Public domain, subject to verification",
  attribution: "Traditional lyrics",
  verified: false,
  notes: "Verify the exact lyric version before public release.",
};

const audioLicence = {
  creator: "See original recording attribution",
  source:
    "https://commons.wikimedia.org/wiki/File:Anonimo_-_Twelve_Days_of_Christmas.ogg",
  licence: "Check original recording licence",
  attribution: "To be verified against the original recording",
  verified: false,
  notes: "Confirm this is the same recording as the uploaded audio file.",
};

const gifts = [
  "A partridge in a pear tree",
  "Two turtle doves",
  "Three French hens",
  "Four calling birds",
  "Five gold rings",
  "Six geese a-laying",
  "Seven swans a-swimming",
  "Eight maids a-milking",
  "Nine ladies dancing",
  "Ten lords a-leaping",
  "Eleven pipers piping",
  "Twelve drummers drumming",
];

const ordinals = [
  "first", "second", "third", "fourth",
  "fifth", "sixth", "seventh", "eighth",
  "ninth", "tenth", "eleventh", "twelfth",
];

const lyricText: string[] = [];

for (let day = 0; day < 12; day++) {
  lyricText.push(
    `On the ${ordinals[day]} day of Christmas, my true love sent to me`
  );

  for (let gift = day; gift >= 0; gift--) {
    lyricText.push(
      gift === 0 && day > 0
        ? "And a partridge in a pear tree"
        : gifts[gift]
    );
  }
}

// Temporary timings to establish the complete lyric sequence.
// We will replace these with timings measured against the actual recording.
const durationSeconds = 94.6;
const provisionalLineDuration = durationSeconds / lyricText.length;

export const twelveDaysOfChristmas: Song = {
  id: "twelve-days-of-christmas",
  title: "The Twelve Days of Christmas",
  artist: "Traditional carol · instrumental backing",
  lyricsLicence,
  audio: {
    src: "/audio/twelve-days-of-xmas.ogg",
    durationSeconds,
    licence: audioLicence,
  },
  lyrics: lyricText.map((text, index) => ({
    text,
    start: index * provisionalLineDuration,
    end: (index + 1) * provisionalLineDuration,
  })),
  assets: [],
  cues: [],
};
