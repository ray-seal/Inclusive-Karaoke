# Inclusive Karaoke

A free, non-profit, accessible karaoke web app that helps people with different communication needs join in shared singing. Goal: 3–5 Christmas carols for a care-home pilot in December 2026.

Hand-in-hand with the song, the app shows synchronised lyrics and a replaceable visual-support panel (pictures, and later professionally reviewed Makaton symbols/signs or BSL). These are kept as separate asset kinds and are **never** auto-translated or assumed interchangeable.

## Status

Minimal prototype: one original placeholder song. **No licensing, accessibility or deployment requirements have been verified yet.** Placeholder content is flagged `verified: false` in the data.

## Setup

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build
```

## Structure

```
public/audio/        audio files (each needs a licence record in song data)
public/visuals/      visual assets (each needs a licence record)
src/lib/types.ts     Song, lyric (line + optional word timings), asset, licence types
src/lib/sync.ts     pure functions: active line / word / visual at time t
src/data/            structured song data (one file per song)
src/hooks/useAudioPlayer.ts   playback only
src/components/      UI: Karaoke, LyricsDisplay, VisualSupportPanel
```

## Adding a song

Create a `Song` in `src/data/`, with audio + lyrics licence info, line timings (optionally `words`), assets, and `cues` mapping assets to time ranges. Add it to the list in `src/app/page.tsx`. Only add content you have permission to use, and record its source and licence.

## Privacy

No personal data, cookies, analytics, database or authentication.
