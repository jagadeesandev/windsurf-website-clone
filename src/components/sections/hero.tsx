"use client";

import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-primary-navy)]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-[var(--color-accent-purple)] to-[var(--color-accent-pink)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[var(--color-accent-cyan)] to-[var(--color-accent-yellow)] rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Welcome Label */}
          <div className="mb-8">
            <span className="inline-block px-6 py-3 bg-[var(--color-secondary-navy)] rounded-full text-sm font-medium text-[var(--color-accent-cyan)] tracking-wider uppercase border border-[var(--color-accent-cyan)]/20">
              Welcome to My Portfolio
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="mb-8 text-6xl lg:text-8xl font-bold text-[var(--color-pure-white)] tracking-tight leading-tight">
            <span className="block mb-4">Jagadeesan A</span>
            <span className="bg-gradient-to-r from-[var(--color-accent-purple)] via-[var(--color-accent-pink)] to-[var(--color-accent-cyan)] bg-clip-text text-transparent">
              Frappe & ERPNext
            </span>
            <span className="block">Developer</span>
          </h1>

          {/* Subtitle */}
          <div className="mb-12 max-w-4xl mx-auto">
            <p className="text-xl lg:text-2xl text-[var(--color-light-gray)] leading-relaxed mb-6">
              <strong className="text-[var(--color-pure-white)]">3.9 years</strong> of expertise in 
              <strong className="text-[var(--color-accent-purple)]"> Full Stack Development</strong>, 
              <strong className="text-[var(--color-accent-pink)]"> ERPNext Customization</strong>, 
              and <strong className="text-[var(--color-accent-cyan)]">AI-Driven Solutions</strong>
            </p>
            <p className="text-lg text-[var(--color-light-gray)] leading-relaxed">
              Transforming complex business requirements into elegant, scalable solutions that deliver exceptional value. 
              Passionate about continuous learning and leveraging emerging technologies to solve real-world problems.
            </p>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-[var(--color-accent-purple)] to-[var(--color-accent-pink)] hover:from-[var(--color-accent-purple)]/90 hover:to-[var(--color-accent-pink)]/90 text-[var(--color-pure-white)] px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <Link href="#portfolio">
                <span className="btn-text">View My Projects</span>
                <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Link>
            </Button>

            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-[var(--color-secondary-navy)] text-[var(--color-light-gray)] hover:bg-[var(--color-secondary-navy)] hover:text-[var(--color-pure-white)] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              <Link href="#contact">
                <span className="btn-text">Get In Touch</span>
              </Link>
            </Button>
          </div>

          {/* Social Links & Quick Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-[var(--color-light-gray)]">
            <div className="flex items-center gap-6">
              <a 
                href="https://linkedin.com/in/jagadeesan-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[var(--color-accent-cyan)] transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="mailto:jagadeesan1104@gmail.com"
                className="flex items-center gap-2 hover:text-[var(--color-accent-purple)] transition-colors duration-300"
              >
                <span>Email</span>
              </a>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[var(--color-success-green)] rounded-full animate-pulse"></div>
                <span>Available for hire</span>
              </div>
              <div>📍 Chennai, India</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-background)] to-transparent"></div>
    </section>
  );
}