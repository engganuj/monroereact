import { gridColsClass } from "../design/layout";

export interface BlogPost {
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
}

export interface BlogPreviewProps {
  heading: string | null;
  posts: BlogPost[];
}

// No link/href field — there's no CMS backing these posts in this POC, so a link would
// point nowhere. Presentational cards only.
export function BlogPreview(props: BlogPreviewProps) {
  return (
    <section className="px-8 py-16">
      {props.heading && (
        <h2 className="mb-10 text-center text-3xl font-bold text-stone-900">{props.heading}</h2>
      )}
      <div className={`grid gap-8 ${gridColsClass(props.posts.length)}`}>
        {props.posts.map((post) => (
          <article key={post.title}>
            <img src={post.imageUrl} alt={post.title} className="aspect-video w-full rounded-lg object-cover" />
            <div className="mt-3 text-xs text-stone-500">{post.date}</div>
            <h3 className="mt-1 text-lg font-semibold">{post.title}</h3>
            <p className="mt-1 text-sm text-stone-600">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
