"use client";

export default function TestimonialQuote() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[var(--color-accent-pink)] to-[var(--color-accent-purple)] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--color-accent-cyan)] rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote */}
          <blockquote className="text-3xl lg:text-4xl font-bold text-white leading-relaxed mb-12">
            "Jagadeesan delivered exceptional ERP solutions that transformed our business operations. His expertise in Frappe and AI integration helped us achieve 75% reduction in processing time and eliminate manual errors completely."
          </blockquote>

          {/* Attribution */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-accent-cyan)] to-[var(--color-accent-yellow)] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
            </div>
            
            <div className="text-center sm:text-left">
              <div className="text-white font-semibold text-lg mb-1">Amilma Ice Creams</div>
              <div className="text-white/80 text-sm">Senior Management</div>
              <div className="text-white/60 text-xs mt-1">Enterprise Client</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}