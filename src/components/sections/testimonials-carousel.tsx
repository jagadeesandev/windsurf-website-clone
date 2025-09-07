import Image from 'next/image';

const testimonials = [
  {
    name: 'Avi Schiffmann',
    handle: '@AviSchiffmann',
    quote: 'Windsurf is so much better than Cursor. It just makes the steps easier, like creating new folders within the flow. I like how I just type my prompt, go away for a bit, come back and theres a web preview waiting.',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a92090ae-d5e8-4c68-bb2d-c3f6fe2b5454-windsurf-com/assets/icons/avi_schiffmann-2.jpg?',
  },
  {
    name: 'Andrew Brown',
    handle: '@andrewbrown',
    quote: 'I think @windsurf_ai will win the AI Coding Assistant wars. What leads me to believe this is beyond the product itself and how the team executes.',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a92090ae-d5e8-4c68-bb2d-c3f6fe2b5454-windsurf-com/assets/icons/andrew_brown-3.jpg?',
  },
  {
    name: 'Alex Finn',
    handle: '@AlexFinnX',
    quote: 'Unreal. I just built an app with 1 prompt.',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a92090ae-d5e8-4c68-bb2d-c3f6fe2b5454-windsurf-com/assets/icons/alex_finn-4.jpg?',
  },
  {
    name: 'The Jack Forge',
    handle: '@TheJackForge',
    quote: "I've been exclusively using Windsurf for the past 3 weeks. They are not paying me to say this. It's really good. Really really good.",
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a92090ae-d5e8-4c68-bb2d-c3f6fe2b5454-windsurf-com/assets/icons/jack_forge-5.jpg?',
  },
  {
    name: 'Alvaro Cintas',
    handle: '@dr_cintas',
    quote: 'Windsurf is one of the best AI coding tools I’ve ever used.',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a92090ae-d5e8-4c68-bb2d-c3f6fe2b5454-windsurf-com/assets/icons/alvaro_cintas-6.jpg?',
  },
  {
    name: 'Luca',
    handle: '@Knackfish',
    quote: 'Windsurf is simply better from my experience over the last month.',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a92090ae-d5e8-4c68-bb2d-c3f6fe2b5454-windsurf-com/assets/icons/luca-7.jpg?',
  },
  {
    name: 'Jon Myers',
    handle: '@jonmyers',
    quote: 'Windsurf UX beats Cursor for novices like me. Just click "preview" - it sets up a server and keeps it *active*. Same goes for MCPs and extensions. Click a button in Windsurf, done.',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a92090ae-d5e8-4c68-bb2d-c3f6fe2b5454-windsurf-com/assets/icons/jon_myers-8.jpg?',
  },
  {
    name: 'The Bodega Man',
    handle: '@TheBodegaMan1',
    quote: 'The reason I chose Windsurf is because you guys are on a constant mission of streamlining, improving and generally making the experience better for your users. The recent pricing rework with the clear and fair token usage plans are what convinced me to convert. It makes me feel like you care about users and builders.',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a92090ae-d5e8-4c68-bb2d-c3f6fe2b5454-windsurf-com/assets/icons/bodega_man-9.jpg?',
  },
  {
    name: 'elvis',
    handle: '@omarsar0',
    quote: 'Windsurf makes coding insanely fun and fast!',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a92090ae-d5e8-4c68-bb2d-c3f6fe2b5454-windsurf-com/assets/icons/elvis-10.jpg?',
  },
  {
    name: 'Catalin',
    handle: '@catalinmpit',
    quote: 'One of the many cool features of the Windsurf IDE is the "Problems" tab that lists all the issues in your project.',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a92090ae-d5e8-4c68-bb2d-c3f6fe2b5454-windsurf-com/assets/svgs/catalin-11.jpg?',
  },
  {
    name: 'Tom Blomfield',
    handle: '@t_blom',
    quote: "I've been building a new thing with Windsurf and I spent the last hour in almost hysterical laughter because the responses are just so good.",
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a92090ae-d5e8-4c68-bb2d-c3f6fe2b5454-windsurf-com/assets/icons/tom_blomfield-12.jpg?',
  },
  {
    name: 'Tom Dörr',
    handle: '@tom_doerr',
    quote: 'It feels incredible to open a project with Windsurf for the first time, and it runs pytest, pylint, and radon in parallel, identifying all immediate issues within one second.',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a92090ae-d5e8-4c68-bb2d-c3f6fe2b5454-windsurf-com/assets/icons/tom_dorr-13.jpg?',
  },
  {
    name: 'Alexander Wilczek',
    handle: '@SecWillCheck',
    quote: 'I am currently trialing Windsurf and I really have to say the UI feels way more intuitive than Cursor.',
    avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a92090ae-d5e8-4c68-bb2d-c3f6fe2b5454-windsurf-com/assets/icons/alexander_wilczek-14.jpg?',
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <li className="flex-shrink-0 w-80 md:w-96 rounded-2xl bg-[--color-secondary-navy] p-6 shadow-lg">
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-4">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={48}
          height={48}
          className="rounded-full h-12 w-12 object-cover"
        />
        <div>
          <p className="font-semibold text-[--color-pure-white]">{testimonial.name}</p>
          <p className="text-sm text-[--color-light-gray]/80">{testimonial.handle}</p>
        </div>
      </div>
      <p className="mt-4 text-base text-[--color-light-gray]">{testimonial.quote}</p>
    </div>
  </li>
);


const TestimonialsCarousel = () => {
  return (
    <section className="bg-[--color-primary-navy] py-20 sm:py-24 text-[--color-pure-white] overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 bg-[--color-accent-cyan]"></div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[--color-accent-cyan]">
            Testimonials
          </p>
        </div>
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[--color-pure-white] sm:text-5xl">
          Trusted by the community
        </h2>
      </div>

      <div className="relative mt-16 w-full max-w-[100vw] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]">
        <div className="flex animate-scroll-wrapper">
          <ul className="flex min-w-full animate-scroll-left flex-shrink-0 items-start gap-8 py-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </ul>
          <ul className="flex min-w-full animate-scroll-left flex-shrink-0 items-start gap-8 py-4" aria-hidden="true">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </ul>
        </div>
      </div>
      
      <style>
        {`
          .animate-scroll-wrapper {
            display: flex;
          }
          .animate-scroll-left {
            animation: scroll-left 60s linear infinite;
          }
          @keyframes scroll-left {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </section>
  );
};

export default TestimonialsCarousel;