"use client";

import { useEffect, useState } from "react";
import Header from "@/components/sections/header";
import AnnouncementBanner from "@/components/sections/announcement-banner";
import HeroSection from "@/components/sections/hero";
import TechStack from "@/components/sections/tech-stack";
import AboutIntro from "@/components/sections/about-intro";
import ExperienceDemo from "@/components/sections/experience-demo";
import ProjectsIntro from "@/components/sections/projects-intro";
import ProjectsDemo from "@/components/sections/projects-demo";
import SkillsGrid from "@/components/sections/skills-grid";
import StatsSection from "@/components/sections/stats";
import TestimonialQuote from "@/components/sections/testimonial-quote";
import TestimonialsCarousel from "@/components/sections/testimonials-carousel";
import TechnologiesSection from "@/components/sections/technologies-section";
import ServicesSection from "@/components/sections/services-section";
import ContactSection from "@/components/sections/contact-section";
import BlogInsights from "@/components/sections/blog-insights";
import FinalCta from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";

export default function HomePage() {
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  useEffect(() => {
    const handleAnnouncementVisibility = () => {
      const announcement = document.querySelector('[data-announcement]');
      if (announcement) {
        setAnnouncementVisible(true);
      }
    };

    handleAnnouncementVisibility();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBanner />
      <Header />
      
      <main className="relative">
        <HeroSection />
        <TechStack />
        <AboutIntro />
        <ExperienceDemo />
        <ProjectsIntro />
        <ProjectsDemo />
        <SkillsGrid />
        <StatsSection />
        <TestimonialQuote />
        <TestimonialsCarousel />
        <TechnologiesSection />
        <ServicesSection />
        <ContactSection />
        <BlogInsights />
        <FinalCta />
      </main>
      
      <Footer />
    </div>
  );
}