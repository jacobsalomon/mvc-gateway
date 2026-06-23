import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sales Control Room | Mechanical Vision Corporation",
  description:
    "Internal MVC control room for choosing the right deck, one-pager, or field note before a sales or investor conversation.",
  robots: { index: false, follow: false },
};

// Point deck links at the deck's own origin (not a relative /pitch path) so the
// viewer's deck passcode cookie — which lives on mechanicalvisioncorp.com — is
// reused. A relative link would hit the passcode gate again on this domain.
const pitchOrigin =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3018"
    : "https://mechanicalvisioncorp.com";

const linkClassName =
  "text-[#0645ad] underline underline-offset-2 visited:text-[#0b0080]";

// "Download" reuses the deck's built-in print-to-PDF (?print=core|full), which
// opens the browser's Save-as-PDF dialog on the deck itself. The deck is the
// single home for download actions; its on-screen print buttons were removed.
const deckLinks = [
  {
    label: "Core Deck (wedge-first)",
    href: `${pitchOrigin}/pitch`,
    actions: [
      { label: "Download core deck as PDF", href: `${pitchOrigin}/pitch?print=core` },
      {
        label: "Download deck + references as PDF",
        href: `${pitchOrigin}/pitch?print=full`,
      },
    ],
  },
  {
    label: "Mission-first deck",
    href: `${pitchOrigin}/pitch/mission`,
    actions: [
      {
        label: "Download core deck as PDF",
        href: `${pitchOrigin}/pitch/mission?print=core`,
      },
      {
        label: "Download deck + references as PDF",
        href: `${pitchOrigin}/pitch/mission?print=full`,
      },
    ],
  },
];

const noLogoDeckLink = {
  label: "No-logo Deck",
  href: "https://mechanicalvisioncorp.com/pitch-no-logos",
};

const onePagerLinks = [
  {
    label: "AeroVision prospect one-pager",
    href: "/brief/aerovision",
  },
  {
    label: "Investor one-pager",
    href: "/brief/investor",
  },
  {
    label: "How MVC works",
    href: "/brief/how-it-works",
  },
  {
    label: "V-Star brief",
    href: "/brief/vstar",
  },
  {
    label: "Field Notes",
    href: "/field-notes",
  },
];

const nextLinks = [
  "Robotics/data deck, draft next",
  "Robotics story one-pager, optional after deck is locked",
];

