
"use client";

import { useEffect, useState } from "react";
import type { Song } from "@/lib/types";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";
import { activeAsset } from "@/lib/sync";
import { LyricsDisplay } from "./LyricsDisplay";
import { VisualSupportPanel } from "./VisualSupportPanel";

export function Karaoke({ songs }: { songs: Song[] }) {
  const [songId, setSongId] = useState(songs[0].id);
  const [size, setSize] = useState(2);
  const [countdown, setCountdown] = useState<number | null>(null);

  const song = songs.find((s) => s.id === songId) ?? songs[0];
  const { time, playing, pause, restart } =
    useAudioPlayer(song.audio.src);

  useEffect(() => {
    if (countdown === null) return;

    const timer = window.setTimeout(() => {
      if (countdown === 1) {
        setCountdown(null);
        restart();
      } else {
        setCountdown(countdown - 1);
      }
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [countdown, restart]);

  function startSingalong() {
    if (playing) {
      pause();
      setCountdown(null);
    } else {
      setCountdown(5);
    }
  }

  function startOver() {
    setCountdown(null);
    restart();
  }

  return (
    <main
      className="app"
      style={{
        ["--lyric-size" as string]: `${size * 1.25 + 0.5}rem`,
      }}
    >
      <h1>{song.title}</h1>

      {songs.length > 1 && (
        <label>
          Choose a song{" "}
          <select
            value={songId}
            disabled={countdown !== null}
            onChange={(e) => {
              setCountdown(null);
              setSongId(e.target.value);
            }}
          >
            {songs.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
          </select>
        </label>
      )}

      {countdown !== null && (
        <div className="countdown" role="status" aria-live="assertive">
          <span>Get ready!</span>
          <strong>{countdown}</strong>
        </div>
      )}

      <VisualSupportPanel asset={activeAsset(song, time)} />

      <LyricsDisplay lines={song.lyrics} time={time} />

      <div className="controls">
        <button
          onClick={startSingalong}
          disabled={countdown !== null}
        >
          {playing
            ? "Pause"
            : countdown !== null
              ? "Get ready…"
              : "Start singalong"}
        </button>

        <button onClick={startOver}>Start over</button>

        <button
          onClick={() => setSize((s) => Math.max(1, s - 1))}
          aria-label="Smaller text"
        >
          A−
        </button>

        <button
          onClick={() => setSize((s) => Math.min(5, s + 1))}
          aria-label="Larger text"
        >
          A+
        </button>
      </div>

      <footer>
        <p>
          Inclusive Karaoke prototype. Visual signing cues are drafts
          and need checking before public use.
        </p>
      </footer>
    </main>
  );
}
