import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-blue-500 to-blue-900">
      {/* Aircraft wireframe overlay (same as seed-deck title slide) */}
      <Image
        src="/aircraft-wireframe.jpg"
        alt=""
        width={800}
        height={570}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[15%] h-full w-auto opacity-40 mix-blend-lighten object-cover pointer-events-none [mask-image:radial-gradient(ellipse_70%_80%_at_60%_50%,black_20%,transparent_100%)]"
        priority
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center max-w-3xl">
        {/* Company name */}
        <h1 className="animate-fade-in text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-none">
          The Mechanical Vision
          <br />
          Corporation
        </h1>

        {/* Tagline with keyword pill (matching seed-deck) */}
        <div className="animate-fade-in-delay-1 text-xl md:text-2xl text-white/90 font-light leading-relaxed">
          <p>The Mechanic Works.</p>
          <p className="mt-2">
            The Paperwork{" "}
            <span className="bg-gray-900 text-white px-3 py-1 rounded-md font-bold">
              Writes Itself.
            </span>
          </p>
        </div>

        {/* CTA buttons */}
        <div className="animate-fade-in-delay-2 mt-4 flex flex-col sm:flex-row gap-4">
          {/* Demo CTA — primary action */}
          <Link
            href="/aerovision-demo/glasses-demo"
            className="flex h-14 items-center justify-center rounded-full bg-white px-8 text-lg font-semibold text-blue-600 shadow-lg transition-all hover:bg-blue-50 hover:shadow-xl hover:scale-105"
          >
            See the Demo
          </Link>

          {/* Pitch CTA — secondary action */}
          <Link
            href="/pitch"
            className="flex h-14 items-center justify-center rounded-full border-2 border-white/60 px-8 text-lg font-semibold text-white transition-all hover:bg-white/10 hover:border-white hover:scale-105"
          >
            Investor Deck
          </Link>
        </div>

        {/* Contact info (matching seed-deck footer style) */}
        <div className="animate-fade-in-delay-3 mt-8 flex items-center gap-6 text-sm text-white/50">
          <span>Jake Salomon</span>
          <span className="w-1 h-1 rounded-full bg-white/40" />
          <span>jacobrsalomon@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
