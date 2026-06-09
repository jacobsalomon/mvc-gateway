import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import AnimatedGrid from "@/components/animated-grid";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "The Juniority Effect in Aircraft Maintenance | Field Notes",
  description:
    "A founder-led Field Note from MVC on why replacing technician headcount does not immediately replace experienced maintenance capacity.",
};

const sources = [
  {
    label: "ARSA Global Fleet and MRO Market Report summary",
    href: "https://arsa.org/market-assessment/",
  },
  {
    label: "ATEC 2025 Pipeline Report",
    href: "https://www.atec-amt.org/pipeline-report",
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
      className="font-medium text-white/80 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
    >
      {children}
    </a>
  );
}

export default function JuniorityFieldNotePage() {
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
              Field Note 02 / MRO labor bottleneck
            </div>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.04] tracking-tight text-white md:text-7xl">
              The Juniority Effect in Aircraft Maintenance
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/68 md:text-2xl">
              The MRO labor problem is not only that there are not enough
              technicians. It is that the industry is losing experienced judgment
              faster than new headcount can replace it.
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
                  In aircraft maintenance, experience is not just time served.
                </p>

                <p>
                  It is pattern recognition. It is knowing when a part looks wrong
                  before the defect is obvious. It is remembering how a similar
                  problem showed up years ago on a different aircraft. It is
                  knowing which measurement matters, which note will save QA an
                  hour later, and when a job that looks finished is not actually
                  ready to release.
                </p>

                <p>
                  That kind of experience does not show up cleanly in a hiring
                  spreadsheet. A shop can lose one senior technician and hire one
                  new technician. The headcount line goes back to even. But the
                  operation is not even.
                </p>

                <p>
                  The new person may be smart, motivated, and exactly who the
                  industry needs. Still, they cannot immediately replace{" "}
                  <SourceLink href="https://arsa.org/market-assessment/">
                    25 or 35 years of judgment
                  </SourceLink>
                  . That gap is what ARSA and Oliver Wyman have called the
                  &quot;juniority effect.&quot;
                </p>

                <h2 className="pt-6 font-display text-3xl font-bold leading-tight text-white">
                  The pipeline is improving, but the mix is changing
                </h2>

                <p>
                  There is good news in the technician pipeline. The 2025 Pipeline
                  Report from ATEC and Oliver Wyman says the FAA issued{" "}
                  <SourceLink href="https://www.atec-amt.org/pipeline-report">
                    slightly more than 9,000 new mechanic certificates in 2024
                  </SourceLink>
                  , only{" "}
                  <SourceLink href="https://www.atec-amt.org/pipeline-report">
                    4% below the prior year&apos;s record
                  </SourceLink>
                  . AMTS enrollment also{" "}
                  <SourceLink href="https://www.atec-amt.org/pipeline-report">
                    rose 9%
                  </SourceLink>
                  .
                </p>

                <p>
                  Those are encouraging signs. The industry needs them. But the
                  same report says the U.S. civil commercial aviation maintenance
                  workforce includes{" "}
                  <SourceLink href="https://www.atec-amt.org/pipeline-report">
                    more than 431,000 people
                  </SourceLink>
                  , and demand from commercial air transport alone is expected to
                  drive a{" "}
                  <SourceLink href="https://www.atec-amt.org/pipeline-report">
                    10% shortage in certificated mechanics in 2025
                  </SourceLink>
                  . Even by 2035, the report still projects a{" "}
                  <SourceLink href="https://www.atec-amt.org/pipeline-report">
                    shortage of 10,000 certificated mechanics
                  </SourceLink>{" "}
                  just to keep commercial passenger and cargo aircraft flying.
                </p>

                <p>
                  The Government Accountability Office has made a useful caveat:
                  exact mechanic supply and demand are hard to measure because less
                  is known about how many mechanics{" "}
                  <SourceLink href="https://www.gao.gov/products/gao-23-105571">
                    enter or exit aviation each year
                  </SourceLink>
                  . But GAO still found aviation businesses reporting difficulty
                  maintaining enough mechanics.
                </p>

                <p>
                  So the issue is not simply whether more people are entering the
                  field. More are. The issue is whether enough experienced capacity
                  is available in the right places, at the right time, with the
                  right authority and judgment.
                </p>

                <h2 className="pt-6 font-display text-3xl font-bold leading-tight text-white">
                  Senior people are not just doing tasks
                </h2>

                <p>
                  The experienced technician is often carrying more than their own
                  work card.
                </p>

                <p>
                  They are answering questions. They are catching small mistakes
                  before they become rework. They are helping younger mechanics
                  understand why a procedure is written the way it is. They are
                  translating between the manual, the part, the customer
                  requirement, and the real condition in front of them.
                </p>

                <p>
                  They are also often the person QA trusts when the record is
                  unclear. That creates a hidden dependency. A shop may think of
                  senior technicians as high-skill labor, but operationally, they
                  are also memory, training infrastructure, quality control, and
                  exception handling.
                </p>

                <p>
                  When those people retire, the loss spreads. The newer technician
                  needs more support. The inspector gets more questions. The lead
                  gets interrupted more often. The quality team sees more
                  ambiguous records. The same work may still get done, but it takes
                  more touches to get to confidence.
                </p>

                <p>
                  This is how the juniority effect turns into delay.
                </p>

                <h2 className="pt-6 font-display text-3xl font-bold leading-tight text-white">
                  The bottleneck moves to supervision and review
                </h2>

                <p>
                  A younger workforce is not a problem by itself. Every expert was
                  new once. The problem is what happens when too much of the
                  organization becomes dependent on too few experienced people at
                  the same time.
                </p>

                <p>
                  The bottleneck moves from &quot;Who can turn the wrench?&quot; to
                  &quot;Who can verify that this is right?&quot; It moves from
                  &quot;Who can complete the task?&quot; to &quot;Who can explain
                  what happened?&quot; It moves from &quot;Who is assigned?&quot; to
                  &quot;Who has seen this before?&quot;
                </p>

                <p>
                  In a high-trust maintenance environment, that matters. A new
                  technician may complete a task correctly, but still need
                  confirmation. A record may be mostly complete, but still lack the
                  context a reviewer needs. A photo may show the part, but not the
                  reason the technician captured it. A measurement may be entered,
                  but not tied clearly to the condition it proves.
                </p>

                <p>
                  The work is physical. The confidence is social and procedural. It
                  depends on experienced people being able to transfer what they
                  know. When the workforce gets more junior, that transfer load
                  increases.
                </p>

                <h2 className="pt-6 font-display text-3xl font-bold leading-tight text-white">
                  Tribal knowledge becomes a capacity risk
                </h2>

                <p>
                  Every shop has tribal knowledge. Some of it is healthy. It is
                  the practical wisdom that keeps operations moving.
                </p>

                <p>
                  But when too much knowledge lives only in people&apos;s heads, it
                  becomes fragile. A senior technician remembers which jobs usually
                  produce follow-up questions. A lead knows which customer records
                  need extra clarity. An inspector knows which evidence will make
                  release smoother. A planner knows which task will look simple on
                  paper but get complicated on the floor.
                </p>

                <p>
                  That knowledge is valuable because it was earned. It is also hard
                  to scale. If the only way to transfer it is through
                  interruptions, shadowing, rework, and repeated explanation, then
                  training becomes expensive in a way the schedule does not fully
                  show.
                </p>

                <p>
                  Senior people spend more of their day being pulled backward into
                  work that already happened. Junior people wait longer for
                  answers. QA spends more time reconstructing context. None of this
                  looks like one big failure. It looks like drag.
                </p>

                <h2 className="pt-6 font-display text-3xl font-bold leading-tight text-white">
                  Documentation is where experience either compounds or disappears
                </h2>

                <p>
                  This is why records matter so much. A maintenance record is not
                  just a compliance artifact. It is one of the few places where
                  operational knowledge can survive beyond the person who did the
                  work.
                </p>

                <p>
                  But only if the record captures enough context. If the record is
                  thin, the shop loses the learning. If the photos are disconnected
                  from the step, the next person has to infer what they mean. If a
                  measurement is copied in late, the reviewer has to trust memory.
                  If the exception is explained verbally but never captured
                  cleanly, the knowledge disappears when the person moves on.
                </p>

                <p>
                  A more junior workforce makes that loss more expensive. The
                  senior technician may know what happened without much
                  explanation. The newer technician may need the breadcrumb trail.
                  The reviewer may need the evidence. The next shift may need the
                  context. The customer may need confidence.
                </p>

                <p>
                  When the record is weak, the whole organization leans harder on
                  the same scarce experienced people.
                </p>

                <h2 className="pt-6 font-display text-3xl font-bold leading-tight text-white">
                  The real goal is not replacing experience
                </h2>

                <p>
                  The industry should recruit more technicians. It should train
                  more technicians. It should make the career more visible, more
                  attractive, and more durable. The Bureau of Labor Statistics
                  projects about{" "}
                  <SourceLink href="https://www.bls.gov/ooh/installation-maintenance-and-repair/aircraft-and-avionics-equipment-mechanics-and-technicians.htm">
                    13,100 aircraft and avionics technician openings each year
                  </SourceLink>
                  , on average, from{" "}
                  <SourceLink href="https://www.bls.gov/ooh/installation-maintenance-and-repair/aircraft-and-avionics-equipment-mechanics-and-technicians.htm">
                    2024 to 2034
                  </SourceLink>
                  . Many openings are expected to come from workers leaving the
                  labor force or moving into other occupations.
                </p>

                <p>
                  But MROs also need to ask a different question: how do we make
                  experience easier to transfer?
                </p>

                <p>
                  Not by asking senior people to write more after the job. Not by
                  creating more forms. Not by adding another system that pulls
                  technicians away from the aircraft.
                </p>

                <p>
                  The goal should be to preserve more of what experienced people
                  see, decide, measure, and verify while the work is happening.
                  Because the point is not to replace judgment. The point is to
                  stop wasting it.
                </p>

                <p>
                  The best senior technicians do not just complete work. They make
                  everyone around them better. They shorten uncertainty. They
                  reduce unnecessary back-and-forth. They know what proof will
                  matter later.
                </p>

                <p>
                  That is the capability MROs have to protect.
                </p>

                <h2 className="pt-6 font-display text-3xl font-bold leading-tight text-white">
                  The next shortage is a knowledge shortage
                </h2>

                <p>
                  The labor shortage is real. The numbers matter. But for MRO
                  leaders, the more immediate pain may be the knowledge shortage
                  hiding inside it. A shop can hire people and still be short on
                  judgment. It can fill shifts and still be short on independent
                  capacity. It can increase training throughput and still overload
                  the few people everyone depends on.
                </p>

                <p>
                  That is the juniority effect. It is not an argument against new
                  technicians. It is the opposite. It is an argument for building
                  systems that help new technicians become productive faster, while
                  reducing the load on the experienced people teaching them.
                </p>

                <p>
                  The future of maintenance depends on bringing new people in. But
                  it also depends on making sure the expertise already in the shop
                  does not vanish into memory, interruptions, and late paperwork.
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
                        className="mt-1 shrink-0 text-white/35 transition-colors group-hover:text-white/70"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </main>
  );
}
