import { services } from "../../data/services";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
  return (
    <section className="section-padding px-6">
      <div className="container-max">
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Core Services
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Built for ambitious products at every stage
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
