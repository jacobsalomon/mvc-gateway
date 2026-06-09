import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AnimatedGrid from "@/components/animated-grid";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "When a Check Mark Is Not Enough | Field Notes",
  description:
    "A founder-led Field Note from MVC on why completed maintenance steps do not always preserve enough evidence to explain the decision later.",
};

export default function CheckMarkFieldNotePage() {
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
              Field Note 04 / Evidence quality
            </div>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.04] tracking-tight text-white md:text-7xl">
              When a Check Mark Is Not Enough
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/68 md:text-2xl">
              A check mark can close a step. It cannot always explain what the
              technician saw, why a part passed, or why a part failed.
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
                  A check mark can close a step.
                </p>

                <p>It cannot always explain what happened.</p>

                <p>
                  That is one of the hard truths of maintenance documentation. A
                  record can show that a task was completed, a step was
                  acknowledged, or an inspection was signed. But months later, when
                  someone asks what the technician actually saw, the check mark may
                  not carry enough weight.
                </p>

                <p>Was the part clean?</p>

                <p>Was the wear obvious or borderline?</p>

                <p>Was the damage within limits?</p>

                <p>
                  Was there a scratch, nick, crack, stain, dent, burn mark,
                  corrosion pattern, or unusual condition?
                </p>

                <p>Why did the part pass?</p>

                <p>Why did it fail?</p>

                <p>
                  What did the inspector see that made the decision obvious at the
                  time?
                </p>

                <h2 className="pt-6 font-display text-3xl font-bold leading-tight text-white">
                  Completion is not the same as explanation
                </h2>

                <p>
                  In many workflows, the official record compresses all of that
                  into a small box, a short note, or a mark that says the step is
                  done.
                </p>

                <p>
                  That is understandable. Maintenance records cannot become novels.
                  Technicians should not be forced to write long explanations for
                  every routine observation. The point is not to create more
                  paperwork.
                </p>

                <p>The point is that a check mark is thin evidence.</p>

                <p>
                  It can say, &quot;this was reviewed.&quot; It may not say,
                  &quot;this is why the decision was right.&quot;
                </p>

                <p>
                  For routine work, that may feel acceptable. The job moves
                  forward. The form is complete. The aircraft or component is
                  released. Everyone goes on to the next task.
                </p>

                <p>The problem appears later.</p>

                <h2 className="pt-6 font-display text-3xl font-bold leading-tight text-white">
                  The context gets scattered
                </h2>

                <p>
                  A customer asks why a part was rejected. A quality leader
                  reviews a recurring issue. A regulator asks how a decision was
                  made. A buyer reviews maintenance history. A warranty discussion
                  turns on what was visible at the time. A technician who worked
                  the job is unavailable, has moved shifts, or simply cannot
                  remember the exact condition from months ago.
                </p>

                <p>Now the shop needs the context behind the check mark.</p>

                <p>
                  Sometimes that context exists in a photo. Sometimes it exists in
                  a note. Sometimes it exists in the memory of the person who did
                  the work. Sometimes it is scattered across a work order, a
                  traveler, a folder of images, an email thread, and a conversation
                  that no longer exists in any useful form.
                </p>

                <p>That is not visibility. That is archaeology.</p>

                <p>
                  This is especially painful in visual inspection. A measurement
                  can at least be written as a number. A visual condition is
                  harder. The technician sees something, compares it to the manual,
                  applies experience, and makes a judgment. If the record only
                  captures the final answer, the reasoning disappears.
                </p>

                <p>Pass.</p>

                <p>Fail.</p>

                <p>Accept.</p>

                <p>Reject.</p>

                <p>Rework.</p>

                <p>Replace.</p>

                <p>Those outcomes matter, but they are not the whole story.</p>

                <h2 className="pt-6 font-display text-3xl font-bold leading-tight text-white">
                  Evidence should not require more interruption
                </h2>

                <p>
                  A high-quality maintenance record should preserve enough context
                  for a competent reviewer to understand the decision later. Not
                  second-guess every mechanic. Not slow every job down. But carry
                  the visible evidence that made the answer reasonable at the time.
                </p>

                <p>That distinction matters.</p>

                <p>
                  MROs do not need more documentation for the sake of
                  documentation. They need better evidence with less interruption.
                  They need records that show the work without forcing technicians
                  to become full-time narrators of their own day.
                </p>

                <p>Because the current tradeoff is bad.</p>

                <p>
                  If a shop asks for richer records manually, technicians lose
                  more time writing, photographing, uploading, labeling, and
                  explaining. If the shop keeps records thin, it may save time
                  upfront but lose context later when a question comes back.
                </p>

                <p>Neither path is ideal.</p>

                <p>
                  The better path is to capture useful evidence as close to the
                  work as possible. The mechanic just does the job. The glasses
                  observe. The record keeps the visual and operational context
                  that would otherwise vanish. The human reviews and signs.
                </p>

                <p>That is how a check mark becomes more than a check mark.</p>

                <p>
                  Not because the check mark goes away. In many cases, it should
                  remain. It is simple. It is familiar. It maps to how maintenance
                  has been controlled for decades.
                </p>

                <p>
                  But behind that check mark, there should be enough evidence to
                  answer the next question.
                </p>

                <p>What was seen?</p>

                <p>What was measured?</p>

                <p>What was the condition?</p>

                <p>Why did this pass?</p>

                <p>Why did this fail?</p>

                <p>
                  When records can answer those questions, quality teams spend
                  less time chasing context. Customers get clearer answers. Audits
                  become less stressful. And the shop becomes less dependent on
                  memory.
                </p>

                <p>A check mark is useful.</p>

                <p>
                  It just should not be the only thing left standing when the
                  question gets hard.
                </p>

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
                  Field Note 04
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/62">
                  Part of MVC&apos;s Field Notes series on evidence quality,
                  documentation, and MRO operational memory.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </main>
  );
}
