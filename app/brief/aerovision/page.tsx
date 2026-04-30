import type { Metadata } from "next";

import BriefFooter from "@/components/brief/BriefFooter";
import BriefHero from "@/components/brief/BriefHero";
import BriefPage from "@/components/brief/BriefPage";
import BriefSection from "@/components/brief/BriefSection";
import BriefStat from "@/components/brief/BriefStat";

export const metadata: Metadata = {
  title: "AeroVision · Prospect one-pager",
  description:
    "AeroVision helps aircraft maintenance teams reduce turnaround time by preparing review-ready records from observed work.",
};

const workflowSteps = [
  {
    label: "Observe",
    detail:
      "The mechanic puts on glasses and starts the job. AeroVision observes without changing the flow.",
  },
  {
    label: "Prepare",
    detail:
      "AI maps measurements, findings, photos, timestamps, and CMM context into the record.",
  },
  {
    label: "Review",
    detail:
      "QA sees the evidence trail, resolves exceptions, and the authorized reviewer signs.",
  },
];

const buyerBenefits = [
  "Fewer end-of-shift writeups and less duplicate entry",
  "Cleaner QA review with evidence attached to each critical field",
  "Measurement capture that can feed existing systems, including Quantum",
  "No rip-and-replace and no black-box signoff",
];

export default function AeroVisionBriefPage() {
  return (
    <BriefPage>
      <BriefHero
        image="/whatif-2.jpg"
        imageAlt="A maintenance technician working below an aircraft engine"
        headline={
          <>
            Get aircraft back faster. Mechanics just do the job.
          </>
        }
        subhead={
          <>
            AeroVision glasses observe maintenance work as it happens, then prepare review-ready records with the evidence already attached.
          </>
        }
        heightClass="h-[2.1in]"
      />

      {/* Problem framing for MRO leaders who care about turnaround time. */}
      <BriefSection
        eyebrow="The turnaround leak"
        title="The work may be done, but the aircraft is not ready until the record is clean."
        className="mt-[0.2in]"
      >
        <div className="grid grid-cols-3 gap-4">
          <div>
            <div className="font-display text-cream-200" style={{ fontSize: "13.2px", fontWeight: 600 }}>
              Documentation slows release.
            </div>
            <p className="mt-1.5 text-cream-400" style={{ fontSize: "11.2px", lineHeight: 1.45 }}>
              Technicians lose time after the task capturing measurements, findings, and corrective actions again.
            </p>
          </div>
          <div>
            <div className="font-display text-cream-200" style={{ fontSize: "13.2px", fontWeight: 600 }}>
              QA chases missing proof.
            </div>
            <p className="mt-1.5 text-cream-400" style={{ fontSize: "11.2px", lineHeight: 1.45 }}>
              Inspectors untangle late notes, unclear photos, and records that do not show how work was verified.
            </p>
          </div>
          <div>
            <div className="font-display text-cream-200" style={{ fontSize: "13.2px", fontWeight: 600 }}>
              The best teams need capacity.
            </div>
            <p className="mt-1.5 text-cream-400" style={{ fontSize: "11.2px", lineHeight: 1.45 }}>
              The technician shortage makes every paperwork hour expensive. MROs need more throughput from the same team.
            </p>
          </div>
        </div>
      </BriefSection>

      {/* Proof and value claims kept concrete for prospect conversations. */}
      <BriefSection
        eyebrow="What changes"
        title="AeroVision removes documentation drag from the maintenance flow."
        className="mt-[0.2in]"
      >
        <div className="grid grid-cols-3 gap-4">
          <BriefStat
            value={<>22</>}
            label={<>measurements captured in one SilverWings session.</>}
          />
          <BriefStat
            value={<>100%</>}
            label={<>accuracy versus manual verification in that session.</>}
          />
          <BriefStat
            value={<>TAT</>}
            label={<>target outcome: cleaner records sooner, so work can move to release faster.</>}
          />
        </div>
      </BriefSection>

      <BriefSection
        eyebrow="How it works"
        title={
          <span>
            Observe the work. Prepare the record.{" "}
            <span className="text-amber-400">Keep humans in control.</span>
          </span>
        }
        className="mt-[0.2in]"
      >
        <ol className="grid grid-cols-3 gap-3">
          {workflowSteps.map((step, index) => (
            <li
              key={step.label}
              className="rounded-sm border border-cream-200/10 bg-cream-200/[0.02] px-3 py-3"
            >
              <div
                className="font-display text-amber-400"
                style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.05em" }}
              >
                0{index + 1}
              </div>
              <div
                className="mt-1 font-display text-cream-200"
                style={{ fontSize: "13px", fontWeight: 650 }}
              >
                {step.label}
              </div>
              <p className="mt-1 text-cream-400" style={{ fontSize: "10.8px", lineHeight: 1.42 }}>
                {step.detail}
              </p>
            </li>
          ))}
        </ol>
      </BriefSection>

      <BriefSection
        eyebrow="Why observed work wins"
        title="A maintenance record should be built from what happened, not reconstructed later."
        className="mt-[0.2in]"
      >
        <div className="grid grid-cols-[1.1fr_1fr] gap-5">
          <p style={{ fontSize: "12.4px", lineHeight: 1.48 }}>
            Manual capture depends on the technician remembering every useful detail after the work. AeroVision starts with the real source of truth: the work itself. The glasses observe the task, the AI organizes the evidence, and the mechanic reviews the record before signoff.
          </p>
          <ul className="flex flex-col gap-1.5">
            {buyerBenefits.map((benefit) => (
              <li key={benefit} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-[6px] h-[5px] w-[5px] flex-none rounded-full bg-amber-400"
                />
                <span className="text-cream-300" style={{ fontSize: "11.4px", lineHeight: 1.4 }}>
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </BriefSection>

      <BriefFooter />
    </BriefPage>
  );
}
