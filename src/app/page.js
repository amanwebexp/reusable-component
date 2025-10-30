"use client";

import { AnimatedBackground } from "@/components/HomePageContent/AnimatedBackground";
import CTASection from "@/components/HomePageContent/ctaSection";
import ExampleSection from "@/components/HomePageContent/ExampleSection";
import FeaturesSection from "@/components/HomePageContent/FeatureSection";
import { HeroSection } from "@/components/HomePageContent/HeroSection";
import SiteFooter from "@/components/HomePageContent/SiteFooter";
import SiteHeader from "@/components/HomePageContent/SiteHeader";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-[#ffcfcf] via-[#ffffff] to-[#ffcfcf]  text-white text-white font-sans relative overflow-hidden">
        <AnimatedBackground />
        <div className="relative z-10">
          {/* Site Header */}
          <SiteHeader />

          <div>
            {/* Hero Section */}
            <HeroSection />

            {/* Features Section */}
            <FeaturesSection />

            {/* Example Section */}
            <ExampleSection />

            {/* CTA Section */}
            <CTASection />
          </div>

          <SiteFooter />
        </div>
      </div>
    </>
  );
}
