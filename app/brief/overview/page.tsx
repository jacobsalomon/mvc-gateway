import BriefPage from "@/components/brief/BriefPage";
import BriefHero from "@/components/brief/BriefHero";
import BriefSection from "@/components/brief/BriefSection";
import BriefStat from "@/components/brief/BriefStat";
import BriefFooter from "@/components/brief/BriefFooter";

export default function BriefOverviewPage() {
  return (
    <BriefPage>
      <BriefHero
        image="/whatif-2.jpg"
        imageAlt="A technician working on an aircraft component"
        headline={<>The work should document itself.</>}
        subhead={<>Aerospace maintenance, captured as it happens.</>}
      />

      {/* PROBLEM */}
      <BriefSection
        eyebrow="The problem"
        title="Aerospace maintenance buries the work."
        className="mt-[0.3in]"
      >
        <div className="grid grid-cols-3 gap-4">
          <div>
            <div className="font-display text-cream-200" style={{ fontSize: "13.5px", fontWeight: 600 }}>
              Paperwork eats the job.
            </div>
            <p className="mt-1.5 text-cream-400" style={{ fontSize: "11.5px", lineHeight: 1.5 }}>
              Inspection CMMs run seventy-plus pages. Every measurement gets hand-written, then re-entered into a separate MRO system.
            </p>
          </div>
          <div>
            <div className="font-display text-cream-200" style={{ fontSize: "13.5px", fontWeight: 600 }}>
              Forgotten data triggers rework.
            </div>
            <p className="mt-1.5 text-cream-400" style={{ fontSize: "11.5px", lineHeight: 1.5 }}>
              A single missed measurement can cost hours of helicopter teardown to recapture what was already done.
            </p>
          </div>
          <div>
            <div className="font-display text-cream-200" style={{ fontSize: "13.5px", fontWeight: 600 }}>
              Auditors want more.
            </div>
            <p className="mt-1.5 text-cream-400" style={{ fontSize: "11.5px", lineHeight: 1.5 }}>
              Operators, regulators, and oil-and-gas customers demand perpetual, traceable evidence of every inspection.
            </p>
          </div>
        </div>
      </BriefSection>

      {/* SCALE */}
      <BriefSection
        eyebrow="The scale of the tax"
        title="What the paperwork actually costs a shop."
        className="mt-[0.28in]"
      >
        <div className="grid grid-cols-3 gap-4">
          <BriefStat
            value={<>70+</>}
            label={<>pages in a single CMM inspection package.</>}
          />
          <BriefStat
            value={<>1 in 3</>}
            label={<>hours on a maintenance shift spent on documentation, not work.</>}
          />
          <BriefStat
            value={<>Forever</>}
            label={<>how long oil-and-gas and regulatory customers expect inspection evidence to remain retrievable.</>}
          />
        </div>
        <p
          className="mt-3 text-cream-400/80"
          style={{ fontSize: "10.5px", lineHeight: 1.4 }}
        >
          Ranges observed across AeroVision shop-floor research, Spring 2026.
        </p>
      </BriefSection>

      {/* SOLUTION */}
      <BriefSection
        eyebrow="What AeroVision does"
        title={
          <span>
            Glasses observe. AI fills the paperwork.{" "}
            <span className="text-amber-400">The mechanic signs.</span>
          </span>
        }
        className="mt-[0.28in]"
      >
        <ul className="grid grid-cols-1 gap-2">
          <li className="flex gap-3">
            <span
              aria-hidden
              className="mt-[6px] h-[5px] w-[5px] flex-none rounded-full bg-amber-400"
            />
            <span className="text-cream-300" style={{ fontSize: "12.5px", lineHeight: 1.5 }}>
              No scripts. No clipboards. No extra steps. The mechanic just does the job.
            </span>
          </li>
          <li className="flex gap-3">
            <span
              aria-hidden
              className="mt-[6px] h-[5px] w-[5px] flex-none rounded-full bg-amber-400"
            />
            <span className="text-cream-300" style={{ fontSize: "12.5px", lineHeight: 1.5 }}>
              Works on remote flight lines. Video and audio buffer on-device and sync when connectivity returns.
            </span>
          </li>
          <li className="flex gap-3">
            <span
              aria-hidden
              className="mt-[6px] h-[5px] w-[5px] flex-none rounded-full bg-amber-400"
            />
            <span className="text-cream-300" style={{ fontSize: "12.5px", lineHeight: 1.5 }}>
              Every measurement stays linked to the video frame and audio moment that produced it, auditable in perpetuity.
            </span>
          </li>
        </ul>
      </BriefSection>

      <BriefFooter />
    </BriefPage>
  );
}
