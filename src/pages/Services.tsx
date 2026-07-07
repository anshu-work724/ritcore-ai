import ServicesHero from "../components/services/ServicesHero";
import ServicesGrid from "../components/services/ServicesGrid";
import TechnologySection from "../components/services/TechnologySection";
import WhyChooseUs from "../components/services/WhyChooseUs";
import Testimonials from "../components/services/Testimonials";
import CTA from "../components/services/CTA";

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <ServicesHero />
      <ServicesGrid />
      <TechnologySection />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </div>
  );
}
