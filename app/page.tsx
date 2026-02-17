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
          HERO — Bold, vague, mission-driven
          ======================== */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-dark-950 to-dark-900">
        {/* Subtle geometric grid overlay */}
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
            Free the Hands
            <br />
            <span className="text-cream-200">That Build.</span>
          </h1>

          {/* Subheadline — vague but powerful */}
          <p className="animate-fade-in-delay-1 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
            Advanced vision technology and AI, purpose-built to unlock the
            enormous productivity trapped inside America&apos;s maintenance and
            manufacturing workforce.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-delay-2 mt-4 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/aerovision-demo/glasses-demo"
              className="flex h-14 items-center justify-center rounded-sm bg-cream-200 px-8 text-lg font-medium text-dark-950 transition-all hover:bg-cream-300 hover:scale-[1.02]"
            >
              See It in Action
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
          THE UNLOCK — Reframe the problem as massive opportunity
          ======================== */}
      <SectionWrapper id="opportunity" className="bg-white">
        <ScrollReveal>
          <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            The Biggest Productivity Unlock
            <br className="hidden md:block" />
            in a Generation
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <p className="mt-4 text-center text-lg text-gray-500 max-w-2xl mx-auto">
            America&apos;s most skilled workers — the people who maintain, build,
            and repair everything — are spending most of their time on
            documentation instead of the work itself. That&apos;s not a small
            inefficiency. It&apos;s a massive, untapped reserve of human
            capability.
          </p>
        </ScrollReveal>

        {/* Stat cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Stat 1 — Wrench time */}
          <ScrollReveal delay={1}>
            <div className="text-center p-8 rounded-sm bg-gray-50 border border-gray-200">
              <div className="text-6xl md:text-7xl font-bold text-gray-900 tracking-tight">
                25%
              </div>
              <p className="mt-4 text-gray-700 text-lg font-medium">
                of a technician&apos;s shift is spent with tools in hand
              </p>
              <p className="mt-2 text-sm text-gray-400">
                Industry average &ldquo;wrench time&rdquo;
              </p>
            </div>
          </ScrollReveal>

          {/* Stat 2 — Jobs at risk */}
          <ScrollReveal delay={2}>
            <div className="text-center p-8 rounded-sm bg-gray-50 border border-gray-200">
              <div className="text-6xl md:text-7xl font-bold text-gray-900 tracking-tight">
                1.9M
              </div>
              <p className="mt-4 text-gray-700 text-lg font-medium">
                skilled positions at risk of going unfilled by 2033
              </p>
              <p className="mt-2 text-sm text-gray-400">
                Deloitte &amp; Manufacturing Institute
              </p>
            </div>
          </ScrollReveal>

          {/* Stat 3 — Investment pouring in */}
          <ScrollReveal delay={3}>
            <div className="text-center p-8 rounded-sm bg-gray-50 border border-gray-200">
              <div className="text-6xl md:text-7xl font-bold text-gray-900 tracking-tight">
                $2T+
              </div>
              <p className="mt-4 text-gray-700 text-lg font-medium">
                in US manufacturing investment announced since 2021
              </p>
              <p className="mt-2 text-sm text-gray-400">
                Reshoring Initiative
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Bridge statement */}
        <ScrollReveal>
          <p className="mt-16 text-center text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed">
            The money is flowing. The factories are being built. But the people
            who make it all work are drowning in paperwork — and there
            aren&apos;t enough of them. Every hour a technician spends on
            documentation is an hour America can&apos;t afford to waste.
          </p>
        </ScrollReveal>
      </SectionWrapper>

      {/* ========================
          WHY NOW — Reindustrialization moment
          ======================== */}
      <SectionWrapper id="why-now" className="bg-gray-50">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight max-w-3xl">
            A Once-in-a-Generation
            <br />
            <span className="text-gray-500">Moment.</span>
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column — narrative */}
          <ScrollReveal animation="fade-in-left">
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                America is reindustrializing at a pace not seen since the
                postwar era. Semiconductors, defense, energy, advanced
                manufacturing — trillions of dollars are flowing into building
                the physical infrastructure of the future.
              </p>
              <p>
                But the skilled workforce that makes all of it possible is
                stretched to its limit. Experienced technicians are retiring
                faster than new ones can be trained. The ones still working are
                buried under decades-old documentation systems that steal hours
                from every shift.
              </p>
              <p className="text-gray-900 font-medium">
                You can&apos;t reindustrialize with 1970s paperwork. The
                workforce needs leverage — and that&apos;s exactly what we
                build.
              </p>
            </div>
          </ScrollReveal>

          {/* Right column — stats */}
          <ScrollReveal animation="fade-in-right">
            <div className="space-y-8">
              <div className="p-6 rounded-sm bg-white border border-gray-200">
                <div className="text-5xl font-bold text-gray-900 tracking-tight">
                  65%
                </div>
                <p className="mt-2 text-gray-600 text-base">
                  of manufacturers say talent is their number one business
                  challenge
                </p>
                <p className="mt-1 text-sm text-gray-400">Deloitte</p>
              </div>
              <div className="p-6 rounded-sm bg-white border border-gray-200">
                <div className="text-5xl font-bold text-gray-900 tracking-tight">
                  4–5 years
                </div>
                <p className="mt-2 text-gray-600 text-base">
                  to train a skilled maintenance technician — and their
                  knowledge walks out the door when they retire
                </p>
                <p className="mt-1 text-sm text-gray-400">Dept. of Labor</p>
              </div>
              <div className="p-6 rounded-sm bg-white border border-gray-200">
                <div className="text-5xl font-bold text-gray-900 tracking-tight">
                  17.6%
                </div>
                <p className="mt-2 text-gray-600 text-base">
                  growth in trade school enrollment — a new generation is
                  answering the call
                </p>
                <p className="mt-1 text-sm text-gray-400">
                  National Student Clearinghouse
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      {/* ========================
          WHAT WE BELIEVE — Approach section (vague, aspirational)
          ======================== */}
      <SectionWrapper id="approach" className="bg-white">
        <ScrollReveal>
          <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            We Believe the Work
            <br className="hidden md:block" />
            Should Document Itself
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <p className="mt-4 text-center text-lg text-gray-500 max-w-2xl mx-auto">
            We&apos;re building technology that sees what technicians see,
            understands the work as it happens, and handles the documentation
            automatically — so skilled hands never have to stop.
          </p>
        </ScrollReveal>

        {/* Three pillars */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <ScrollReveal delay={1}>
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-900 mb-4">01</div>
              <h3 className="text-xl font-bold text-gray-900">
                Vision That Sees the Work
              </h3>
              <p className="mt-3 text-gray-500 leading-relaxed">
                Advanced vision systems that observe maintenance and
                manufacturing tasks in real time — capturing what matters
                without interrupting the workflow.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-900 mb-4">02</div>
              <h3 className="text-xl font-bold text-gray-900">
                AI That Understands It
              </h3>
              <p className="mt-3 text-gray-500 leading-relaxed">
                Purpose-built intelligence that interprets technical work across
                industries — identifying procedures, verifying compliance, and
                generating documentation with precision.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={3}>
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-900 mb-4">03</div>
              <h3 className="text-xl font-bold text-gray-900">
                Documentation That Writes Itself
              </h3>
              <p className="mt-3 text-gray-500 leading-relaxed">
                Complete, accurate records produced automatically — from the
                work, as it happens. No forms. No data entry. No hours lost.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      {/* ========================
          WHAT IF — Vision of the solved world (dark, dramatic)
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
                What if technicians never touched a form again?
              </p>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <p className="text-2xl md:text-4xl font-bold text-white leading-snug">
                What if every repair, every inspection, every maintenance task
                documented itself — automatically, accurately, instantly?
              </p>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <p className="text-2xl md:text-4xl font-bold text-white leading-snug">
                What if we could give every skilled worker in America back a
                third of their day?
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
                See it in action <ArrowRight size={18} />
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
              See It for Yourself
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              We&apos;re starting in aerospace — where the documentation burden
              is heaviest and the stakes are highest. This is just the
              beginning.
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/aerovision-demo/glasses-demo"
                className="flex h-14 items-center justify-center rounded-sm bg-gray-900 px-10 text-lg font-medium text-white transition-all hover:bg-dark-700 hover:scale-[1.02]"
              >
                See It in Action
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
                Explore the Platform <ArrowRight size={16} />
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
