import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AnimatedGrid from "@/components/animated-grid";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "The Record Has to Survive the Question | Field Notes",
  description:
    "A founder-led Field Note from MVC on why MRO auditability depends on records that can answer questions months after the job closes.",
};

export default function RecordSurvivesQuestionFieldNotePage() {
  return (
    <main className="min-h-screen bg-dark-950 text-white">
      <Navbar />

      <article>
        <header className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-dark-950 to-dark-900 px-6 pt-30 pb-16 md:pt-36 md:pb-24">
          <div
            className="absolute inset-0 parallax-bg opacity-[0.08]"
            style={{ backgroundImage: "url('/hero-bg.webp')" }}
          />
          <AnimatedGrid />

          <div className="relative z-10 mx-auto max-w-4xl">
            <Link
              href="/field-notes"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/55 transition-colors hover:text-white"
            >
              <ArrowLeft size={16} />
              Field Notes
            </Link>

            <div className="text-sm font-medium uppercase tracking-[0.18em] text-white/42">
              Field Note 05 / Auditability and visibility
            </div>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.04] tracking-tight text-white md:text-7xl">
              The Record Has to Survive the Question
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/68 md:text-2xl">
              Months after a job closes, the part may be gone and the people may
              have moved on. The record becomes the shop&apos;s memory.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/45">
              <span>Mechanical Vision Corporation</span>
              <span aria-hidden="true">/</span>
              <span>June 2026</span>
            </div>
          </div>
        </header>

        <div className="px-6 py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
            <div className="max-w-3xl">
              <div className="space-y-7 text-[18px] leading-8 text-white/72">
                <p className="text-2xl leading-9 text-white/84">
                  The job does not end when the aircraft leaves the hangar or the
                  component leaves the bench.
                </p>

                <p>
                  Operationally, it may feel that way. The work is complete. The
                  signoff is done. The part moved forward. The aircraft returned
                  to service. The team is already on the next job.
                </p>

                <p>But the record has a longer life than the work.</p>

                <p>
                  Weeks or months later, someone may come back with a question.
                </p>

                <p>
                  A customer wants to understand why a part was rejected. A
                  regulator asks how a step was performed. An owner wants
                  confidence that the work was done correctly. An insurer, buyer,
                  quality leader, or internal reviewer needs to know what happened
                  at the time.
                </p>

                <p>
                  At that moment, the people may have moved on. The part may be
                  gone. The aircraft may be somewhere else. The shift may have
                  changed. The technician may not remember. The only thing left is
                  the record.
                </p>

                <p>So the real question becomes simple:</p>

                <p>Can the record survive the question?</p>

                <h2 className="pt-6 font-display text-3xl font-bold leading-tight text-white">
                  The existence of paperwork is not the same as trust
                </h2>

                <p>Not &quot;does a record exist?&quot;</p>

                <p>Not &quot;was the form completed?&quot;</p>

                <p>Not &quot;is there a signature somewhere?&quot;</p>

                <p>
                  Those are necessary, but they are not enough. The deeper question
                  is whether the record can still explain the work after the work
                  itself is no longer available to inspect.
                </p>

                <p>This is where auditability and visibility start to separate.</p>

                <p>
                  Auditability usually asks whether the required process was
                  followed. Was the work order completed? Was the right form used?
                  Was the correct revision available? Did the right person sign?
                  Was the step closed?
                </p>

                <p>Visibility asks something harder.</p>

                <p>What actually happened?</p>

                <p>What did the technician see?</p>

                <p>What evidence supported the decision?</p>

                <p>Was the condition obvious or borderline?</p>

                <p>Was the measurement captured in context?</p>

                <p>Was the right manual revision being used at the time?</p>

                <p>
                  Can someone who was not there understand why the job moved
                  forward?
                </p>

                <h2 className="pt-6 font-display text-3xl font-bold leading-tight text-white">
                  A dispute does not always mean the work was wrong
                </h2>

                <p>
                  Many MROs are auditable in the formal sense but still lack real
                  visibility into the work. They can produce paperwork, but
                  answering a specific question later may still require digging
                  through systems, calling people, searching photos, reading notes,
                  and reconstructing the job from fragments.
                </p>

                <p>That creates risk.</p>

                <p>It also creates drag.</p>

                <p>
                  When a question comes back months later, the shop may spend hours
                  trying to prove something that was obvious to the technician in
                  the moment. A quality manager may have to chase down context. A
                  technician may have to stop current work to explain old work. A
                  customer conversation may become harder than it needed to be
                  because the record shows the conclusion but not the basis for the
                  conclusion.
                </p>

                <p>In the best case, this is frustrating.</p>

                <p>In the worst case, it becomes expensive.</p>

                <p>
                  A dispute does not always mean someone did bad work. Often, it
                  means the record cannot carry the full story. The work may have
                  been done correctly. The judgment may have been sound. The part
                  may have been handled properly. But if the record cannot show
                  that clearly, the shop is left defending the work from a weaker
                  position.
                </p>

                <h2 className="pt-6 font-display text-3xl font-bold leading-tight text-white">
                  The record is the shop&apos;s witness
                </h2>

                <p>That is the opportunity.</p>

                <p>
                  MROs should not have to choose between moving fast and being able
                  to explain themselves later. The record should make the work
                  visible enough that a future reviewer can understand the job
                  without reopening the whole thing.
                </p>

                <p>
                  That does not mean recording everything forever in a careless
                  way. It means preserving the important context: what was seen,
                  what was measured, when it happened, what source controlled the
                  work, and who reviewed and signed.
                </p>

                <p>The point is not to replace trust in mechanics.</p>

                <p>It is to protect it.</p>

                <p>
                  A good mechanic&apos;s work should not become harder to defend
                  just because the evidence lived only in the moment. A good
                  quality team should not have to rebuild a job from memory. A
                  good MRO should not have to answer serious questions with thin
                  records and disconnected artifacts.
                </p>

                <p>
                  The next generation of MRO auditability will be richer than
                  &quot;the paperwork exists.&quot;
                </p>

                <p>
                  It will make the work behind the paperwork visible, reviewable,
                  and trusted.
                </p>

                <p>
                  That is where the industry needs to go. Not more bureaucracy.
                  Not more boxes for technicians to fill out. Better memory for
                  the operation.
                </p>

                <p>
                  Because when the question comes back months later, the record is
                  the shop&apos;s witness.
                </p>

                <p>And that witness needs to hold up.</p>

                <p>
                  If you run maintenance operations and this mirrors what you see,
                  we&apos;d like to{" "}
                  <a
                    href="mailto:jake@mechanicalvisioncorp.com"
                    className="font-medium text-white/80 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
                  >
                    compare notes
                  </a>
                  .
                </p>
              </div>
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-sm border border-white/10 bg-white/[0.035] p-6">
                <div className="text-sm font-medium uppercase tracking-[0.18em] text-white/42">
                  Field Note 05
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/62">
                  Part of MVC&apos;s Field Notes series on auditability, evidence,
                  and visibility after the maintenance work has moved on.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </main>
  );
}
