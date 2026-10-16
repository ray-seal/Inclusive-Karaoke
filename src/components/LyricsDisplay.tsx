import type { LyricLine } from "@/lib/types";
import { activeLineIndex, activeWordIndex } from "@/lib/sync";

export function LyricsDisplay({ lines, time }: { lines: LyricLine[]; time: number }) {
  const current = activeLineIndex(lines, time);
  return (
    <div className="lyrics" aria-live="off">
      {lines.map((line, i) => {
        const isActive = i === current;
        const wi = isActive ? activeWordIndex(line, time) : -1;
        return (
         <p
  key={i}
  className={isActive && !line.words ? "line active" : "line"}
  aria-current={isActive ? "true" : undefined}
>           {line.words
              ? line.words.map((w, j) => (
                  <span key={j} className={j === wi ? "word sung" : "word"}>{w.text} </span>
                ))
              : line.text}
          </p>
        );
      })}
    </div>
  );
}
