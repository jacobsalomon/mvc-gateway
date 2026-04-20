import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function BriefPage({ children }: Props) {
  return (
    <article className="brief-page">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(230,227,224,0.6) 1px, transparent 0)",
          backgroundSize: "14px 14px",
        }}
      />
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </article>
  );
}
