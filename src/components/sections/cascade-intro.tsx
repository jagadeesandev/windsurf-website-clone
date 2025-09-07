import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CascadeIntro = () => {
  return (
    <section className="bg-background text-foreground py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <p className="font-button text-accent-yellow text-xs font-medium tracking-[0.2em] uppercase mb-4">
            Explore the features
          </p>
          <h1 className="text-6xl md:text-7xl font-bold leading-[1.1] text-pure-white -tracking-[0.02em]">
            Cascade
          </h1>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-light-gray max-w-3xl mx-auto">
            Cascade combines deep codebase understanding, a breadth of advanced tools, and a real-time awareness of your actions into a powerful, seamless, and collaborative flow. It is the most powerful way to code with AI.
          </p>
        </div>

        <div className="mt-20 lg:mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="lg:pr-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-pure-white -tracking-[0.01em]">
              Cascade, an agent that codes, fixes and thinks 10 steps ahead
            </h2>
          </div>
          <div className="flex flex-col gap-6 md:pt-2">
            <p className="text-base leading-relaxed text-light-gray/90">
              Built to keep you in flow by understanding your intent and handling the complex codebases so you can focus on the fun stuff.
            </p>
            <Link
              href="/cascade"
              className="group inline-flex items-center gap-2 text-accent-purple font-button font-medium text-sm tracking-widest uppercase transition-colors hover:text-accent-pink"
            >
              Explore Cascade Features
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CascadeIntro;