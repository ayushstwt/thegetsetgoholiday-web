import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blog, getPost } from "../../../lib/data";
import BlogCard from "../../../components/BlogCard";

export function generateStaticParams() {
  return blog.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function BlogDetail({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const related = blog.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="relative flex h-[50vh] min-h-[360px] items-end overflow-hidden">
        <Image src={post.image} alt={post.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 to-slate-900/25" />
        <div className="container-page relative z-10 pb-10 text-white">
          <Link href="/blog" className="text-sm font-semibold text-white/80 hover:text-white">
            ← Back to Blog
          </Link>
          <span className="mt-3 block w-fit rounded-full bg-white/90 px-3 py-1 text-xs font-semibold capitalize text-brand-700">
            {post.category}
          </span>
          <h1 className="mt-3 max-w-4xl text-3xl font-extrabold sm:text-5xl">{post.title}</h1>
          <div className="mt-3 text-sm text-white/85">
            {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })} • {post.readTime}
          </div>
        </div>
      </section>

      <article className="py-14">
        <div className="container-page max-w-3xl">
          <p className="text-lg font-medium leading-relaxed text-slate-700 dark:text-slate-200">
            {post.excerpt}
          </p>
          <div className="mt-6 space-y-5 text-slate-600 dark:text-slate-300">
            {post.content.map((para, i) => (
              <p key={i} className="leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-brand-50 p-6 text-center shadow-md ring-1 ring-brand-100 dark:bg-slate-800 dark:ring-slate-700">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Ready to plan your trip?
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Our travel experts will craft a personalised itinerary just for you.
            </p>
            <Link href="/contact" className="btn-primary mt-5">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-slate-50 py-14 dark:bg-slate-800">
          <div className="container-page">
            <h2 className="section-title mb-8">More from the Blog</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
