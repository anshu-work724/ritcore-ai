import { ArrowRight, Brain, Sparkles, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Industry Expertise",
    description:
      "Experienced team delivering scalable software solutions across multiple industries.",
    icon: Sparkles,
  },
  {
    title: "Custom Built Solutions",
    description:
      "Every product is tailored specifically to business requirements instead of generic templates.",
    icon: Brain,
  },
  {
    title: "Agile Development",
    description:
      "Fast iterations, transparent communication and efficient delivery.",
    icon: Workflow,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding px-6">
      <div className="container-max grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-gradient-to-br from-cyan-400/10 via-transparent to-violet-400/10 p-8 sm:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(125,211,232,0.16),transparent_35%)]" />
          <div className="relative grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/8 bg-black/30 p-5">
              <div className="mb-4 h-16 w-16 rounded-2xl bg-cyan-400/10" />
              <p className="text-sm text-white/60">
                Product strategy and execution
              </p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-black/30 p-5">
              <div className="mb-4 h-16 w-16 rounded-2xl bg-violet-400/10" />
              <p className="text-sm text-white/60">
                Scalable engineering systems
              </p>
            </div>
            <div className="sm:col-span-2 rounded-2xl border border-white/8 bg-black/30 p-5">
              <div className="mb-4 h-20 rounded-2xl bg-[linear-gradient(135deg,rgba(125,211,232,0.2),rgba(155,127,232,0.16))]" />
              <p className="text-sm text-white/60">
                Design-led experiences with measurable business impact
              </p>
            </div>
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Why Choose Ritcore AI
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            A focused partner for modern digital products
          </h2>
          <div className="mt-8 space-y-5">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/8 bg-white/5 p-5"
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-white/55">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition-colors duration-200 hover:text-cyan-200"
          >
            Let&apos;s build something valuable <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
