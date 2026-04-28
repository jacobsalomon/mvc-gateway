import BriefPage from "@/components/brief/BriefPage";
import BriefHero from "@/components/brief/BriefHero";
import BriefSection from "@/components/brief/BriefSection";
import BriefStat from "@/components/brief/BriefStat";
import BriefFooter from "@/components/brief/BriefFooter";

export default function BriefOverviewPage() {
  return (
    <BriefPage>
      <BriefHero
        image="/whatif-6.jpg"
        imageAlt="A jet leaving contrails across the sky"
        headline={<>Mechanics inspect. Glasses observe. Paperwork writes itself.</>}
        subhead={<>Reclaim your shift. Focus on the real work.</>}
      />

      {/* PROBLEM */}
      <BriefSection
        eyebrow="The problem"
        title="Three failure modes in how shops document inspections today."
        className="mt-[0.3in]"
      >
        <div className="grid grid-cols-3 gap-4">
          <div>
            <div className="font-display text-cream-200" style={{ fontSize: "13.5px", fontWeight: 600 }}>
              Every measurement is captured twice.
            </div>
            <p className="mt-1.5 text-cream-400" style={{ fontSize: "11.5px", lineHeight: 1.5 }}>
              Technicians hand-write measurements on the CMM, then re-enter the same numbers into the MRO system on every job.
            </p>
          </div>
          <div>
            <div className="font-display text-cream-200" style={{ fontSize: "13.5px", fontWeight: 600 }}>
              Flow breaks, and pencil whipping creeps in.
            </div>
            <p className="mt-1.5 text-cream-400" style={{ fontSize: "11.5px", lineHeight: 1.5 }}>
              Every stop to write down a measurement pulls the technician off the part. Numbers end up filled in later, from memory.
            </p>
          </div>
          <div>
            <div className="font-display text-cream-200" style={{ fontSize: "13.5px", fontWeight: 600 }}>
              Audit retrieval is slow and expensive.
            </div>
            <p className="mt-1.5 text-cream-400" style={{ fontSize: "11.5px", lineHeight: 1.5 }}>
              Operators, regulators, insurers, and customers expect on-demand evidence. Pulling records takes hours. Gaps force re-measurements of parts already delivered.
            </p>
          </div>
        </div>
      </BriefSection>

      {/* SCALE */}
      <BriefSection
        eyebrow="What it costs"
        title="What the paperwork actually costs a shop."
        className="mt-[0.28in]"
      >
        <div className="grid grid-cols-3 gap-4">
          <BriefStat
            value={<>Dozens</>}
            label={<>of distinct documents consulted for a single inspection: CMMs, manuals, service bulletins, work cards, and BOMs.</>}
          />
          <BriefStat
            value={<>30-60%</>}
            label={<>of a technician&apos;s day spent on paperwork instead of maintenance.</>}
          />
          <BriefStat
            value={<>Forever</>}
            label={<>how long operators, regulators, insurers, and customers expect the work to be auditable.</>}
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
              Paperwork writes itself from what the glasses observe. No second pass, no re-entry.
            </span>
          </li>
          <li className="flex gap-3">
            <span
              aria-hidden
              className="mt-[6px] h-[5px] w-[5px] flex-none rounded-full bg-amber-400"
            />
            <span className="text-cream-300" style={{ fontSize: "12.5px", lineHeight: 1.5 }}>
              Inspections can proceed in any order access and tooling allow. The platform reconciles the record against the CMM at sign-off.
            </span>
          </li>
          <li className="flex gap-3">
            <span
              aria-hidden
              className="mt-[6px] h-[5px] w-[5px] flex-none rounded-full bg-amber-400"
            />
            <span className="text-cream-300" style={{ fontSize: "12.5px", lineHeight: 1.5 }}>
              Every measurement links to the video frame that produced it. The full record is retrievable in seconds, even from remote flight lines.
            </span>
          </li>
        </ul>
      </BriefSection>

      <BriefFooter />
    </BriefPage>
  );
}
