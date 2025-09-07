import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CascadeDemo = () => {
  return (
    <section className="bg-primary-navy py-20 lg:py-24">
      <div className="container mx-auto px-4">
        
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-purple">
            Explore the features
          </p>
          <h2 className="mt-4 text-5xl font-bold tracking-tight text-white md:text-6xl">
            Cascade
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-body-large text-light-gray/90">
            Cascade combines deep codebase understanding, a breadth of advanced tools, and a real-time awareness of your actions into a powerful, seamless, and collaborative flow. It is the most powerful way to code with AI.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 items-center gap-x-16 gap-y-10 md:grid-cols-2">
          <div>
            <h3 className="text-[32px] font-semibold leading-tight text-white lg:text-4xl">
              Cascade, an agent that codes, fixes and thinks 10 steps ahead
            </h3>
          </div>
          <div>
            <p className="text-body-regular text-light-gray/90">
              Built to keep you in flow by understanding your intent and handling the complex codebases so you can focus on the fun stuff.
            </p>
            <Link 
              href="/cascade" 
              className="group mt-8 inline-flex items-center btn-text text-accent-purple transition-colors hover:text-purple-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple focus-visible:ring-offset-2 focus-visible:ring-offset-primary-navy rounded-md"
            >
              EXPLORE CASCADE FEATURES
              <ArrowRight className="ml-2 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        
        <div className="mt-16 lg:mt-24">
          <div 
            className="relative rounded-2xl p-px" 
            style={{
              background: 'linear-gradient(135deg, var(--color-accent-purple), var(--color-accent-pink), var(--color-accent-yellow))'
            }}
          >
            <div className="rounded-[15px] bg-secondary-navy p-2 sm:p-4">
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <video
                  className="w-full"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="https://exafunction.github.io/public/videos/cascade/cascade-context-awareness.mp4"
                />
                <div 
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(10, 22, 40, 0.7), transparent 50%)'
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default CascadeDemo;