"use client";
import { useState } from "react";
import type { Song } from "@/lib/types";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";
import { activeAsset } from "@/lib/sync";
import { LyricsDisplay } from "./LyricsDisplay";
import { VisualSupportPanel } from "./VisualSupportPanel";

export function Karaoke({ songs }: { songs: Song[] }) {
  const [songId, setSongId] = useState(songs[0].id);
  const [size, setSize] = useState(2);
  const song = songs.find((s) => s.id === songId) ?? songs[0];
  const { time, playing, play, pause, restart } = useAudioPlayer(song.audio.src);

  return (
    <main className="app" style={{ ["--lyric-size" as string]: `${size * 1.25 + 0.5}rem` }}>
      <h1>{song.title}</h1>
      {songs.length > 1 && (
        <label>
          Song{" "}
          <select value={songId} onChange={(e) => setSongId(e.target.value)}>
            {songs.map((s) => <option key={s.id} value={s.id}>{s.title}</option>)}
          </select>
        </label>
      )}
      <VisualSupportPanel asset={activeAsset(song, time)} />
      <LyricsDisplay lines={song.lyrics} time={time} />
      <div className="controls">
        <button onClick={playing ? pause : play}>{playing ? "Pause" : "Play"}</button>
        <button onClick={restart}>Restart</button>
        <button onClick={() => setSize((s) => Math.max(1, s - 1))} aria-label="Smaller text">A−</button>
        <button onClick={() => setSize((s) => Math.min(5, s + 1))} aria-label="Larger text">A+</button>
      </div>
      <footer>
        <p>Prototype with original placeholder content. Licences are not yet verified.</p>
      </footer>
    </main>
  );
}
