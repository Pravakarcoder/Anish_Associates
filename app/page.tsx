import HeroSection from "@/components/home/hero-section";
import AboutPreview from "@/components/home/about-preview";
import ServicesSection from "@/components/home/services-section";
import IndustriesSection from "@/components/home/industries-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import CtaSection from "@/components/home/cta-section";
import BlogPreview from "@/components/home/blog-preview";
import SecuritySection from "@/components/home/security-section";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <HeroSection />
      <AboutPreview />
      <ServicesSection />
      <IndustriesSection />
      <TestimonialsSection />
      <BlogPreview />
      <SecuritySection />
      <CtaSection />
    </div>
  );
}
