import type { CSSProperties, ReactNode } from "react";

type Props = {
  image: string;
  imageAlt: string;
  headline: ReactNode;
  subhead: ReactNode;
  heightClass?: string;
  imageClassName?: string;
  headlineStyle?: CSSProperties;
  subheadStyle?: CSSProperties;
};

export default function BriefHero({
  image,
  imageAlt,
  headline,
  subhead,
  heightClass = "h-[2.9in]",
  imageClassName = "",
  headlineStyle,
  subheadStyle,
}: Props) {
  return (
    <header className={`relative w-full ${heightClass} flex-none overflow-hidden`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={imageAlt}
        className={`absolute inset-0 h-full w-full object-cover ${imageClassName}`}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(12,12,12,0.25) 0%, rgba(12,12,12,0.72) 65%, rgba(12,12,12,0.95) 100%)",
        }}
      />
      <div className="relative z-10 flex h-full flex-col justify-end px-[0.6in] pb-[0.35in]">
        <h1
          className="font-display font-bold tracking-tight text-cream-200"
          style={{ fontSize: "44px", lineHeight: 1.05, ...headlineStyle }}
        >
          {headline}
        </h1>
        <p
          className="mt-3 max-w-[6.5in] text-cream-300"
          style={{ fontSize: "17px", lineHeight: 1.45, ...subheadStyle }}
        >
          {subhead}
        </p>
      </div>
    </header>
  );
}
