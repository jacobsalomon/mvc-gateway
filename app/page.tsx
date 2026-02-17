import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import Navbar from "@/components/navbar";
import SectionWrapper from "@/components/section-wrapper";
import ScrollReveal from "@/components/scroll-reveal";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* ========================
          HERO — Dark navy, full viewport
          ======================== */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-dark-950 to-dark-900">
        {/* Subtle geometric grid overlay for texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center max-w-4xl">
          {/* Main headline */}
          <h1 className="animate-fade-in text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.05]">
            The Mechanic Works.
            <br />
            <span className="text-cream-200">The Paperwork Writes Itself.</span>
          </h1>

          {/* Subheadline — establishes cross-industry scope */}
          <p className="animate-fade-in-delay-1 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
            Across aerospace, automotive, and industrial — we&apos;re ending the
            paperwork burden for the people who build and maintain everything.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-delay-2 mt-4 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/aerovision-demo/glasses-demo"
              className="flex h-14 items-center justify-center rounded-sm bg-cream-200 px-8 text-lg font-medium text-dark-950 transition-all hover:bg-cream-300 hover:scale-[1.02]"
            >
              See AeroVision
            </Link>
            <Link
              href="/pitch"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-base font-medium"
            >
              Investor Deck <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Scroll-down indicator */}
        <div className="animate-fade-in-delay-3 absolute bottom-8 flex flex-col items-center gap-2">
          <span className="text-white/40 text-xs uppercase tracking-widest">
            Scroll
          </span>
          <ChevronDown size={20} className="text-white/40 animate-bounce-slow" />
        </div>
      </section>

      {/* ========================
          THE PROBLEM — Big stats about the paperwork crisis
          ======================== */}
      <SectionWrapper id="problem" className="bg-white">
        <ScrollReveal>
          <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            The Crisis Hiding in Plain Sight
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <p className="mt-4 text-center text-lg text-gray-500 max-w-2xl mx-auto">
            The most skilled workers in the world are drowning in forms,
            checklists, and compliance paperwork — instead of doing the work
            they were trained for.
          </p>
        </ScrollReveal>

        {/* Stat cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Stat 1 */}
          <ScrollReveal delay={1}>
            <div className="text-center p-8 rounded-sm bg-gray-50 border border-gray-200">
              <div className="text-6xl md:text-7xl font-bold text-gray-900 tracking-tight">
                60%
              </div>
              <p className="mt-4 text-gray-700 text-lg font-medium">
                of a mechanic&apos;s day is paperwork, not work
              </p>
              <p className="mt-2 text-sm text-gray-400">McKinsey</p>
            </div>
          </ScrollReveal>

          {/* Stat 2 */}
          <ScrollReveal delay={2}>
            <div className="text-center p-8 rounded-sm bg-gray-50 border border-gray-200">
              <div className="text-6xl md:text-7xl font-bold text-gray-900 tracking-tight">
                40,000
              </div>
              <p className="mt-4 text-gray-700 text-lg font-medium">
                mechanic shortage expected by 2028
              </p>
              <p className="mt-2 text-sm text-gray-400">Oliver Wyman, ATEC</p>
            </div>
          </ScrollReveal>

          {/* Stat 3 */}
          <ScrollReveal delay={3}>
            <div className="text-center p-8 rounded-sm bg-gray-50 border border-gray-200">
              <div className="text-6xl md:text-7xl font-bold text-gray-900 tracking-tight">
                $1–2M
              </div>
              <p className="mt-4 text-gray-700 text-lg font-medium">
                cost of a single failed aircraft transition
              </p>
              <p className="mt-2 text-sm text-gray-400">IBA</p>
            </div>
          </ScrollReveal>
        </div>

        {/* Cross-industry framing */}
        <ScrollReveal>
          <p className="mt-16 text-center text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed">
            This isn&apos;t one industry&apos;s problem. From aircraft hangars to
            automotive plants to industrial facilities — the people who keep the
            world running are spending more time documenting work than doing it.
          </p>
        </ScrollReveal>
      </SectionWrapper>

      {/* ========================
          THE STAKES — What happens when paperwork fails
          ======================== */}
      <SectionWrapper id="stakes" className="bg-gray-50">
        <ScrollReveal>
          <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            When the Paperwork Fails,
            <br className="hidden md:block" />
            Everything Fails
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Stake 1 */}
          <ScrollReveal delay={1}>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
                520,000
              </div>
              <p className="mt-4 text-gray-600 text-base leading-relaxed">
                suspected unapproved parts in aircraft every year
              </p>
              <p className="mt-2 text-sm text-gray-400">FAA</p>
            </div>
          </ScrollReveal>

          {/* Stake 2 */}
          <ScrollReveal delay={2}>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
                70%
              </div>
              <p className="mt-4 text-gray-600 text-base leading-relaxed">
                of compliance failures caused by poor documentation
              </p>
              <p className="mt-2 text-sm text-gray-400">Airbus</p>
            </div>
          </ScrollReveal>

          {/* Stake 3 */}
          <ScrollReveal delay={3}>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
                800+
              </div>
              <p className="mt-4 text-gray-600 text-base leading-relaxed">
                aircraft grounded by the FAA for documentation violations
              </p>
              <p className="mt-2 text-sm text-gray-400">FAA, January 2026</p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="mt-16 h-px bg-gray-200 max-w-lg mx-auto" />
          <p className="mt-8 text-center text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            Bad documentation doesn&apos;t just cost money. It grounds fleets,
            voids warranties, and puts lives at risk. The systems that track
            compliance still assume the paperwork is accurate. It isn&apos;t.
          </p>
        </ScrollReveal>
      </SectionWrapper>

      {/* ========================
          REINDUSTRIALIZATION — Why this matters NOW
          ======================== */}
      <SectionWrapper id="why-now" className="bg-white">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight max-w-3xl">
            America Is Rebuilding.
            <br />
            <span className="text-gray-500">
              The Workforce Still Runs on Paper.
            </span>
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column — narrative text */}
          <ScrollReveal animation="fade-in-left">
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                The country is betting trillions on manufacturing, aerospace,
                defense, and infrastructure. Factories are being built.
                Supply chains are being reshored. The industrial base is
                expanding for the first time in decades.
              </p>
              <p>
                But the mechanics and technicians who make all of it work —
                the people who actually build, inspect, and maintain
                everything — are disappearing. And the ones still here spend
                most of their time on paperwork instead of the work itself.
              </p>
              <p className="text-gray-900 font-medium">
                You can&apos;t reindustrialize with 1970s documentation systems.
                If America is serious about building again, the paperwork has
                to keep up.
              </p>
            </div>
          </ScrollReveal>

          {/* Right column — workforce stats */}
          <ScrollReveal animation="fade-in-right">
            <div className="space-y-8">
              <div className="p-6 rounded-sm bg-gray-50 border border-gray-200">
                <div className="text-5xl font-bold text-gray-900 tracking-tight">
                  80%
                </div>
                <p className="mt-2 text-gray-600 text-base">
                  of the current workforce expected to retire within 6 years
                </p>
                <p className="mt-1 text-sm text-gray-400">ATEC</p>
              </div>
              <div className="p-6 rounded-sm bg-gray-50 border border-gray-200">
                <div className="text-5xl font-bold text-gray-900 tracking-tight">
                  5 years
                </div>
                <p className="mt-2 text-gray-600 text-base">
                  to train a new aircraft mechanic — and their knowledge walks
                  out the door when they retire
                </p>
                <p className="mt-1 text-sm text-gray-400">Parker Aerospace</p>
              </div>
              <div className="p-6 rounded-sm bg-gray-50 border border-gray-200">
                <div className="text-5xl font-bold text-gray-900 tracking-tight">
                  27%
                </div>
                <p className="mt-2 text-gray-600 text-base">
                  of mechanics are already over 64 years old
                </p>
                <p className="mt-1 text-sm text-gray-400">ATEC</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      {/* ========================
          WHAT IF — Vision of the solved world (stealth mode)
          ======================== */}
      <section
        id="vision"
        className="relative px-6 py-32 md:py-40 bg-gradient-to-b from-dark-800 to-dark-950 overflow-hidden"
      >
        {/* Subtle grid overlay matching hero */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-2xl md:text-3xl font-light italic text-white/50">
              What if...
            </p>
          </ScrollReveal>

          <div className="mt-12 space-y-10">
            <ScrollReveal delay={1}>
              <p className="text-2xl md:text-4xl font-bold text-white leading-snug">
                What if mechanics never touched a form again?
              </p>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <p className="text-2xl md:text-4xl font-bold text-white leading-snug">
                What if every part had a complete, tamper-proof history from
                the moment it was made?
              </p>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <p className="text-2xl md:text-4xl font-bold text-white leading-snug">
                What if documentation generated itself — from the work, as it
                happens?
              </p>
            </ScrollReveal>

            <ScrollReveal delay={4}>
              <p className="text-2xl md:text-4xl font-bold text-white/90 leading-snug">
                What if the people who build everything could just...{" "}
                <span className="text-cream-200">build?</span>
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="mt-16 flex flex-col sm:flex-row items-start gap-4">
              <p className="text-white/50 text-lg">
                That&apos;s what we&apos;re building.
              </p>
              <Link
                href="/aerovision-demo/glasses-demo"
                className="inline-flex items-center gap-2 text-cream-200 hover:text-white text-lg font-medium transition-colors"
              >
                See AeroVision <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================
          CTA + FOOTER
          ======================== */}
      <SectionWrapper className="bg-white">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              See It in Action
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              The best way to understand what we&apos;re building is to
              experience it.
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/aerovision-demo/glasses-demo"
                className="flex h-14 items-center justify-center rounded-sm bg-gray-900 px-10 text-lg font-medium text-white transition-all hover:bg-dark-700 hover:scale-[1.02]"
              >
                See AeroVision
              </Link>
              <Link
                href="/pitch"
                className="flex h-14 items-center justify-center rounded-sm border border-gray-300 px-8 text-lg font-medium text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50"
              >
                Investor Deck
              </Link>
              <Link
                href="/aerovision-demo/dashboard"
                className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors text-base font-medium"
              >
                View Dashboard <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 py-8">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <span>
            &copy; 2026 The Mechanical Vision Corporation
          </span>
          <div className="flex items-center gap-4">
            <span>Jake Salomon</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>jacobrsalomon@gmail.com</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
