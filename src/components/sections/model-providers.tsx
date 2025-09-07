import React from 'react';

const AnthropicLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 52 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Anthropic logo"
  >
    <path
      d="M33.4739 0.817383L0.999756 47.8174H12.9998L40.5239 8.56738L33.4739 0.817383Z"
      fill="currentColor"
    />
    <path
      d="M51.1042 47.8174L40.5242 8.56738L33.4742 0.817383L42.1542 0.117383L51.9942 27.6174L51.1042 47.8174Z"
      fill="currentColor"
    />
  </svg>
);

const XAILogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 38 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="xAI logo"
  >
    <path
      d="M23.0332 0.817383L11.5332 21.6174L0.0332031 0.817383H10.1332L17.2832 13.0674L24.4332 0.817383H23.0332Z"
      fill="currentColor"
    />
    <path
      d="M17.2832 35.0174L10.1332 47.8174H0.0332031L11.5332 26.4174L17.2832 35.0174Z"
      fill="currentColor"
    />
    <path d="M26.9668 0.817383H37.0668V47.8174H26.9668V0.817383Z" fill="currentColor" />
  </svg>
);

const OpenAILogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 49 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="OpenAI logo"
  >
    <path d="M24.4141 31.0288C21.4141 31.0288 18.8081 30.2728 16.8901 28.7608C14.9721 27.2488 13.7581 25.3348 13.7581 23.0188V22.7388C13.7581 20.3128 15.0061 18.2848 17.5501 16.6528C20.0941 15.0208 22.7341 14.1808 25.4701 14.1808C28.2541 14.1808 30.7201 15.0208 32.8681 16.6888C34.8601 18.2368 36.1321 20.1448 36.1321 22.4128C36.1321 23.4928 35.8741 24.5008 35.3581 25.4368L29.4181 15.7408C28.6621 14.6368 27.6061 14.0848 26.2501 14.0848C24.7261 14.0848 23.4901 14.6488 22.5421 15.7768C21.5941 16.9048 21.1201 18.2728 21.1201 19.8808C21.1201 21.4888 21.5941 22.8568 22.5421 23.9848C23.4901 25.1128 24.7261 25.6768 26.2501 25.6768C27.2221 25.6768 28.0501 25.4428 28.7341 24.9748L34.4221 34.7968C32.0941 36.5128 29.6101 37.3768 26.9701 37.3768C24.0601 37.3768 21.4621 36.5788 19.3441 35.0008C17.2261 33.4228 15.6541 31.4368 14.6281 28.9888H14.3881C12.4681 31.2928 9.99609 32.9968 7.04409 34.0888L6.34809 32.5168C10.7401 30.8848 13.4521 28.1908 14.4841 24.4288H5.43009V21.4888L11.4901 13.5568C12.6661 10.5148 14.8261 8.07281 18.0061 6.23681L19.2901 7.50881C15.7501 9.61481 13.4701 12.3508 12.6301 15.7168H20.6101V18.2608C21.3661 17.0248 22.3981 16.0528 23.7061 15.3448C25.0141 14.6368 26.4421 14.2828 27.9901 14.2828C30.3661 14.2828 32.4061 14.9968 34.1021 16.4128C35.7981 17.8288 36.8781 19.6648 37.2061 22.0168H37.9981C40.0021 19.7488 42.4501 18.0688 45.4261 16.9768L46.1221 18.5488C41.7301 20.1808 39.0301 22.8448 37.9261 26.5408H46.9981V29.5408L41.0581 37.5328C39.8821 40.5748 37.7221 43.0048 34.5421 44.8288L33.2581 43.5568C36.7981 41.4508 39.1261 38.7148 39.9661 35.2648H31.9981V32.7148C31.2421 33.9508 30.2101 34.9228 28.8901 35.6308C27.5701 36.3388 26.1181 36.6928 24.5341 36.6928C22.1101 36.6928 20.0461 36.0028 18.3301 34.6228C16.7701 33.3028 15.7981 31.6228 15.4741 29.5828C15.6181 31.6948 16.4341 33.4528 17.9221 34.8568C19.4101 36.2608 21.3181 36.9688 23.6461 36.9688C25.5661 36.9688 27.3061 36.3808 28.8661 35.2048L29.0621 35.3548C28.2541 35.9608 27.3301 36.3988 26.2981 36.6688C25.2661 36.9388 24.1861 37.0768 23.0581 37.0768C20.7061 37.0768 18.6661 36.3688 16.9381 34.9528C15.2101 33.5368 14.1661 31.6948 13.8421 29.4268L13.6981 29.5588C14.2501 31.6708 15.4861 33.4408 17.4061 34.8688C19.3261 36.2968 21.6181 37.0108 24.4341 37.0108C26.7181 37.0108 28.8301 36.3448 30.7741 35.0128L24.4141 31.0288Z" />
  </svg>
);

const WLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 71 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="W logo"
  >
    <path
      d="M0.999756 0.817383L12.9998 47.8174H24.9998L18.9998 24.3174L28.9998 47.8174H40.9998L30.9998 14.8174L42.9998 47.8174H54.9998L49.9998 24.3174L60.9998 47.8174H70.9998L58.9998 0.817383H46.9998L40.9998 24.3174L31.9998 0.817383H19.9998L25.9998 24.3174L14.9998 0.817383H0.999756Z"
      fill="currentColor"
    />
  </svg>
);

const PerplexityLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 49 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Perplexity AI logo"
  >
    <path
      d="M24.5 0.817383L31.366 17.1344L48.1317 24.0001L31.366 30.8657L24.5 47.1827L17.634 30.8657L0.868286 24.0001L17.634 17.1344L24.5 0.817383Z"
      fill="currentColor"
    />
  </svg>
);

const OrcaLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 57 48"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Orca logo"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M50.7011 28.5C55.7011 22.5 56.2011 14.5 51.2011 9.5C46.2011 4.5 37.7011 5 31.7011 10C29.7011 7 24.7011 4.5 19.2011 4.5C-0.798852 4.5 -1.29885 33.5 13.7011 43.5C22.7011 49.5 39.2011 49.5 48.7011 41.5C49.7011 38 50.7011 33.5 50.7011 28.5ZM20.7011 28.5C18.5011 28.5 16.2011 26.5 16.2011 24C16.2011 21.5 18.5011 19.5 20.7011 19.5C22.9011 19.5 25.2011 21.5 25.2011 24C25.2011 26.5 22.9011 28.5 20.7011 28.5Z"
    />
  </svg>
);


const logos = [
  { name: 'Anthropic', component: AnthropicLogo },
  { name: 'xAI', component: XAILogo },
  { name: 'OpenAI', component: OpenAILogo },
  { name: 'W', component: WLogo },
  { name: 'Perplexity', component: PerplexityLogo },
  { name: 'Orca', component: OrcaLogo },
];

const ModelProviders = () => {
  return (
    <section className="bg-white py-12 md:py-20 text-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-neutral-800 mb-12">
          First-class support for every major model provider
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16 lg:gap-x-20">
          {logos.map(({ name, component: LogoComponent }) => (
            <LogoComponent key={name} className="h-10 lg:h-12 w-auto" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelProviders;