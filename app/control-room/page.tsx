import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sales Control Room | Mechanical Vision Corporation",
  description:
    "Internal MVC control room for choosing the right deck, one-pager, or field note before a sales or investor conversation.",
  robots: { index: false, follow: false },
};

const pitchBasePath =
  process.env.NODE_ENV === "development" ? "http://localhost:3018/pitch" : "/pitch";

const coreDeckLink = {
  label: "Core Deck",
  href: pitchBasePath,
};

const coreDeckActions = [
  {
    label: "Download core deck as PDF",
    href: `${pitchBasePath}/api/pdf?scope=core`,
  },
  {
    label: "Download Deck + References as PDF",
    href: `${pitchBasePath}/api/pdf?scope=full`,
  },
];

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
            <li>
              <Link
                href={coreDeckLink.href}
                prefetch={false}
                className="text-[#0645ad] underline underline-offset-2 visited:text-[#0b0080]"
              >
                {coreDeckLink.label}
              </Link>
              <ul className="mt-1 list-disc pl-6">
                {coreDeckActions.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      prefetch={false}
                      className="text-[#0645ad] underline underline-offset-2 visited:text-[#0b0080]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
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
                  className="text-[#0645ad] underline underline-offset-2 visited:text-[#0b0080]"
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
            <li>Glasses observe.</li>
            <li>Mechanic just does the job.</li>
            <li>Human reviews and signs.</li>
          </ul>
        </Section>
      </div>
    </main>
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
