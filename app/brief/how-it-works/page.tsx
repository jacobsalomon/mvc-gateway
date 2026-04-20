import BriefPage from "@/components/brief/BriefPage";
import BriefHero from "@/components/brief/BriefHero";
import BriefSection from "@/components/brief/BriefSection";
import BriefFooter from "@/components/brief/BriefFooter";

export default function BriefHowItWorksPage() {
  return (
    <BriefPage>
      <BriefHero
        image="/whatif-5.jpg"
        imageAlt="A technician's hands working with tools on a component"
        headline={<>How it works.</>}
        subhead={<>Three layers. Each one removes friction the last one left behind.</>}
        heightClass="h-[2.1in]"
      />

      {/* LAYER 1 */}
      <BriefSection
        eyebrow="Layer 1"
        title="Understand the work before it starts."
        className="mt-[0.24in]"
      >
        <div className="grid grid-cols-[1fr_1.4in] gap-4">
          <div className="flex flex-col gap-2">
            <p style={{ fontSize: "12.5px", lineHeight: 1.5 }}>
              Upload the CMM and any supporting manuals. The platform reads every page, identifies the inspection sections, and structures the measurements, tolerances, go and no-go checks, tool callouts, and configuration variants into a usable template.
            </p>
            <p style={{ fontSize: "12.5px", lineHeight: 1.5 }}>
              Multi-level bills of materials come through intact. An inspector can see assembly, sub-assembly, and item relationships the way the manual intends, with torque specs, matched-set flags, and safety-wire requirements attached to the right step.
            </p>
            <p
              className="mt-1 text-amber-400"
              style={{ fontSize: "11.5px", lineHeight: 1.5, fontStyle: "italic" }}
            >
              Every template version is frozen when it is certified. Old work orders stay pinned to the template that approved them.
            </p>
          </div>
          <div
            aria-hidden
            className="relative h-[1.55in] w-full overflow-hidden rounded-sm border border-cream-200/15"
            style={{
              backgroundImage: "url('/aircraft-wireframe.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(140deg, rgba(12,12,12,0.2) 0%, rgba(12,12,12,0.65) 100%)",
              }}
            />
          </div>
        </div>
      </BriefSection>

      {/* LAYER 2 */}
      <BriefSection
        eyebrow="Layer 2"
        title="Capture without changing the work."
        className="mt-[0.2in]"
      >
        <p style={{ fontSize: "12.5px", lineHeight: 1.5 }}>
          The technician picks the part and the work order, puts on smart glasses, and starts the job. That is the only added step. From there, the platform observes.
        </p>
        <ol className="mt-3 grid grid-cols-4 gap-3">
          {[
            {
              num: "01",
              label: "Pick part and work order.",
              detail: "The template for that part loads on a tablet or phone.",
            },
            {
              num: "02",
              label: "Start capture.",
              detail: "Glasses record video and close-mic audio as the job proceeds.",
            },
            {
              num: "03",
              label: "Observe.",
              detail: "The platform maps tools in frame, parts in hand, gauge readings, and spoken measurements to the template items.",
            },
            {
              num: "04",
              label: "Sign.",
              detail: "The technician reviews the pre-filled paperwork and certifies the job.",
            },
          ].map((step) => (
            <li
              key={step.num}
              className="rounded-sm border border-cream-200/10 bg-cream-200/[0.02] px-3 py-2.5"
            >
              <div
                className="font-display text-amber-400"
                style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.05em" }}
              >
                {step.num}
              </div>
              <div
                className="mt-1 font-display text-cream-200"
                style={{ fontSize: "12px", fontWeight: 600 }}
              >
                {step.label}
              </div>
              <div
                className="mt-1 text-cream-400"
                style={{ fontSize: "10.5px", lineHeight: 1.4 }}
              >
                {step.detail}
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-3" style={{ fontSize: "12.5px", lineHeight: 1.5 }}>
          The platform is hardware agnostic. Clip-on camera, headband, or smart glasses, whichever fits the environment. Remote sites without continuous connectivity capture on-device and sync when the link returns, so the record is complete even when the internet is not.
        </p>
      </BriefSection>

      {/* LAYER 3 */}
      <BriefSection
        eyebrow="Layer 3"
        title="Evidence that holds up forever."
        className="mt-[0.2in]"
      >
        <ul className="flex flex-col gap-2">
          <li className="flex gap-3">
            <span
              aria-hidden
              className="mt-[6px] h-[5px] w-[5px] flex-none rounded-full bg-amber-400"
            />
            <span style={{ fontSize: "12.5px", lineHeight: 1.5 }}>
              <span className="font-display text-cream-200" style={{ fontWeight: 600 }}>
                Exceptions-only review.
              </span>{" "}
              Supervisors see the problems first: out-of-spec measurements, findings that need attention, and items the platform could not match on its own. A clean inspection is a nearly empty review.
            </span>
          </li>
          <li className="flex gap-3">
            <span
              aria-hidden
              className="mt-[6px] h-[5px] w-[5px] flex-none rounded-full bg-amber-400"
            />
            <span style={{ fontSize: "12.5px", lineHeight: 1.5 }}>
              <span className="font-display text-cream-200" style={{ fontWeight: 600 }}>
                Every measurement traces back to its source.
              </span>{" "}
              Each number links to the video frame, audio moment, or manual entry that produced it, with the user, timestamp, and method attached.
            </span>
          </li>
          <li className="flex gap-3">
            <span
              aria-hidden
              className="mt-[6px] h-[5px] w-[5px] flex-none rounded-full bg-amber-400"
            />
            <span style={{ fontSize: "12.5px", lineHeight: 1.5 }}>
              <span className="font-display text-cream-200" style={{ fontWeight: 600 }}>
                Sign-off is permanent.
              </span>{" "}
              When the supervisor signs, the record locks. It stays retrievable forever, with operator, regulator, and third-party audits in mind.
            </span>
          </li>
        </ul>
        <p
          className="mt-3 text-amber-400"
          style={{ fontSize: "12px", lineHeight: 1.45, fontStyle: "italic" }}
        >
          The same record feeds the metrics your operations team already wants. Inspection time, rework rate, technician load, trended across shops and fleets.
        </p>
      </BriefSection>

      <BriefFooter />
    </BriefPage>
  );
}
