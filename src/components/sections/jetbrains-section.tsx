import { ArrowRight } from "lucide-react";
import React from "react";

const JetBrainsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 4.128V0h4.13L12 7.872 19.872 0H24v4.128L16.128 12 24 19.872V24h-4.128L12 16.128 4.13 24H0v-4.128L7.872 12 0 4.128Z" />
  </svg>
);

const JetbrainsSection = () => {
  return (
    <section className="flex flex-col gap-10 overflow-hidden bg-[#421b6B] px-5 py-20 text-center text-white md:gap-16">
      <div className="flex flex-col items-center justify-center gap-4">
        <JetBrainsIcon className="h-10 w-10" />
        <h2 className="text-5xl font-light leading-tight tracking-tighter">
          Cascade is available on JetBrains
        </h2>
        <p className="max-w-xl text-lg font-normal text-light-gray">
          An agentic AI experience, now natively integrated into the JetBrains
          IDEs you already love.
        </p>
      </div>

      <div className="flex flex-col items-center gap-10">
        <a
          href="https://docs.windsurf.com/plugins/getting-started"
          className="group mx-auto inline-flex items-center gap-2 border-b border-white pb-1 font-mono text-base font-medium uppercase tracking-wide text-white transition-colors hover:border-white/70 hover:text-white/70"
        >
          <span>Install Plugin</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>

        <div className="relative mx-auto w-full max-w-7xl">
          <video
            className="w-full rounded-lg"
            autoPlay
            playsInline
            loop
            muted
            src="https://exafunction.github.io/public/videos/cascade_jetbrains/jetbrains_context_aware.mp4"
          >
            Your browser does not support the video tag.
          </video>
          <div className="absolute bottom-0 h-40 w-full bg-gradient-to-t from-[#421b6B] to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default JetbrainsSection;