import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServicesHero() {
  return (
    <section className="relative flex min-h-[80svh] items-center justify-center overflow-hidden px-6 pt-24 pb-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(6,182,212,0.12),transparent_32%),radial-gradient(circle_at_80%_85%,rgba(139,92,246,0.12),transparent_35%),linear-gradient(to_bottom,#0B0F14,#050608,#000000)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.02),transparent_45%,rgba(155,127,232,0.04))]" />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-cyan-300">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
          Services
        </div>
        <h1 className="mb-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
          Our <span className="gradient-text">Core Strengths</span>
        </h1>
        <p className="mx-auto max-w-3xl text-base leading-8 text-white/60 sm:text-lg">
          Ritcore AI is a technology partner that combines strategy,
          engineering, AI and product thinking to build scalable digital
          solutions for startups, businesses and enterprises.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-black transition-all duration-200 hover:scale-[1.02] hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #7dd3e8 0%, #9b7fe8 100%)",
            }}
          >
            Schedule a Consultation <ArrowRight size={16} />
          </Link>
          <Link
            to="/portfolio"
            className="rounded-xl border border-white/15 px-7 py-3.5 text-sm font-semibold text-white/80 transition-all duration-200 hover:border-white/30 hover:bg-white/5 hover:text-white"
          >
            See Recent Work
          </Link>
        </div>
      </div>
    </section>
  );
}
