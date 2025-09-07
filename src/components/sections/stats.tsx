"use client";

import { useEffect, useState } from "react";

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('stats-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      number: "3.9+",
      label: "Years of Experience",
      description: "Full Stack Development expertise with focus on enterprise solutions"
    },
    {
      number: "15+",
      label: "Projects Completed",
      description: "ERP implementations, custom applications, and AI-powered solutions"
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      description: "Delivered scalable solutions that exceed business requirements"
    }
  ];

  return (
    <section 
      id="stats-section"
      className="relative py-20 lg:py-32 bg-gradient-to-br from-[var(--color-accent-purple)] via-[var(--color-accent-pink)] to-[var(--color-accent-cyan)] overflow-hidden"
    >
      {/* Background Wave Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg viewBox="0 0 1200 800" className="w-full h-full">
          <defs>
            <linearGradient id="statsWaveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#F3F4F6" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>
          <path 
            d="M0,300 C300,200 600,400 1200,300 L1200,0 L0,0 Z" 
            fill="url(#statsWaveGradient)" 
            opacity="0.1"
          />
          <path 
            d="M0,600 C400,500 800,700 1200,600 L1200,800 L0,800 Z" 
            fill="url(#statsWaveGradient)" 
            opacity="0.05"
          />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <span className="text-sm font-medium text-white uppercase tracking-wider">
              ACHIEVEMENTS
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Proven Track Record of Excellence
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Delivering innovative solutions that drive business growth and operational efficiency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 transition-all duration-700 ${
                isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="mb-4">
                <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-white/90 mb-3">
                  {stat.label}
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Achievement Highlights */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-2xl font-bold text-white mb-1">4+</div>
            <div className="text-sm text-white/80">Companies</div>
          </div>
          <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-2xl font-bold text-white mb-1">10+</div>
            <div className="text-sm text-white/80">Technologies</div>
          </div>
          <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-2xl font-bold text-white mb-1">5+</div>
            <div className="text-sm text-white/80">AI Projects</div>
          </div>
          <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-2xl font-bold text-white mb-1">500+</div>
            <div className="text-sm text-white/80">Users Impacted</div>
          </div>
        </div>
      </div>
    </section>
  );
}