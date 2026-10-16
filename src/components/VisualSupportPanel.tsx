import type { VisualAsset } from "@/lib/types";

const labels: Record<VisualAsset["kind"], string> = {
  placeholder: "Placeholder picture",
  picture: "Picture",
  "makaton-symbol": "Makaton symbol",
  "makaton-sign": "Makaton sign",
  "bsl-sign": "British Sign Language",
};

/** Shows whichever asset it is given; swap assets in song data without changing this. */
export function VisualSupportPanel({ asset }: { asset?: VisualAsset }) {
  return (
    <section className="visual" aria-label="Visual support">
      {asset ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset.src} alt={asset.alt} />
          <small>{labels[asset.kind]}</small>
        </>
      ) : (
        <small>No visual for this moment</small>
      )}
    </section>
  );
}
