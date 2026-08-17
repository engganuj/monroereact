export type AboutLayout = "text-only" | "image-left" | "image-right";

export interface AboutStoryProps {
  heading: string;
  body: string;
  layout: AboutLayout;
  imageUrl: string | null;
}

// layout collapses what would otherwise be an independent imagePosition + imageUrl
// pair into one token — "image-left" with no imageUrl becomes structurally
// unselectable instead of just unlikely.
export function AboutStory(props: AboutStoryProps) {
  const showImage = props.layout !== "text-only" && props.imageUrl;
  const imageFirst = props.layout === "image-left";

  const text = (
    <div>
      <h2 className="text-3xl font-bold text-stone-900">{props.heading}</h2>
      <p className="mt-4 text-stone-700">{props.body}</p>
    </div>
  );
  const image = showImage ? (
    <img src={props.imageUrl!} alt={props.heading} className="w-full rounded-lg object-cover" />
  ) : null;

  return (
    <section className="px-8 py-16">
      <div className={`mx-auto grid max-w-4xl gap-8 ${showImage ? "md:grid-cols-2" : ""} items-center`}>
        {showImage && imageFirst ? (
          <>
            {image}
            {text}
          </>
        ) : (
          <>
            {text}
            {image}
          </>
        )}
      </div>
    </section>
  );
}
