import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const prev = () =>
    setActiveTestimonial(
      (i) => (i - 1 + testimonials.length) % testimonials.length,
    );
  const next = () => setActiveTestimonial((i) => (i + 1) % testimonials.length);

  return (
    <section className="section-padding px-6">
      <div className="container-max">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-violet-300">
            Client Stories
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Trusted by builders who value execution
          </h2>
        </div>
        <div className="mx-auto max-w-3xl">
          <div className="glass relative overflow-hidden rounded-[2rem] border border-white/8 p-8 lg:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-400/10 blur-3xl" />
            <div className="mb-6 flex gap-1">
              {Array.from({
                length: testimonials[activeTestimonial].rating,
              }).map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <blockquote className="mb-8 text-xl leading-relaxed text-white/85 lg:text-2xl">
              “{testimonials[activeTestimonial].review}”
            </blockquote>
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="font-semibold text-white">
                  {testimonials[activeTestimonial].client}
                </div>
                <div className="text-sm text-white/40">
                  {testimonials[activeTestimonial].designation}
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all hover:border-white/40 hover:text-white"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all hover:border-white/40 hover:text-white"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
            <div className="mt-6 flex gap-1.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`Testimonial ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${index === activeTestimonial ? "w-6 bg-cyan-400" : "w-1.5 bg-white/20 hover:bg-white/40"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
