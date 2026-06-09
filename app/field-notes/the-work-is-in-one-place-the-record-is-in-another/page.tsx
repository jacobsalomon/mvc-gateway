import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AnimatedGrid from "@/components/animated-grid";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "The Work Is in One Place. The Record Is in Another. | Field Notes",
  description:
    "A founder-led Field Note from MVC on why context switching between physical maintenance work and digital records drains MRO capacity.",
};

export default function WorkAndRecordFieldNotePage() {
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
              Field Note 03 / MRO labor bottleneck
            </div>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.04] tracking-tight text-white md:text-7xl">
              The Work Is in One Place. The Record Is in Another.
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/68 md:text-2xl">
              MROs lose useful technician time in the gap between benches,
              aircraft, manuals, work orders, and quality signoffs.
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
                  In aircraft maintenance, the work rarely happens in the same
                  place as the record.
                </p>

                <p>
                  The work happens at the aircraft, on the bench, inside the
                  component, beside the toolbox, under the light, with a
                  calibrated tool in hand. The record often lives somewhere else.
                  A laptop. A terminal. A printed traveler. A work order system.
                  A manual on another screen. A quality queue.
                </p>

                <p>
                  That physical separation is easy to treat as normal because it
                  has always been part of the job. Mechanics know how to move
                  through it. Inspectors know how to move through it. Leads and
                  quality teams know how to chase the record back into shape when
                  something is missing.
                </p>

                <p>But normal does not mean free.</p>

                <p>
                  Every time a technician has to stop, put the tool down, move to
                  a screen, find the right line, enter a value, check a manual,
                  take a photo, label that photo, attach it somewhere, explain
                  what it shows, or wait for someone else to review it, useful
                  capacity leaks out of the operation.
                </p>

                <p>
                  Not because anyone is lazy. Not because the process is
                  careless.
                </p>

                <p>
                  Because the system asks scarce skilled people to keep switching
                  contexts.
                </p>

                <h2 className="pt-6 font-display text-3xl font-bold leading-tight text-white">
                  The quiet tax inside MRO work
                </h2>

                <p>
                  A technician is not only doing maintenance. They are also
                  navigating the record of maintenance. They move between the
                  physical job and the administrative shadow of that job all day
                  long. Aircraft. Bench. Manual. Work order. Tool crib. Camera.
                  Notes. Signoff. Quality. Back to the aircraft. Back to the
                  bench.
                </p>

                <p>
                  Each move makes sense in isolation. Together, they become a
                  capacity problem.
                </p>

                <p>
                  For an MRO, this matters because the bottleneck is not just
                  headcount. It is useful technician attention. A shop can have
                  people on the floor and still lose throughput if too much of
                  their day is spent helping the record catch up to the work.
                </p>

                <p>
                  The digital tools do not always solve this. In some cases they
                  just move the record from paper to a screen. That can be better.
                  It can reduce lost documents, improve traceability, and make
                  review easier. But the basic interruption can remain: the
                  mechanic still has to stop doing the physical job to feed the
                  digital system.
                </p>

                <p>That is the part worth looking at closely.</p>

                <h2 className="pt-6 font-display text-3xl font-bold leading-tight text-white">
                  Digital is not the same as uninterrupted
                </h2>

                <p>The question is not, &quot;Is the workflow digital?&quot;</p>

                <p>
                  The better question is, &quot;Does the record form naturally while
                  the work is happening, or does the technician have to leave the
                  work to create it?&quot;
                </p>

                <p>Those are very different operating models.</p>

                <p>
                  In the first model, the record is a byproduct of the work. In
                  the second, the record is a second job layered on top of the
                  work.
                </p>

                <p>
                  MROs have lived with the second model for a long time. That does
                  not mean they chose it. It usually came from necessity.
                  Regulators need records. Customers need records. Quality teams
                  need records. Finance and warranty teams need records. The next
                  shift needs records. The next shop needs records. Nobody serious
                  argues against documentation.
                </p>

                <p>The issue is where the burden lands.</p>

                <p>
                  Too often, it lands on the same people whose time is already the
                  hardest to replace.
                </p>

                <h2 className="pt-6 font-display text-3xl font-bold leading-tight text-white">
                  The switch is expensive because the work is complex
                </h2>

                <p>
                  Context switching is not just an annoyance. It is a business
                  problem. It turns certified attention into administrative
                  motion. It stretches turnaround. It adds reviewer load. It
                  increases the chance that a value gets written later, a photo
                  gets attached without enough context, or a note has to be
                  reconstructed after the job has already moved on.
                </p>

                <p>
                  And the more complex the work, the more expensive the switching
                  becomes.
                </p>

                <p>
                  A simple check may only need a signoff. A detailed inspection
                  may require measurements, photos, manual references, condition
                  notes, disposition logic, and quality review. The technician has
                  to hold the job in their head while also remembering what the
                  record will need later.
                </p>

                <p>
                  That is a lot to ask in an environment where interruptions are
                  already part of the day.
                </p>

                <p>
                  The next generation of MRO productivity will come from reducing
                  the distance between the work and the record. Not by removing
                  human judgment. Not by turning maintenance into a software
                  workflow. The mechanic just does the job. The glasses observe.
                  The human reviews and signs.
                </p>

                <p>
                  But the record should not require the technician to keep leaving
                  the work.
                </p>

                <p>
                  The closer documentation gets to the point of work, the less the
                  shop has to spend its most valuable resource on context
                  switching. And in a labor-constrained market, those recovered
                  minutes matter.
                </p>

                <p>Not because they look good in a spreadsheet.</p>

                <p>
                  Because they become capacity the shop already had, but could not
                  fully use.
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
                  Field Note 03
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/62">
                  Part of MVC&apos;s Field Notes series on the MRO labor
                  bottleneck, documentation drag, and operational visibility.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </main>
  );
}
