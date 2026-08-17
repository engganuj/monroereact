import { gridColsClass } from "../design/layout";

export interface GalleryImage {
  url: string;
  altText: string;
}

export interface GalleryProps {
  heading: string | null;
  images: GalleryImage[];
}

export function Gallery(props: GalleryProps) {
  return (
    <section className="px-8 py-16">
      {props.heading && (
        <h2 className="mb-10 text-center text-3xl font-bold text-stone-900">{props.heading}</h2>
      )}
      <div className={`grid gap-4 ${gridColsClass(props.images.length)}`}>
        {props.images.map((image) => (
          <img
            key={image.url}
            src={image.url}
            alt={image.altText}
            className="aspect-square w-full rounded-lg object-cover"
          />
        ))}
      </div>
    </section>
  );
}
