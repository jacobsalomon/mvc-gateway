import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  children: ReactNode;
  className?: string;
};

export default function BriefSection({
  eyebrow,
  title,
  children,
  className = "",
}: Props) {
  return (
    <section className={`px-[0.6in] ${className}`}>
      {eyebrow ? (
        <div
          className="font-display uppercase tracking-[0.22em] text-amber-500"
          style={{ fontSize: "10px", fontWeight: 600 }}
        >
          {eyebrow}
        </div>
      ) : null}
      <h2
        className="mt-1 font-display font-bold text-cream-200"
        style={{ fontSize: "22px", lineHeight: 1.1 }}
      >
        {title}
      </h2>
      <div className="mt-3 text-cream-300" style={{ fontSize: "13px", lineHeight: 1.5 }}>
        {children}
      </div>
    </section>
  );
}
