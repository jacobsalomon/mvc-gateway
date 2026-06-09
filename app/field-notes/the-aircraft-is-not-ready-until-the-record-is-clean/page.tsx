import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import AnimatedGrid from "@/components/animated-grid";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "The Aircraft Is Not Ready Until the Record Is Clean | Field Notes",
  description:
    "A founder-led Field Note from MVC on why MRO labor pressure is becoming a capacity problem, not just a hiring problem.",
};

const sources = [
  {
    label: "Boeing Pilot and Technician Outlook 2025-2044",
    href: "https://www.boeing.com/commercial/market/pilot-technician-outlook",
  },
  {
    label: "ATEC 2025 Pipeline Report",
    href: "https://www.atec-amt.org/pipeline-report",
  },
  {
    label: "ARSA Global Fleet and MRO Market Report summary",
    href: "https://arsa.org/market-assessment/",
  },
  {
    label: "GAO aviation workforce report",
    href: "https://www.gao.gov/products/gao-23-105571",
  },
  {
    label: "BLS aircraft and avionics mechanics outlook",
    href: "https://www.bls.gov/ooh/installation-maintenance-and-repair/aircraft-and-avionics-equipment-mechanics-and-technicians.htm",
  },
];

function SourceLink({
  href,
  children,
}: Readonly<{
  href: string;
  children: React.ReactNode;
}>) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-cream-200 underline decoration-amber-400/45 underline-offset-4 transition-colors hover:text-white"
    >
      {children}
    </a>
  );
}

