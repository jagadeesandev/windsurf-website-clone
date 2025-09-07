import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

type BlogPost = {
  slug: string;
  image: string;
  category: string;
  title: string;
  description?: string;
  date: string;
  readTime: string;
};

const featuredPost: BlogPost = {
  slug: '/blog/windsurf-wave-12',
  image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a92090ae-d5e8-4c68-bb2d-c3f6fe2b5454-windsurf-com/assets/images/hero-windsurf-wave-12-1.jpg?',
  category: 'product',
  title: 'Windsurf Wave 12: Devin features in Windsurf',
  description: 'DeepWiki, Vibe and Replace, Dev Containers, and more!',
  date: 'Aug 14, 2025',
  readTime: '3 min read',
};

const otherPosts: BlogPost[] = [
  {
    slug: '/blog/windsurf-wave-11',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a92090ae-d5e8-4c68-bb2d-c3f6fe2b5454-windsurf-com/assets/icons/wave11-blog-card-thumbnail-2.jpg?',
    category: 'product',
    title: 'Wave 11: Just Keep Shipping',
    date: 'Jul 17, 2025',
    readTime: '4 min read',
  },
  {
    slug: '/blog/our-commitment-cognition-partnership',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a92090ae-d5e8-4c68-bb2d-c3f6fe2b5454-windsurf-com/assets/images/our-commitment-thumbnail-3.jpg?',
    category: 'company',
    title: 'Our Commitment to Windsurf',
    date: 'Jul 16, 2025',
    readTime: '3 min read',
  },
  {
    slug: '/blog/windsurfs-next-chapter',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a92090ae-d5e8-4c68-bb2d-c3f6fe2b5454-windsurf-com/assets/images/blog_card_thumbnail-5.jpg?',
    category: 'company',
    title: 'The Next Chapter',
    date: 'Jul 14, 2025',
    readTime: '3 min read',
  },
  {
    slug: '/blog/our-brand',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a92090ae-d5e8-4c68-bb2d-c3f6fe2b5454-windsurf-com/assets/images/blog_card_thumbnail-5.jpg?',
    category: 'company',
    title: 'Our Brand',
    date: 'Jun 20, 2025',
    readTime: '4 min read',
  },
];

const BlogInsights = () => {
  return (
    <section className="bg-background text-foreground">
      <div className="mx-auto w-full max-w-7xl px-5 py-20 lg:py-40">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
            Insights <br /> & Updates
          </h2>
          <a
            href="https://windsurf.com/blog"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-[hsl(var(--accent-cyan))] px-6 py-3 text-base font-medium text-primary-navy transition-colors hover:bg-[hsl(var(--accent-cyan)/0.9)] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            See all articles
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-4 md:grid-rows-2">
          <a
            href={featuredPost.slug}
            className="group col-span-1 flex flex-col overflow-hidden rounded-[16px] bg-card transition-transform duration-300 ease-in-out hover:scale-[1.01] md:col-span-2 md:row-span-2"
          >
            <div className="relative h-[250px] w-full">
              <Image
                src={featuredPost.image}
                alt={`Image for ${featuredPost.title}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 rounded-md bg-[hsl(var(--accent-yellow))] px-2 py-1 text-xs font-bold uppercase text-primary-navy">
                FEATURED
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <p className="text-sm font-medium uppercase text-primary">{featuredPost.category}</p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">{featuredPost.title}</h3>
                <p className="mt-2 text-base text-light-gray">{featuredPost.description}</p>
              </div>
              <div className="mt-4 flex items-center gap-3 text-sm text-light-gray">
                <span>{featuredPost.date}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
              </div>
            </div>
          </a>
          
          {otherPosts.map((post) => (
            <a
              key={post.slug}
              href={post.slug}
              className="group relative col-span-1 row-span-1 flex h-[300px] flex-col justify-end overflow-hidden rounded-[16px] p-6 transition-transform duration-300 ease-in-out hover:scale-[1.02]"
            >
              <Image
                src={post.image}
                alt={`Image for ${post.title}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 300px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="relative z-10 text-pure-white">
                <p className="text-sm font-medium uppercase text-primary">{post.category}</p>
                <h4 className="mt-1 text-lg font-semibold">{post.title}</h4>
                <div className="mt-2 flex items-center gap-2 text-sm text-light-gray/80">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogInsights;