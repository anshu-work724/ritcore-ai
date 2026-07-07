import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="section-padding px-6">
      <div className="container-max">
        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-[linear-gradient(135deg,rgba(125,211,232,0.12),rgba(155,127,232,0.12))] p-10 text-center sm:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(125,211,232,0.08),transparent_70%)]" />
          <div className="relative">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Ready to turn your vision into a product that scales?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/60">
              Book a consultation with Ritcore AI and get a thoughtful roadmap
              tailored to your business goals.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/919389628434"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:opacity-90"
                style={{ background: "#25d366" }}
              >
                Chat on WhatsApp <ArrowRight size={16} />
              </a>
              <Link
                to="/contact"
                className="rounded-xl border border-white/15 px-7 py-3.5 text-sm font-semibold text-white/80 transition-all duration-200 hover:border-white/30 hover:bg-white/5 hover:text-white"
              >
                Schedule a Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