export default function MroLaborFieldNotePage() {
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

            <div className="text-sm font-medium uppercase tracking-[0.18em] text-amber-400">
              Field Note 01 / MRO labor bottleneck
            </div>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.04] tracking-tight text-white md:text-7xl">
              The Aircraft Is Not Ready Until the Record Is Clean
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/68 md:text-2xl">
              The MRO labor shortage is not only about finding more mechanics. It is
              about protecting the useful hours of the mechanics MROs already have.
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
                  In aircraft maintenance, the work being finished is not the same
                  as the aircraft being ready.
                </p>

                <p>
                  The aircraft is not ready until the record is clean enough to be
                  trusted. The task may be complete. The part may be installed. The
                  inspection may be done. But if the measurements are unclear, the
                  photos are detached from the step they prove, the notes are late,
                  or the reviewer has to chase the technician to understand what
                  happened, the job is still holding capacity hostage.
                </p>

                <p>
                  That is the quiet problem inside the MRO labor shortage. The
                  industry talks about headcount, and it should. But the deeper
                  constraint is useful expert time. Every hour a scarce technician
                  spends reconstructing work after the fact is an hour the shop
                  cannot put back on the floor.
                </p>

                <h2 className="pt-6 font-display text-3xl font-bold leading-tight text-white">
                  The shortage is structural
                </h2>

                <p>
                  Boeing&apos;s latest long-term outlook says commercial aviation will
                  need{" "}
                  <SourceLink href="https://www.boeing.com/commercial/market/pilot-technician-outlook">
                    710,000 new maintenance technicians over the next 20 years
                  </SourceLink>
                  . That number is global, and it is tied to fleet growth,
                  replacement demand, utilization, and attrition. Even if training
                  capacity improves, the direction is clear: aviation needs a large
                  number of new technical people just to keep the system moving.
                </p>

                <p>
                  The U.S. picture is not simpler. The{" "}
                  <SourceLink href="https://www.atec-amt.org/pipeline-report">
                    2025 Pipeline Report from ATEC and Oliver Wyman
                  </SourceLink>{" "}
                  says the U.S. civil commercial aviation maintenance workforce,
                  including certificated mechanics and non-certified technicians,
                  includes{" "}
                  <SourceLink href="https://www.atec-amt.org/pipeline-report">
                    more than 431,000 personnel
                  </SourceLink>
                  . The same report says demand from commercial air transport alone
                  is expected to drive a{" "}
                  <SourceLink href="https://www.atec-amt.org/pipeline-report">
                    10% shortage in certificated mechanics in 2025
                  </SourceLink>
                  . By 2035, it narrows to{" "}
                  <SourceLink href="https://www.atec-amt.org/pipeline-report">
                    7%
                  </SourceLink>
                  , but that still represents a shortage of{" "}
                  <SourceLink href="https://www.atec-amt.org/pipeline-report">
                    10,000 certificated mechanics
                  </SourceLink>{" "}
                  just to keep commercial passenger and cargo aircraft flying.
                </p>

                <p>
                  Those numbers matter, but even they do not capture the whole
                  operational feel of the problem. The{" "}
                  <SourceLink href="https://www.gao.gov/products/gao-23-105571">
                    Government Accountability Office
                  </SourceLink>{" "}
                  has been careful on this point: the number of people newly
                  certificated by the FAA{" "}
                  <SourceLink href="https://www.gao.gov/products/gao-23-105571">
                    grew from 2017 through 2022
                  </SourceLink>
                  , but less is known about exactly how many mechanics enter or exit
                  aviation each year, and how that maps to total demand. Still, the
                  aviation businesses GAO interviewed reported difficulty
                  maintaining sufficient numbers of mechanics.
                </p>

                <p>
                  That caveat is important. MRO leaders do not experience the
                  shortage as a spreadsheet line. They experience it as a missing
                  person on third shift, a narrow certification bottleneck, a lead
                  who becomes the answer desk for everyone else, or a quality team
                  that cannot release work because the right context is trapped in
                  someone&apos;s head.
                </p>

                <h2 className="pt-6 font-display text-3xl font-bold leading-tight text-white">
                  Headcount does not equal capacity
                </h2>

                <p>
                  A shortage is never evenly distributed. One shop may be short on
                  A&amp;Ps. Another may be short on inspectors. Another may have
                  enough people by badge count, but not enough people who can carry
                  the high-consequence work without constant supervision. Engine,
                  component, avionics, structures, line maintenance, back shop,
                  repair station, and quality roles all feel the pressure
                  differently.
                </p>

                <p>
                  This is why the &quot;juniority effect&quot; is so painful. ARSA&apos;s
                  summary of Oliver Wyman&apos;s MRO market work describes the
                  productivity gap that appears when a{" "}
                  <SourceLink href="https://arsa.org/market-assessment/">
                    technician with 25 to 35 years of experience retires and is
                    replaced by someone with two or three years of experience
                  </SourceLink>
                  . The industry reports it can take{" "}
                  <SourceLink href="https://arsa.org/market-assessment/">
                    two to three to even five years before a new technician is
                    fully productive
                  </SourceLink>
                  .
                </p>

                <p>
                  That does not mean new technicians are the problem. They are the
                  future of the industry. It means the system around them has to
                  carry more of the load. When experienced people leave, they take
                  more than labor hours with them. They take pattern recognition.
                  They take judgment about what looks wrong before it is obviously
                  wrong. They take habits for capturing the right evidence, not just
                  finishing the physical task.
                </p>

                <p>
                  The replacement math is brutal. A new hire may fill a slot on the
                  schedule, but the shop may still be short on independent capacity,
                  mentorship capacity, review capacity, and memory. The missing
                  thing is not just a person. It is trusted attention at the exact
                  moment work is happening.
                </p>

                <h2 className="pt-6 font-display text-3xl font-bold leading-tight text-white">
                  Documentation turns scarcity into delay
                </h2>

                <p>
                  Documentation is not optional. Records are part of aviation
                  safety, compliance, customer trust, and asset value. The Bureau of
                  Labor Statistics includes &quot;keep records of maintenance and
                  repair work&quot; among the duties of both aircraft mechanics and
                  avionics technicians, alongside inspecting completed work,
                  interpreting instructions, and testing aircraft parts.
                </p>

                <p>
                  The problem is not that records exist. The problem is when the
                  record is built after the work from fragments: a note written
                  later, a photo that does not say which step it belongs to, a
                  measurement copied from one place to another, a voice explanation
                  given to a supervisor, a reviewer trying to infer whether the
                  evidence is enough.
                </p>

                <p>
                  That turns documentation into context switching. The technician
                  leaves the work, then has to reconstruct the work. The reviewer
                  reads the record, then has to reconstruct the technician&apos;s
                  reconstruction. If something is missing, the record bounces back.
                  If the technician has moved on, the shop pays for the same context
                  twice.
                </p>

                <p>
                  This is where a labor shortage becomes a throughput problem. The
                  official task time is only part of the story. The hidden time sits
                  around the task: searching, documenting, re-entering, clarifying,
                  validating, reworking, and waiting. None of that shows up as a
                  dramatic failure. It just eats the day in small pieces.
                </p>

                <h2 className="pt-6 font-display text-3xl font-bold leading-tight text-white">
                  The business impact is bigger than paperwork
                </h2>

                <p>
                  MROs already run close to the edge. Aircraft availability matters.
                  Customer commitments matter. Hangar slots matter. Overtime
                  matters. Review queues matter. When technical labor is scarce,
                  any avoidable drag on that labor becomes a business constraint.
                </p>

                <p>
                  The obvious cost is slower turnaround. But the second-order costs
                  are just as important: more load on senior people, more QA chase
                  work, more dependence on tribal knowledge, more overtime, more
                  fragile training, and more delay between the physical work and the
                  trusted record of that work.
                </p>

                <p>
                  The MRO market is large enough that this pressure compounds.
                  ARSA&apos;s 2026 market summary describes a{" "}
                  <SourceLink href="https://arsa.org/market-assessment/">
                    $140 billion global aerospace maintenance industry
                  </SourceLink>
                  . Its 2025 summary described{" "}
                  <SourceLink href="https://arsa.org/market-assessment/">
                    more than 5,000 companies employing nearly half a million people
                    worldwide, with U.S. firms producing $69 billion in annual
                    economic activity
                  </SourceLink>
                  . At that scale, a small loss of useful technical time is not
                  small.
                </p>

                <p>
                  BLS data points in the same direction from the labor side. In the
                  United States, aircraft and avionics equipment mechanics and
                  technicians represented{" "}
                  <SourceLink href="https://www.bls.gov/ooh/installation-maintenance-and-repair/aircraft-and-avionics-equipment-mechanics-and-technicians.htm">
                    160,800 jobs in 2024
                  </SourceLink>
                  , with{" "}
                  <SourceLink href="https://www.bls.gov/ooh/installation-maintenance-and-repair/aircraft-and-avionics-equipment-mechanics-and-technicians.htm">
                    about 13,100 openings projected each year on average over the
                    2024 to 2034 decade
                  </SourceLink>
                  . Many of those openings are expected to come from people exiting
                  the labor force or transferring to other occupations. In other
                  words, replacement pressure is not a future abstraction. It is
                  built into the decade.
                </p>

                <p>
                  For MRO leaders, the practical question is not only, &quot;How do
                  we hire more technicians?&quot; That question matters, but it is not
                  enough. The sharper question is, &quot;How do we stop wasting the
                  certified attention we already have?&quot;
                </p>

                <h2 className="pt-6 font-display text-3xl font-bold leading-tight text-white">
                  The scarce resource is attention at the point of work
                </h2>

                <p>
                  Maintenance knowledge is most complete while the work is
                  happening. The technician sees the condition, the part, the
                  measurement, the fit, the exception, and the decision in context.
                  Later, that context starts to decay. The shop may still have a
                  note or a photo, but it may not have the reason the note was
                  written or the exact condition the photo was meant to prove.
                </p>

                <p>
                  That is why the labor shortage should change how MROs think about
                  documentation. The record should not be treated as a clerical
                  afterthought. It is part of the operational system. When the
                  record is created late, scarce labor gets pulled backward. When
                  the record is created close to the work, scarce labor can keep
                  moving.
                </p>

                <p>
                  At MVC, this is the problem we keep coming back to. The next
                  generation of MRO productivity will not come only from hiring more
                  people. It will come from giving scarce experts more useful hours
                  back.
                </p>

                <p>
                  If you run maintenance operations and this mirrors what you see,
                  we&apos;d like to{" "}
                  <a
                    href="mailto:jake@mechanicalvisioncorp.com"
                    className="font-medium text-cream-200 underline decoration-amber-400/45 underline-offset-4 transition-colors hover:text-white"
                  >
                    compare notes
                  </a>
                  .
                </p>
              </div>
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-sm border border-white/10 bg-white/[0.035] p-6">
                <div className="text-sm font-medium uppercase tracking-[0.18em] text-amber-400">
                  Sources
                </div>
                <div className="mt-5 space-y-4">
                  {sources.map((source) => (
                    <a
                      key={source.href}
                      href={source.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start justify-between gap-3 border-t border-white/10 pt-4 text-sm leading-relaxed text-white/62 first:border-t-0 first:pt-0 hover:text-white"
                    >
                      <span>{source.label}</span>
                      <ArrowUpRight
                        size={15}
                        className="mt-1 shrink-0 text-white/35 transition-colors group-hover:text-amber-400"
                      />
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-sm border border-amber-400/20 bg-amber-400/10 p-5">
                <div className="text-sm font-medium uppercase tracking-[0.18em] text-amber-400">
                  Next note
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/66">
                  The Juniority Effect in Aircraft Maintenance, what is lost when
                  experienced technicians retire, and why replacing headcount does
                  not immediately replace capacity.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </main>
  );
}
