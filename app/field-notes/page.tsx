import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, FileText, ShieldCheck, Users } from "lucide-react";
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
  meta: "Field Note 01 / MRO labor bottleneck",
};

const upcomingNotes = [
  {
    title: "The Juniority Effect in Aircraft Maintenance",
    icon: Users,
    body: "What is lost when experienced technicians retire, and why replacing headcount does not immediately replace productive capacity.",
  },
  {
    title: "The Hidden Cost of Reconstructing Work After the Fact",
    icon: FileText,
    body: "Why records built from late notes, loose photos, memory, and reviewer follow-up slow release even when the task itself is complete.",
  },
  {
    title: "Why MRO Productivity Has to Start at the Point of Work",
    icon: Clock,
    body: "Why the most useful operational data is created while the work is happening, before it gets flattened into paperwork.",
  },
  {
    title: "The Mechanic Still Signs",
    icon: ShieldCheck,
    body: "Why AI belongs in aviation maintenance as an assistive documentation layer, not as a replacement for judgment, authority, or signoff.",
  },
];

export default function FieldNotesPage() {
  return (
    <main className="min-h-screen bg-dark-950 text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-dark-950 to-dark-900 px-6 pt-32 pb-20">
        <div
          className="absolute inset-0 parallax-bg opacity-[0.08]"
          style={{ backgroundImage: "url('/hero-bg.webp')" }}
        />
        <AnimatedGrid />

        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-sm border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-cream-400">
            <BookOpen size={14} />
            Field Notes
          </div>
          <h1 className="font-display text-5xl font-bold leading-[1.03] tracking-tight text-white md:text-7xl">
            Notes on the work behind the work.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/62 md:text-xl">
            A founder-led series on aviation maintenance, scarce technical labor,
            documentation pressure, and the systems MROs will need as capacity gets
            tighter.
          </p>
        </div>
      </section>

      <section className="px-6 py-18 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <Link
            href={publishedNote.href}
            className="group control-panel panel-corners rounded-sm p-8 transition-transform hover:-translate-y-1 md:p-10"
          >
            <span className="corner corner-tl" aria-hidden="true" />
            <span className="corner corner-tr" aria-hidden="true" />
            <span className="corner corner-bl" aria-hidden="true" />
            <span className="corner corner-br" aria-hidden="true" />

            <div className="text-sm font-medium uppercase tracking-[0.18em] text-amber-400">
              Latest
            </div>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white md:text-5xl">
              {publishedNote.title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/62">
              {publishedNote.dek}
            </p>
            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-cream-200">
              Read Field Note <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          <div className="rounded-sm border border-white/10 bg-white/[0.03] p-6 md:p-7">
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-white/45">
              Series arc
            </div>
            <p className="mt-4 text-base leading-relaxed text-white/58">
              The first sequence stays focused on the problem before introducing
              solutions: labor scarcity, lost expertise, documentation rework,
              point-of-work capture, and human signoff.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-dark-900 px-6 py-18 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-amber-400">
              Upcoming notes
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-5xl">
              Four angles on the same bottleneck.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {upcomingNotes.map((note) => {
              const Icon = note.icon;
              return (
                <article
                  key={note.title}
                  className="rounded-sm border border-white/10 bg-dark-950/65 p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-amber-400/25 bg-amber-400/10 text-amber-400">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-white">
                    {note.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/58">
                    {note.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
