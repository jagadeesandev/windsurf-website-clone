"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 248 191.2" fill="currentColor" {...props}>
    <path d="M216.8 16.2C201.2 5.6 184.2 0 166.4 0c-3.6 0-7.2 0.2-10.8 0.6-2.2 0.2-4.2 1.2-5.6 2.8-27.8 32-42.6 63.8-42.6 63.8s-4.6-3.8-8.8-7.2c-15.6-12.8-32-23.4-50-31.2-2.8-1.2-6-1.4-8.8-0.6-2.8 0.8-5 2.6-6.4 5.2-4.6 9-11.6 24.8-18.2 41.2-13.6 33.4-20.2 49-20.2 49s4.8-1.4 9.4-3.2c16.2-6.2 30.6-15.2 43.4-26.6 4-3.6 8.2-7.2 12.6-10.8 1.4-1.2 3-2 4.8-2.2 2.4-0.2 4.6 0.6 6.4 2.2 1.4 1.2 2.4 2.6 3.2 4.4 0.8 1.8 1 3.6 0.8 5.6-3.6 26.2-11.6 51.4-23.4 75.4-1.6 3.2-1.2 7 1.2 9.6 2.4 2.6 6 3.4 9.2 2l1.6-0.8c5.4-2.8 10.6-5.8 15.6-9.2 21.6-14.6 39.6-32.8 54.4-54.2 19.8-28.6 32.8-59.2 39.2-91.8 0.2-1.4 0.2-2.6 0-4-0.2-1.4-0.6-2.6-1.2-3.8-0.6-1.2-1.4-2.2-2.4-3-1-0.8-2.2-1.4-3.4-1.8zm-65.4 99.4c-9.6 0-17.4-7.8-17.4-17.4s7.8-17.4 17.4-17.4 17.4 7.8 17.4 17.4-7.8 17.4-17.4 17.4zm-44.4-17.4c0-9.6-7.8-17.4-17.4-17.4s-17.4 7.8-17.4 17.4 7.8 17.4 17.4 17.4 17.4-7.8 17.4-17.4z" />
  </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const footerLinkGroups = [
    { title: 'Products', links: [
        { name: 'Editor', href: '#' },
        { name: 'Cascade', href: '#' },
        { name: 'Tab', href: '#' },
        { name: 'JetBrains Plugin', href: '#' }
    ]},
    { title: 'Resources', links: [
        { name: 'Documentation', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Changelog', href: '#' }
    ]},
    { title: 'Company', links: [
        { name: 'About', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Brand', href: '#' }
    ]},
    { title: 'Legal', links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' }
    ]},
    { title: 'Contact', links: [
        { name: 'support@windsurf.com', href: 'mailto:support@windsurf.com' },
        { name: 'enterprise@windsurf.com', href: 'mailto:enterprise@windsurf.com' }
    ]}
];

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (consent === null) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (consentType: "accepted" | "rejected") => {
    localStorage.setItem("cookie_consent", consentType);
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-5 left-5 z-[100] w-full max-w-sm rounded-xl border border-white/10 bg-[#1A2332] p-6 text-white shadow-2xl">
      <h2 className="text-lg font-semibold text-pure-white">We use cookies</h2>
      <p className="mt-2 text-sm text-light-gray/80">
        We use cookies to improve your experience, personalize content, target advertising, and analyze traffic.
      </p>
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex gap-3">
            <button
              onClick={() => handleConsent("accepted")}
              className="flex-1 rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-200"
            >
              Accept all
            </button>
            <button
              onClick={() => handleConsent("rejected")}
              className="flex-1 rounded-md border border-white/30 bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Reject all
            </button>
        </div>
        <button className="w-full text-left text-sm text-light-gray/80 underline transition-colors hover:text-white">
          Manage preferences
        </button>
      </div>
    </div>
  );
};

export default function Footer() {
  return (
    <>
      <footer className="relative z-10 w-full overflow-hidden bg-[#0A1628] pt-24 md:pt-40">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a92090ae-d5e8-4c68-bb2d-c3f6fe2b5454-windsurf-com/assets/svgs/footer_wave_desktop-3.svg?"
          alt="Footer Waves"
          width={1920}
          height={960}
          className="absolute top-0 left-0 hidden h-auto w-full md:block"
        />
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a92090ae-d5e8-4c68-bb2d-c3f6fe2b5454-windsurf-com/assets/icons/mobile_footer_wave-15.png?"
          alt="Footer Waves"
          width={1024}
          height={1024}
          className="absolute top-0 left-0 block h-auto w-full md:hidden"
        />
        <div className="relative w-full text-white">
          <div className="container mx-auto grid max-w-7xl grid-cols-2 gap-y-12 px-5 pb-16 pt-32 md:grid-cols-6 md:pb-32 md:pt-48">
            {footerLinkGroups.map((group) => (
              <div key={group.title} className="flex flex-col gap-4">
                <p className="text-xs font-medium uppercase text-white">{group.title}</p>
                <ul className="flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/50 transition-colors hover:text-white"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="container mx-auto flex max-w-7xl flex-col border-t border-white/10 px-5 ">
            <div className="flex w-full items-center justify-between py-6">
                <div className="flex items-center gap-10">
                    <Link href="/" aria-label="Windsurf">
                        <span className="font-semibold text-lg text-gray-300">Windsurf</span>
                    </Link>
                    <p className="hidden text-xs text-white/50 md:block">© Windsurf 2025</p>
                </div>
                <div className="flex items-center gap-5">
                    <a href="https://x.com/windsurf_ai" aria-label="X" target="_blank" rel="noopener noreferrer" className="text-white/50 transition-colors hover:text-white">
                        <XIcon className="h-4 w-4" />
                    </a>
                    <a href="https://discord.gg/windsurf" aria-label="Discord" target="_blank" rel="noopener noreferrer" className="text-white/50 transition-colors hover:text-white">
                        <DiscordIcon className="h-5 w-5" />
                    </a>
                    <a href="https://www.linkedin.com/company/windsurf-code/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-white/50 transition-colors hover:text-white">
                        <LinkedInIcon className="h-4 w-4" />
                    </a>
                </div>
            </div>
             <p className="block pb-6 text-xs text-white/50 md:hidden">© Windsurf 2025</p>
          </div>
        </div>
      </footer>
      <CookieConsent />
    </>
  );
}