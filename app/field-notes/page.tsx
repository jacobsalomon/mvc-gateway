import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedGrid from "@/components/animated-grid";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Field Notes | The Mechanical Vision Corporation",
  description:
    "Field Notes from Mechanical Vision Corporation on aviation maintenance, MRO labor pressure, documentation, and work capture.",
};

const publishedNote = {
  title: "The Aircraft Is Not Ready Until the Record Is Clean",
  href: "/field-notes/the-aircraft-is-not-ready-until-the-record-is-clean",
  dek: "Why the MRO labor shortage is becoming a capacity problem, and why scarce technician hours have to be protected at the point of work.",
  meta: "Field Note 01",
};

export default function FieldNotesPage() {
  return (
    <main className="min-h-screen bg-dark-950 text-white">
      <Navbar />

      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-dark-950 to-dark-900 px-6 py-28">
        <div
          className="absolute inset-0 parallax-bg opacity-[0.12]"
          style={{ backgroundImage: "url('/hero-bg.webp')" }}
        />
        <AnimatedGrid />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl">
            Field Notes
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/62 md:text-xl">
            Our first note on the MRO labor bottleneck.
          </p>
          <Link
            href={publishedNote.href}
            className="group mt-12 w-full rounded-sm border border-white/10 bg-white/[0.035] p-7 text-left transition-colors hover:border-white/20 md:p-9"
          >
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
              {publishedNote.meta}
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white md:text-5xl">
              {publishedNote.title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/58">
              {publishedNote.dek}
            </p>
            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white/75">
              Read the first Field Note{" "}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
