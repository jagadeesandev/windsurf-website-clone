"use client";

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const AboutIntro = () => {
  return (
    <section className="relative bg-[var(--color-primary-navy)] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[var(--color-accent-purple)] to-[var(--color-accent-pink)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[var(--color-accent-cyan)] to-[var(--color-accent-yellow)] rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Label */}
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-[var(--color-secondary-navy)] rounded-full text-sm font-medium text-[var(--color-light-gray)] tracking-wider uppercase">
                About Me
              </span>
            </div>

            {/* Main headline */}
            <h1 className="mb-8 text-5xl lg:text-7xl font-bold text-[var(--color-pure-white)] tracking-tight">
              <span className="bg-gradient-to-r from-[var(--color-accent-purple)] via-[var(--color-accent-pink)] to-[var(--color-accent-cyan)] bg-clip-text text-transparent">
                Frappe & ERPNext
              </span>
              <br />
              Specialist
            </h1>

            {/* Professional summary */}
            <div className="mb-12 space-y-6 text-lg lg:text-xl text-[var(--color-light-gray)] leading-relaxed max-w-3xl mx-auto">
              <p>
                With <strong className="text-[var(--color-pure-white)]">3.9 years of experience</strong> in Full Stack Development, 
                I specialize in creating innovative solutions that bridge the gap between complex business requirements 
                and cutting-edge technology.
              </p>
              
              <p>
                My expertise spans <strong className="text-[var(--color-accent-purple)]">ERPNext customization</strong>, 
                <strong className="text-[var(--color-accent-pink)]"> Python development</strong>, and 
                <strong className="text-[var(--color-accent-cyan)]"> AI-driven solutions</strong> powered by 
                Azure OpenAI and advanced LLM models. I'm passionate about continuous learning and leveraging 
                emerging technologies to solve real-world problems.
              </p>

              <p>
                Driven by innovation and equipped with strong problem-solving skills, I transform challenging 
                requirements into elegant, scalable solutions that deliver exceptional value to businesses and users alike.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="#portfolio"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-[var(--color-accent-purple)] to-[var(--color-accent-pink)] text-[var(--color-pure-white)] px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-accent-purple)]/25 hover:-translate-y-1"
              >
                <span className="btn-text">View My Work</span>
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <Link 
                href="#contact"
                className="inline-flex items-center gap-2 text-[var(--color-light-gray)] px-8 py-4 border border-[var(--color-secondary-navy)] rounded-lg font-medium transition-all duration-300 hover:bg-[var(--color-secondary-navy)] hover:text-[var(--color-pure-white)]"
              >
                <span className="btn-text">Get In Touch</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-background)] to-transparent"></div>
    </section>
  );
};

export default AboutIntro;