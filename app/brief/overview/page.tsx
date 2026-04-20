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
        headline={<>Mechanics inspect. Glasses observe. Paperwork writes itself.</>}
        subhead={<>Aerospace maintenance, captured as it happens.</>}
      />

      {/* PROBLEM */}
      <BriefSection
        eyebrow="The problem"
        title="The work and the paperwork don't agree."
        className="mt-[0.3in]"
      >
        <div className="grid grid-cols-3 gap-4">
          <div>
            <div className="font-display text-cream-200" style={{ fontSize: "13.5px", fontWeight: 600 }}>
              Paperwork bends the shift.
            </div>
            <p className="mt-1.5 text-cream-400" style={{ fontSize: "11.5px", lineHeight: 1.5 }}>
              Inspection CMMs run seventy-plus pages. Every measurement is hand-written, then re-entered into a separate MRO system. The shift warps around the forms, not the work.
            </p>
          </div>
          <div>
            <div className="font-display text-cream-200" style={{ fontSize: "13.5px", fontWeight: 600 }}>
              Work flows. Forms don't.
            </div>
            <p className="mt-1.5 text-cream-400" style={{ fontSize: "11.5px", lineHeight: 1.5 }}>
              Inspectors jump around based on access and tooling. Forms expect a fixed sequence. One missed measurement can cost hours of teardown to recapture what was already done.
            </p>
          </div>
          <div>
            <div className="font-display text-cream-200" style={{ fontSize: "13.5px", fontWeight: 600 }}>
              Everyone demands proof.
            </div>
            <p className="mt-1.5 text-cream-400" style={{ fontSize: "11.5px", lineHeight: 1.5 }}>
              Operators, regulators, insurers, and customers all expect instant searchability and auditability. Current systems make that slow and expensive to produce.
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
            value={<>33-50%</>}
            label={<>of a technician's day spent on paperwork instead of maintenance.</>}
          />
          <BriefStat
            value={<>Forever</>}
            label={<>how long operators, regulators, insurers, and customers expect inspection evidence to remain retrievable.</>}
          />
        </div>
        <p
          className="mt-3 text-amber-400"
          style={{ fontSize: "11.5px", lineHeight: 1.5, fontStyle: "italic" }}
        >
          A ten-technician shop loses the labor of three to five full technicians every year to paperwork, not maintenance.
        </p>
        <p
          className="mt-1.5 text-cream-400/80"
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
              The platform follows the technician. Inspections proceed in whatever order access and tooling allow, and the record still adds up.
            </span>
          </li>
          <li className="flex gap-3">
            <span
              aria-hidden
              className="mt-[6px] h-[5px] w-[5px] flex-none rounded-full bg-amber-400"
            />
            <span className="text-cream-300" style={{ fontSize: "12.5px", lineHeight: 1.5 }}>
              Works on remote flight lines. Capture buffers on-device and syncs when connectivity returns.
            </span>
          </li>
          <li className="flex gap-3">
            <span
              aria-hidden
              className="mt-[6px] h-[5px] w-[5px] flex-none rounded-full bg-amber-400"
            />
            <span className="text-cream-300" style={{ fontSize: "12.5px", lineHeight: 1.5 }}>
              Every measurement links to the video frame that produced it. Instantly searchable by operators, regulators, insurers, and customers.
            </span>
          </li>
        </ul>
      </BriefSection>

      <BriefFooter />
    </BriefPage>
  );
}
