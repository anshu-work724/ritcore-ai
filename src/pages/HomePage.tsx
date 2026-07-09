import { Link } from "react-router-dom";
import DotGrid from "../components/DotGrid";
import Testimonials from "../components/services/Testimonials";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../components/ui/card";

import { ArrowRight } from "lucide-react";
import { services, techStack } from "../data/stackAndServiceshHomepage";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center overflow-hidden"
        style={{ minHeight: "100svh" }}
      >
        <div className="absolute inset-0 z-0">
          <DotGrid
            dotSize={4}
            gap={28}
            baseColor="#1a2a33"
            activeColor="#7dd3e8"
            proximity={140}
            speedTrigger={80}
            shockRadius={220}
            shockStrength={8}
            className="w-full h-full"
            style={{}}
          />
        </div>
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.95) 100%)",
          }}
        />
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 border"
            style={{
              background: "rgba(125,211,232,0.08)",
              borderColor: "rgba(125,211,232,0.25)",
              color: "#7dd3e8",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            Premium IT Agency — India
          </div>
          <h1
            id="hero-headline"
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-none tracking-tight mb-6"
          >
            Your Vision Our Code,
            <span className="block gradient-text mt-2">
              Limitless Possibilities
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/55 leading-relaxed max-w-2xl mx-auto mb-10">
            We transform ambitious ideas into high-performance software
            solutions, tailored, scalable, and built to drive real business
            results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              id="hero-cta-primary"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-black text-sm transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #7dd3e8 0%, #9b7fe8 100%)",
              }}
            >
              Start Your Project <ArrowRight size={16} />
            </Link>
            <Link
              to="/portfolio"
              id="hero-cta-secondary"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm border border-white/15 text-white/80 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-200"
            >
              View Our Work
            </Link>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { value: "50+", label: "Projects Shipped" },
              { value: "40+", label: "Happy Clients" },
              { value: "3+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-xs text-white/40 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-padding">
        <div className="container-max">
          <div className="text-center mb-10">
            <h2 className="block text-5xl font-extrabold uppercase tracking-wider gradient-text mb-9">
              What We Do
            </h2>
            <p className="text-white/50 text-lg mx-auto">
              we turn ambitious ideas into high-performance software solutions —
              tailored, scalable, and built for real business impact. Backed by
              talent that has shaped projects for leading global brands, we
              specialize in custom development, cloud solutions, system
              integration, and IT consulting. Your Vision, Our Code Limitless
              Possibilities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <Card
                  key={svc.title}
                  className="glass border-white/8 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 group cursor-default"
                >
                  <CardHeader>
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `${svc.color}18`,
                        border: `1px solid ${svc.color}30`,
                      }}
                    >
                      <Icon size={20} style={{ color: svc.color }} />
                    </div>
                    <CardTitle className="text-white text-base">
                      {svc.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/50 text-sm leading-relaxed">
                      {svc.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Marquee */}
      <section className="py-14 overflow-hidden border-y border-white/5">
        <div className="text-center mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/30">
            Technologies We Master
          </span>
        </div>
        <div
          className="relative"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
        >
          <div
            className="animate-marquee gap-4"
            style={{ width: "max-content" }}
          >
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="inline-flex items-center px-5 py-2 rounded-full text-sm font-medium border text-white/60 hover:text-white/90 transition-colors shrink-0 mx-2"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA Banner */}
      <section className="section-padding">
        <div className="container-max">
          <div
            className="rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(125,211,232,0.10) 0%, rgba(155,127,232,0.10) 100%)",
              border: "1px solid rgba(125,211,232,0.15)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(125,211,232,0.06) 0%, transparent 70%)",
              }}
            />
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 relative">
              Ready to Build Something{" "}
              <span className="gradient-text">Great?</span>
            </h2>
            <p className="text-white/50 text-lg mb-8 relative">
              Book a free discovery call — no commitment, just clarity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center relative">
              <a
                href="https://wa.me/919389628434"
                target="_blank"
                rel="noopener noreferrer"
                id="cta-whatsapp"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-200 hover:opacity-90 hover:scale-105"
                style={{ background: "#25d366" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
              <Link
                to="/contact"
                id="cta-contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm border border-white/20 text-white/80 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-200"
              >
                Send an Email <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
