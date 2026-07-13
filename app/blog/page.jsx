import Link from "next/link";
import Image from "next/image";
import { blog } from "../../lib/data";
import BlogCard from "../../components/BlogCard";

export const metadata = {
  title: "Travel Blog",
  description:
    "Travel tips, destination guides and holiday inspiration from The Get Set Go Holidays.",
};

export default function BlogPage() {
  const [featured, ...rest] = blog;

  return (
    <>
      <section className="relative flex h-[40vh] min-h-[300px] items-end overflow-hidden">
        <Image
          src="/uploads/2026/04/switzerland.jpg"
          alt="Travel Blog"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="container-page relative z-10 pb-10 text-white">
          <h1 className="text-4xl font-extrabold sm:text-5xl">Travel Blog</h1>
          <p className="mt-2 max-w-2xl text-white/90">
            Tips, guides and inspiration to help you plan your next unforgettable journey.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="card reveal group mb-12 grid overflow-hidden transition hover:-translate-y-1 hover:shadow-xl lg:grid-cols-2"
            >
              <div className="relative h-56 lg:h-full">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-7">
                <span className="mb-3 inline-block w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700 dark:bg-brand-500/15 dark:text-brand-300">
                  Featured • {featured.category}
                </span>
                <h2 className="text-2xl font-bold text-slate-900 group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400">
                  {featured.title}
                </h2>
                <p className="mt-3 text-slate-600 dark:text-slate-400">{featured.excerpt}</p>
                <div className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                  {new Date(featured.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })} • {featured.readTime}
                </div>
              </div>
            </Link>
          )}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
