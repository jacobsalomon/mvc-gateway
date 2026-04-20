import type { ReactNode } from "react";

type Props = {
  value: ReactNode;
  label: ReactNode;
};

export default function BriefStat({ value, label }: Props) {
  return (
    <div className="flex flex-col gap-1 rounded-sm border border-cream-200/10 bg-cream-200/[0.02] px-4 py-3">
      <div
        className="font-display font-bold text-amber-400"
        style={{ fontSize: "40px", lineHeight: 1, letterSpacing: "-0.02em" }}
      >
        {value}
      </div>
      <div
        className="text-cream-300"
        style={{ fontSize: "12px", lineHeight: 1.35 }}
      >
        {label}
      </div>
    </div>
  );
}
