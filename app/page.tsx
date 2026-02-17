import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import Navbar from "@/components/navbar";
import SectionWrapper from "@/components/section-wrapper";
import ScrollReveal from "@/components/scroll-reveal";
import AnimatedGrid from "@/components/animated-grid";
import CountUp from "@/components/count-up";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* ========================
          HERO — Bold, vague, mission-driven
          ======================== */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-dark-950 to-dark-900">
        {/* Atmospheric Unsplash image — very low opacity for texture
            Photo by Unsplash (https://unsplash.com/photos/1565008447742) */}
        <div
          className="absolute inset-0 parallax-bg opacity-[0.12]"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />

        {/* Animated dot-grid background */}
        <AnimatedGrid />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center max-w-4xl">
          {/* Main headline */}
          <h1 className="animate-fade-in font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter leading-[1.05]">
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
              className="cta-glow flex h-14 items-center justify-center rounded-sm bg-cream-200 px-8 text-lg font-medium text-dark-950 transition-all hover:bg-cream-300 hover:scale-[1.02]"
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

        {/* Scroll-down indicator — thin and subtle */}
        <div className="animate-fade-in-delay-3 absolute bottom-10 flex flex-col items-center gap-2">
          <span className="text-white/30 text-[10px] uppercase tracking-[0.25em] font-light">
            Scroll
          </span>
          <ChevronDown size={16} className="text-white/30 animate-bounce-slow" />
        </div>
      </section>

      {/* ========================
          THE UNLOCK — Reframe the problem as massive opportunity
          ======================== */}
      <SectionWrapper id="opportunity" className="bg-gradient-to-b from-dark-900 to-dark-950">
        <ScrollReveal>
          <h2 className="text-center font-display text-4xl md:text-6xl font-bold text-white tracking-tight">
            The Biggest Productivity Unlock
            <br className="hidden md:block" />
            in a Generation
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <p className="mt-4 text-center text-lg text-white/60 max-w-2xl mx-auto">
            America&apos;s most skilled workers — the people who maintain, build,
            and repair everything — are spending most of their time on
            documentation instead of the work itself. That&apos;s not a small
            inefficiency. It&apos;s a massive, untapped reserve of human
            capability.
          </p>
        </ScrollReveal>

        {/* Stat cards — glass-morphism on dark */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Stat 1 — Wrench time */}
          <ScrollReveal delay={1}>
            <div className="text-center p-8 rounded-sm bg-white/[0.05] border border-white/[0.08]">
              <div className="font-display text-6xl md:text-7xl font-bold text-white tracking-tight">
                <CountUp end={25} suffix="%" />
              </div>
              <p className="mt-4 text-white/70 text-lg font-medium">
                of a technician&apos;s shift is spent with tools in hand
              </p>
              <p className="mt-2 text-sm text-white/40">
                Industry average &ldquo;wrench time&rdquo;
              </p>
            </div>
          </ScrollReveal>

          {/* Stat 2 — Jobs at risk */}
          <ScrollReveal delay={2}>
            <div className="text-center p-8 rounded-sm bg-white/[0.05] border border-white/[0.08]">
              <div className="font-display text-6xl md:text-7xl font-bold text-white tracking-tight">
                <CountUp end={1.9} suffix="M" decimals={1} />
              </div>
              <p className="mt-4 text-white/70 text-lg font-medium">
                skilled positions at risk of going unfilled by 2033
              </p>
              <p className="mt-2 text-sm text-white/40">
                Deloitte &amp; Manufacturing Institute
              </p>
            </div>
          </ScrollReveal>

          {/* Stat 3 — Investment pouring in */}
          <ScrollReveal delay={3}>
            <div className="text-center p-8 rounded-sm bg-white/[0.05] border border-white/[0.08]">
              <div className="font-display text-6xl md:text-7xl font-bold text-white tracking-tight">
                <CountUp end={2} prefix="$" suffix="T+" />
              </div>
              <p className="mt-4 text-white/70 text-lg font-medium">
                in US manufacturing investment announced since 2021
              </p>
              <p className="mt-2 text-sm text-white/40">
                Reshoring Initiative
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Bridge statement */}
        <ScrollReveal>
          <p className="mt-16 text-center text-white/50 max-w-3xl mx-auto text-lg leading-relaxed">
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
      <section id="why-now" className="relative px-6 py-24 md:py-32 bg-dark-950 overflow-hidden">
        {/* Atmospheric Unsplash image — very low opacity for texture
            Photo: Industrial/aerial scene by Unsplash */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
          style={{ backgroundImage: "url('/why-now-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/80 via-transparent to-dark-950/80" />

        <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left column — heading + narrative */}
          <div>
            <ScrollReveal>
              <h2 className="font-display text-4xl md:text-6xl font-bold text-white tracking-tight">
                A Once-in-a-Generation
                <br />
                <span className="text-white/50">Moment.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-left">
              <div className="mt-10 space-y-6 text-white/60 text-lg leading-relaxed">
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
                <p className="text-white font-medium">
                  You can&apos;t reindustrialize with 1970s paperwork. The
                  workforce needs leverage — and that&apos;s exactly what we
                  build.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right column — stats, aligned with heading */}
          <ScrollReveal animation="fade-in-right">
            <div className="space-y-8">
              <div className="p-6 rounded-sm bg-white/[0.05] border border-white/[0.08]">
                <div className="font-display text-5xl font-bold text-white tracking-tight">
                  <CountUp end={65} suffix="%" />
                </div>
                <p className="mt-2 text-white/60 text-base">
                  of manufacturers say talent is their number one business
                  challenge
                </p>
                <p className="mt-1 text-sm text-white/40">Deloitte</p>
              </div>
              <div className="p-6 rounded-sm bg-white/[0.05] border border-white/[0.08]">
                <div className="font-display text-5xl font-bold text-white tracking-tight">
                  4–5 years
                </div>
                <p className="mt-2 text-white/60 text-base">
                  to train a skilled maintenance technician — and their
                  knowledge walks out the door when they retire
                </p>
                <p className="mt-1 text-sm text-white/40">Dept. of Labor</p>
              </div>
              <div className="p-6 rounded-sm bg-white/[0.05] border border-white/[0.08]">
                <div className="font-display text-5xl font-bold text-white tracking-tight">
                  <CountUp end={17.6} suffix="%" decimals={1} />
                </div>
                <p className="mt-2 text-white/60 text-base">
                  growth in trade school enrollment — a new generation is
                  answering the call
                </p>
                <p className="mt-1 text-sm text-white/40">
                  National Student Clearinghouse
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
        </div>
      </section>

      {/* ========================
          WHAT WE BELIEVE — Approach section (vague, aspirational)
          ======================== */}
      <SectionWrapper id="approach" className="bg-gradient-to-b from-dark-950 to-dark-800">
        <ScrollReveal>
          <h2 className="text-center font-display text-4xl md:text-6xl font-bold text-white tracking-tight">
            We Believe the Work
            <br className="hidden md:block" />
            Should Document Itself
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <p className="mt-4 text-center text-lg text-white/60 max-w-2xl mx-auto">
            We&apos;re building technology that sees what technicians see,
            understands the work as it happens, and handles the documentation
            automatically — so skilled hands never have to stop.
          </p>
        </ScrollReveal>

        {/* Three pillars */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <ScrollReveal delay={1}>
            <div className="text-center">
              <div className="font-display text-6xl font-bold text-white mb-4">01</div>
              <h3 className="text-xl font-bold text-white">
                Vision That Sees the Work
              </h3>
              <p className="mt-3 text-white/50 leading-relaxed">
                Advanced vision systems that observe maintenance and
                manufacturing tasks in real time — capturing what matters
                without interrupting the workflow.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className="text-center">
              <div className="font-display text-6xl font-bold text-white mb-4">02</div>
              <h3 className="text-xl font-bold text-white">
                AI That Understands It
              </h3>
              <p className="mt-3 text-white/50 leading-relaxed">
                Purpose-built intelligence that interprets technical work across
                industries — identifying procedures, verifying compliance, and
                generating documentation with precision.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={3}>
            <div className="text-center">
              <div className="font-display text-6xl font-bold text-white mb-4">03</div>
              <h3 className="text-xl font-bold text-white">
                Documentation That Writes Itself
              </h3>
              <p className="mt-3 text-white/50 leading-relaxed">
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
        {/* Subtle dot pattern matching hero for visual consistency */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-2xl md:text-3xl font-light italic text-white/50">
              What if...
            </p>
          </ScrollReveal>

          <div className="mt-12 space-y-12">
            <ScrollReveal delay={1}>
              <p className="font-display text-2xl md:text-4xl font-bold text-white leading-snug">
                What if technicians never touched a form again?
              </p>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <p className="font-display text-2xl md:text-4xl font-bold text-white leading-snug">
                What if every repair, every inspection, every maintenance task
                documented itself — automatically, accurately, instantly?
              </p>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <p className="font-display text-2xl md:text-4xl font-bold text-white leading-snug">
                What if we could give every skilled worker in America back a
                third of their day?
              </p>
            </ScrollReveal>

            <ScrollReveal delay={4}>
              <p className="font-display text-2xl md:text-4xl font-bold text-white/90 leading-snug">
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
      <SectionWrapper className="bg-dark-950">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white tracking-tight">
              See It for Yourself
            </h2>
            <p className="mt-4 text-lg text-white/60 max-w-xl mx-auto">
              The technology is real. The mission is just beginning.
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/aerovision-demo/glasses-demo"
                className="cta-glow flex h-14 items-center justify-center rounded-sm bg-cream-200 px-10 text-lg font-medium text-dark-950 transition-all hover:bg-cream-300 hover:scale-[1.02]"
              >
                See It in Action
              </Link>
              <Link
                href="/pitch"
                className="flex h-14 items-center justify-center rounded-sm border border-white/20 px-8 text-lg font-medium text-white/70 transition-all hover:border-white/40 hover:bg-white/[0.05]"
              >
                Investor Deck
              </Link>
              <Link
                href="/aerovision-demo/dashboard"
                className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-base font-medium"
              >
                Explore the Platform <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-dark-950 px-6 py-8">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <span>
            &copy; 2026 The Mechanical Vision Corporation
          </span>
          <div className="flex items-center gap-4">
            <span>Jake Salomon</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>jacobrsalomon@gmail.com</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
