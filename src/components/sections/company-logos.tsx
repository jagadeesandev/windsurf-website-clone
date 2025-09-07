import React from "react";

const commonProps = {
  className: "h-7 sm:h-8 w-auto fill-current text-white/70",
};

const CiscoLogo = () => (
  <svg {...commonProps} viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="22" fontFamily="sans-serif" fontSize="24" fontWeight="bold">cisco</text>
  </svg>
);

const MercadoLibreLogo = () => (
  <svg {...commonProps} viewBox="0 0 180 30" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="22" fontFamily="sans-serif" fontSize="22" fontWeight="bold">mercado libre</text>
  </svg>
);

const HarnessLogo = () => (
  <svg {...commonProps} viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="22" fontFamily="sans-serif" fontSize="24" fontWeight="bold">harness</text>
  </svg>
);

const VmwareLogo = () => (
  <svg {...commonProps} viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="22" fontFamily="sans-serif" fontSize="24" fontWeight="bold">vmware</text>
  </svg>
);

const DellLogo = () => (
  <svg {...commonProps} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="2" fill="none" />
    <text x="3" y="27" fontFamily="sans-serif" fontSize="20" fontWeight="bold">DELL</text>
  </svg>
);

const WwtLogo = () => (
  <svg {...commonProps} viewBox="0 0 140 40" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="15" fontFamily="sans-serif" fontSize="14" fontWeight="bold">WORLD WIDE</text>
    <text x="0" y="35" fontFamily="sans-serif" fontSize="14" fontWeight="bold">TECHNOLOGY</text>
  </svg>
);

const GroupeMutuelLogo = () => (
  <svg {...commonProps} viewBox="0 0 180 30" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="22" fontFamily="sans-serif" fontSize="22" fontWeight="bold">groupe mutuel</text>
  </svg>
);

const BroadcomLogo = () => (
  <svg {...commonProps} viewBox="0 0 160 30" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 15 a 15 15 0 0 1 30 0 H 0" fill="currentColor" />
    <text x="35" y="22" fontFamily="sans-serif" fontSize="20" fontWeight="bold">Broadcom</text>
  </svg>
);

const logos = [
  { name: "Cisco", Component: CiscoLogo },
  { name: "Mercado Libre", Component: MercadoLibreLogo },
  { name: "Harness", Component: HarnessLogo },
  { name: "VMware", Component: VmwareLogo },
  { name: "Dell", Component: DellLogo },
  { name: "World Wide Technology", Component: WwtLogo },
  { name: "Groupe Mutuel", Component: GroupeMutuelLogo },
  { name: "Broadcom", Component: BroadcomLogo },
];

const CompanyLogos = () => {
  return (
    <div className="bg-primary-navy py-10">
      <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex">
          <div className="flex flex-shrink-0 animate-[scroll_60s_linear_infinite] items-center gap-x-10 px-5 md:gap-x-16">
            {logos.map(({ name, Component }) => (
              <Component key={name} />
            ))}
          </div>
          <div
            className="flex flex-shrink-0 animate-[scroll_60s_linear_infinite] items-center gap-x-10 px-5 md:gap-x-16"
            aria-hidden="true"
          >
            {logos.map(({ name, Component }) => (
              <Component key={`${name}-duplicate`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;