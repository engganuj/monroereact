export interface Logo {
  name: string;
  imageUrl: string;
}

export interface LogoCloudProps {
  heading: string | null;
  logos: Logo[];
}

export function LogoCloud(props: LogoCloudProps) {
  return (
    <section className="px-8 py-12">
      {props.heading && (
        <h2 className="mb-8 text-center text-sm font-semibold uppercase tracking-wide text-stone-500">
          {props.heading}
        </h2>
      )}
      <div className="flex flex-wrap items-center justify-center gap-10 opacity-70">
        {props.logos.map((logo) => (
          <img key={logo.name} src={logo.imageUrl} alt={logo.name} className="h-8 object-contain" />
        ))}
      </div>
    </section>
  );
}
