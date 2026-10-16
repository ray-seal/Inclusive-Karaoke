
import type { LyricLine } from "@/lib/types";
import { activeLineIndex, activeWordIndex } from "@/lib/sync";

export function LyricsDisplay({
  lines,
  time,
}: {
  lines: LyricLine[];
  time: number;
}) {
  const current = activeLineIndex(lines, time);
  const line = current >= 0 ? lines[current] : undefined;
  const wi = line ? activeWordIndex(line, time) : -1;

  return (
    <div className="lyrics" aria-live="off">
      {line && (
        <p
          key={current}
          className={!line.words ? "line active" : "line"}
          aria-current="true"
        >
          {line.words
            ? line.words.map((w, j) => (
                <span
                  key={j}
                  className={j === wi ? "word sung" : "word"}
                >
                  {w.text}{" "}
                </span>
              ))
            : line.text}
        </p>
      )}
    </div>
  );
}
