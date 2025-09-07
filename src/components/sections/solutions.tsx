import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const DeveloperWave = () => (
  <div className="pointer-events-none absolute -bottom-[16rem] -left-[23rem] z-10 h-[30.5625rem] w-[50rem] opacity-30 mix-blend-soft-light md:-bottom-[20rem] md:-left-[20rem] md:h-[35.3125rem] md:w-[50rem]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_theme(colors.accent-pink)_0%,_theme(colors.accent-yellow)_50%,_transparent_70%)]" />
  </div>
);

const EnterpriseWave = () => (
  <div className="pointer-events-none absolute -bottom-[16rem] -left-[23rem] z-10 h-[30.5625rem] w-[50rem] opacity-40 mix-blend-soft-light md:-bottom-[20rem] md:-left-[20rem] md:h-[35.3125rem] md:w-[50rem]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_theme(colors.accent-cyan)_0%,_theme(colors.accent-yellow)_40%,_theme(colors.accent-pink)_60%,_transparent_80%)]" />
  </div>
);

const SolutionsSection = () => {
  return (
    <section id="solutions" className="bg-background py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-5">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl font-semibold !leading-tight text-pure-white md:text-4xl">
            Solutions for Organizations<br />
            and Individual Developers
          </h2>
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
            
            <Link
              href="/pricing"
              className="relative flex min-h-[470px] w-full flex-col justify-between overflow-hidden rounded-2xl bg-[#4c1d95] p-8"
            >
              <div className="z-20 flex flex-col gap-8">
                <div className="w-fit rounded bg-purple-200 px-2.5 py-1 text-xs font-semibold uppercase text-purple-950">
                  For Developers
                </div>
                <h3 className="max-w-[20ch] text-3xl font-medium text-white">
                  Code without context-switching. Finally!
                </h3>
              </div>
              <div className="z-20 flex w-fit cursor-pointer items-center gap-2 border-b-2 border-white pb-1 text-sm font-medium uppercase text-white transition-colors hover:border-white/80 hover:text-white/80">
                Learn more
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
              <DeveloperWave />
            </Link>

            <Link
              href="/enterprise"
              className="relative flex min-h-[470px] w-full flex-col justify-between overflow-hidden rounded-2xl bg-[#064e3b] p-8"
            >
              <div className="z-20 flex flex-col gap-8">
                <div className="w-fit rounded bg-green-300 px-2.5 py-1 text-xs font-semibold uppercase text-green-950">
                  For Enterprise
                </div>
                <h3 className="max-w-[20ch] text-3xl font-medium text-white">
                  Multiply your organization’s output overnight.
                </h3>
              </div>
              <div className="z-20 flex w-fit cursor-pointer items-center gap-2 border-b-2 border-white pb-1 text-sm font-medium uppercase text-white transition-colors hover:border-white/80 hover:text-white/80">
                Learn more
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
              <EnterpriseWave />
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;