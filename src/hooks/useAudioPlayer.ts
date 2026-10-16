"use client";
import { useCallback, useEffect, useRef, useState } from "react";

/** Playback only: knows nothing about lyrics or visuals. */
export function useAudioPlayer(src: string) {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(src);
    ref.current = audio;
    setTime(0);
    setPlaying(false);
    let raf = 0;
    const tick = () => {
      setTime(audio.currentTime);
      raf = requestAnimationFrame(tick);
    };
    const onPlay = () => { setPlaying(true); raf = requestAnimationFrame(tick); };
    const onStop = () => { setPlaying(false); cancelAnimationFrame(raf); setTime(audio.currentTime); };
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onStop);
    audio.addEventListener("ended", onStop);
    return () => {
      cancelAnimationFrame(raf);
      audio.pause();
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onStop);
      audio.removeEventListener("ended", onStop);
    };
  }, [src]);

  const play = useCallback(() => { void ref.current?.play(); }, []);
  const pause = useCallback(() => ref.current?.pause(), []);
  const restart = useCallback(() => {
    if (ref.current) { ref.current.currentTime = 0; void ref.current.play(); }
  }, []);
  return { time, playing, play, pause, restart };
}
