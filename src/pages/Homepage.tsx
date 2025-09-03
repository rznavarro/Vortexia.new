import React from "react";
import HeroSection from "../components/sections/HeroSection";
import ServicesSection from "../components/sections/ServicesSection";
import PricingSection from "../components/sections/PricingSection";
import ContactSection from "../components/sections/ContactSection";

export default function Homepage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <ContactSection />
    </div>
  );
}