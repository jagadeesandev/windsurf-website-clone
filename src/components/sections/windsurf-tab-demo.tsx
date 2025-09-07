import React from 'react';
import { ArrowRight } from 'lucide-react';

const WindsurfTabDemo = () => {
  return (
    <section className="bg-primary-navy py-24 sm:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold tracking-tight text-pure-white">
            Tab Tab Tab...Ship
          </h2>
          <p className="mt-6 text-lg leading-8 text-light-gray/80">
            A single keystroke, limitless power, complete flow. The full power
            of Windsurf Tab is exclusive to the Windsurf Editor. Our IDE plugins
            include only the autocomplete action.
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-7xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h3 className="text-[32px] font-semibold leading-[1.3] text-pure-white">
                Windsurf Tab: Many Actions, One Effortless Flow
              </h3>
            </div>
            <div>
              <p className="text-base text-light-gray/80">
                Tab to move your cursor. Tab to import your dependencies. Tab
                to glory.
              </p>
              <a
                href="/tab"
                className="mt-8 inline-flex items-center gap-2 font-['Inter'] text-sm font-medium uppercase tracking-[0.01em] text-pure-white transition-colors hover:text-light-gray"
              >
                Tab Features
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="relative rounded-2xl bg-gradient-to-br from-accent-cyan via-accent-purple to-accent-pink p-0.5 shadow-2xl shadow-black/40">
            <div className="overflow-hidden rounded-[15px] bg-secondary-navy">
              <video
                className="w-full"
                src="https://exafunction.github.io/public/videos/windsurf_tab/tab-to-jump.mp4"
                autoPlay
                loop
                muted
                playsInline
                aria-label="Windsurf Tab feature demonstration video"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WindsurfTabDemo;