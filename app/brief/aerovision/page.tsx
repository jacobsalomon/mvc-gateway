import type { Metadata } from "next";

import BriefFooter from "@/components/brief/BriefFooter";
import BriefHero from "@/components/brief/BriefHero";
import BriefPage from "@/components/brief/BriefPage";
import BriefSection from "@/components/brief/BriefSection";

export const metadata: Metadata = {
  title: "AeroVision - Prospect one-pager",
  description:
    "AeroVision helps aircraft maintenance teams recover inspector capacity and prepare review-ready records from observed work.",
};

const workflowSteps = [
  {
    label: "Observe",
    detail:
      "The mechanic starts the job normally. AeroVision glasses observe without changing the flow.",
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

const valueProps = [
  {
    value: "Capacity",
    label:
      "Recover inspection capacity without asking mechanics to change how they work.",
  },
  {
    value: "Flow",
    label:
      "Capture measurements once and carry them into QA and Quantum without paper-to-system re-entry.",
  },
  {
    value: "Auditability",
    label:
      "Tie each critical field to the observed work, timestamp, user, and evidence behind it.",
  },
];

const buyerBenefits = [
  "Ask what was done, then jump to the record and video proof.",
  "Cleaner QA review with evidence attached to critical fields.",
  "Measurement capture that can feed Quantum.",
  "A dispute-resistant audit log without black-box signoff.",
];

export default function AeroVisionBriefPage() {
  return (
    <BriefPage>
      <BriefHero
        image="/aerovision-brief-airplane-bw.jpg"
        imageAlt="A wide-body aircraft parked at an airport terminal"
        headline={
          <>
            Mechanics inspect. Glasses observe. Paperwork writes itself.
          </>
        }
        subhead={
          <>
            Reclaim inspector capacity, give QA cleaner records, and make every measurement easier to defend later.
          </>
        }
        heightClass="h-[1.75in]"
        imageClassName="object-[center_54%] contrast-[1.08] brightness-[0.82]"
        headlineStyle={{ fontSize: "34px", lineHeight: 1.05, maxWidth: "7in" }}
        subheadStyle={{ fontSize: "14px", lineHeight: 1.35, maxWidth: "6.1in" }}
      />

      {/* Problem framing for MRO leaders who care about operating capacity. */}
      <BriefSection
        eyebrow="The operations leak"
        title="The inspection may be done, but the record still has to be reconstructed."
        className="mt-[0.12in]"
      >
        <div className="grid grid-cols-3 gap-4">
          <div>
            <div className="font-display text-cream-200" style={{ fontSize: "13.2px", fontWeight: 600 }}>
              Inspector capacity gets consumed.
            </div>
            <p className="mt-1.5 text-cream-400" style={{ fontSize: "11.2px", lineHeight: 1.45 }}>
              If eight inspectors lose one-third of the week to documentation, that is more than two inspector-weeks off the floor.
            </p>
          </div>
          <div>
            <div className="font-display text-cream-200" style={{ fontSize: "13.2px", fontWeight: 600 }}>
              Information gets captured twice.
            </div>
            <p className="mt-1.5 text-cream-400" style={{ fontSize: "11.2px", lineHeight: 1.45 }}>
              Measurements move from instrument to paper, then into Quantum, creating extra handoffs.
            </p>
          </div>
          <div>
            <div className="font-display text-cream-200" style={{ fontSize: "13.2px", fontWeight: 600 }}>
              QA needs proof fast.
            </div>
            <p className="mt-1.5 text-cream-400" style={{ fontSize: "11.2px", lineHeight: 1.45 }}>
              Review gets easier when every key field already has the source evidence attached.
            </p>
          </div>
        </div>
      </BriefSection>

      <BriefSection
        eyebrow="Business value"
        title="Give SilverWings more inspection capacity, cleaner information flow, and proof behind every field."
        className="mt-[0.12in]"
      >
        <div className="grid grid-cols-3 gap-3">
          {valueProps.map((prop) => (
            <div
              key={prop.value}
              className="rounded-sm border border-cream-200/10 bg-cream-200/[0.02] px-3 py-2.5"
            >
              <div
              className="font-display font-bold text-amber-400"
              style={{
                fontSize:
                  prop.value === "Auditability"
                      ? "24px"
                      : prop.value === "Capacity"
                        ? "27px"
                        : "32px",
                  lineHeight: 1,
                }}
              >
                {prop.value}
              </div>
              <p className="mt-1.5 text-cream-300" style={{ fontSize: "10.7px", lineHeight: 1.36 }}>
                {prop.label}
              </p>
            </div>
          ))}
        </div>
        <p
          className="mt-2 text-cream-400/85"
          style={{ fontSize: "10.8px", lineHeight: 1.4 }}
        >
          SilverWings pilot proof: 22 measurements captured in one session with 100% accuracy versus manual verification.
        </p>
      </BriefSection>

      <BriefSection
        eyebrow="How it works"
        title={
          <span>
            Observe the work. Prepare the record.{" "}
            <span className="text-amber-400">Keep humans in control.</span>
          </span>
        }
        className="mt-[0.12in]"
      >
        <ol className="grid grid-cols-3 gap-3">
          {workflowSteps.map((step, index) => (
            <li
              key={step.label}
              className="rounded-sm border border-cream-200/10 bg-cream-200/[0.02] px-3 py-2.5"
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
        className="mt-[0.12in]"
      >
        <div className="grid grid-cols-[1.1fr_1fr] gap-5">
          <p style={{ fontSize: "11.8px", lineHeight: 1.42 }}>
            Manual capture depends on people reconstructing details after the work. AeroVision starts from what happened. The glasses observe the task, AI organizes measurements and evidence, and the mechanic reviews the record before signoff. If anyone questions the work later, the answer can include the record and video proof.
          </p>
          <ul className="flex flex-col gap-1">
            {buyerBenefits.map((benefit) => (
              <li key={benefit} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-[6px] h-[5px] w-[5px] flex-none rounded-full bg-amber-400"
                />
                <span className="text-cream-300" style={{ fontSize: "11px", lineHeight: 1.34 }}>
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