const storyReminders = [
  {
    id: "labor-shortage",
    body: (
      <>
        Start with scarce expert labor, not robots. Boeing projects 710,000 new
        commercial aviation maintenance technicians needed worldwide by 2044.{" "}
        <ExternalLink href="https://www.boeing.com/commercial/market/pilot-technician-outlook">
          Boeing PTO
        </ExternalLink>
      </>
    ),
  },
  {
    id: "aviation-wedge",
    body: (
      <>
        Aviation is the wedge. ATEC and Oliver Wyman say U.S. civil commercial
        aviation maintenance already has more than 431,000 personnel, but commercial
        air transport alone still faces a 2025 shortage in certificated mechanics.{" "}
        <ExternalLink href="https://www.atec-amt.org/pipeline-report">
          ATEC pipeline
        </ExternalLink>
      </>
    ),
  },
  {
    id: "mro-growth",
    body: (
      <>
        Demand is moving the wrong way. Oliver Wyman puts global aviation MRO at
        $119B in 2025 and $156B by 2035, driven by older aircraft and more flight
        hours.{" "}
        <ExternalLink href="https://www.oliverwyman.com/our-expertise/insights/2025/feb/global-fleet-and-mro-market-forecast-2025-2035.html">
          Oliver Wyman
        </ExternalLink>
      </>
    ),
  },
  {
    id: "industrial-pattern",
    body: (
      <>
        The broader industrial pattern is bigger. BLS counts 538,300 U.S.
        industrial machinery mechanics, maintenance workers, and millwrights, with
        13% growth and 54,200 openings per year projected through 2034.{" "}
        <ExternalLink href="https://www.bls.gov/ooh/installation-maintenance-and-repair/industrial-machinery-mechanics-and-maintenance-workers-and-millwrights.htm">
          BLS
        </ExternalLink>
      </>
    ),
  },
  {
    id: "documentation-wedge",
    body: (
      <>
        The wedge gets paid today. McKinsey says one-fifth of aviation maintenance
        technician jobs may go unfilled by 2033 and technicians can spend about 60%
        of the day researching, troubleshooting, and preparing reports.{" "}
        <ExternalLink href="https://www.mckinsey.com/industries/aerospace-and-defense/our-insights/the-generative-ai-opportunity-in-airline-maintenance">
          McKinsey
        </ExternalLink>
      </>
    ),
  },
  {
    id: "robotics-bottleneck",
    body: (
      <>
        Robots are arriving, but integration is the bottleneck. IFR counts 4.66M
        industrial robots in operation, while adoption is still constrained by
        vision, process design, and system integration expertise.{" "}
        <ExternalLink href="https://ifr.org/img/worldrobotics/Executive_Summary_WR_2025_Industrial_Robots.pdf">
          IFR
        </ExternalLink>
      </>
    ),
  },
  {
    id: "data-bridge",
    body: (
      <>
        Data is the bridge from documentation to robots. EgoMimic shows egocentric
        human video can scale imitation learning, and NVIDIA GR00T trains on
        real-robot trajectories, human videos, and synthetic data.{" "}
        <ExternalLink href="https://arxiv.org/abs/2410.24221">EgoMimic</ExternalLink>
        {", "}
        <ExternalLink href="https://arxiv.org/abs/2503.14734">GR00T</ExternalLink>
      </>
    ),
  },
  {
    id: "mvc-story",
    body: (
      <>
        MVC story: glasses observe, mechanic just does the job, human reviews and
        signs. We solve the urgent documentation problem while collecting the
        expert maintenance data robots will need.
      </>
    ),
  },
];

export default function ControlRoomPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-10 font-serif text-[17px] leading-[1.55] text-black">
      <div className="mx-auto max-w-[680px]">
        <h1 className="text-[28px] font-normal leading-tight">Jake sales control room</h1>
        <p className="mt-4">
          Quick links for MVC decks, one-pagers, and follow-up material.
        </p>

        <Section title="Decks">
          <ul className="list-disc pl-6">
            {deckLinks.map((deck) => (
              <li key={deck.href}>
                <a
                  href={deck.href}
                  target="_blank"
                  rel="noreferrer"
                  className={linkClassName}
                >
                  {deck.label}
                </a>
                <ul className="mt-1 list-disc pl-6">
                  {deck.actions.map((action) => (
                    <li key={action.href}>
                      <a
                        href={action.href}
                        target="_blank"
                        rel="noreferrer"
                        className={linkClassName}
                      >
                        {action.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li>
              <a
                href={noLogoDeckLink.href}
                target="_blank"
                rel="noreferrer"
                className={linkClassName}
              >
                {noLogoDeckLink.label}
              </a>
            </li>
          </ul>
        </Section>

        <Section title="One-pagers">
          <ul className="list-disc pl-6">
            {onePagerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  prefetch={false}
                  className={linkClassName}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Next">
          <ul className="list-disc pl-6">
            {nextLinks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section title="Story reminders">
          <ul className="list-disc pl-6">
            {storyReminders.map((item) => (
              <li key={item.id}>{item.body}</li>
            ))}
          </ul>
        </Section>
      </div>
    </main>
  );
}

function ExternalLink({
  href,
  children,
}: Readonly<{
  href: string;
  children: ReactNode;
}>) {
  return (
    <a href={href} className={linkClassName} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function Section({
  title,
  children,
}: Readonly<{
  title: string;
  children: ReactNode;
}>) {
  // Keep the page intentionally plain: just headings and links.
  return (
    <section className="mt-8">
      <h2 className="text-[20px] font-normal">{title}</h2>
      <div className="mt-2">{children}</div>
    </section>
  );
}
