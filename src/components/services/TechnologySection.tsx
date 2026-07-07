import { technologyCategories } from "../../data/technologies";
import TechCategory from "./TechCategory";

export default function TechnologySection() {
  return (
    <section className="section-padding border-y border-white/8 bg-black/20 px-6">
      <div className="container-max">
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-violet-300">
            Technology Stack
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Technologies we use to deliver world-class products
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {technologyCategories.map((category) => (
            <TechCategory key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
