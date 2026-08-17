export type FooterDensity = "spacious" | "compact" | "minimal";

export interface FooterColumn {
  title: string;
  links: string[];
}

export interface FooterProps {
  columns: FooterColumn[];
  density: FooterDensity;
}

// density bundles padding, social-link visibility, and per-column link count into one
// token — "minimal" would otherwise only tighten spacing while leaving full link lists
// and social icons in place, which is dense content in a spacing-only shell.
const DENSITY_STYLES: Record<
  FooterDensity,
  { padding: string; showSocialLinks: boolean; maxLinksPerColumn: number }
> = {
  spacious: { padding: "py-14", showSocialLinks: true, maxLinksPerColumn: Infinity },
  compact: { padding: "py-6", showSocialLinks: true, maxLinksPerColumn: Infinity },
  minimal: { padding: "py-4", showSocialLinks: false, maxLinksPerColumn: 1 },
};

export function Footer(props: FooterProps) {
  const density = DENSITY_STYLES[props.density];

  return (
    <footer className={`bg-stone-900 text-stone-300 ${density.padding} px-8`}>
      <div className="grid gap-8 md:grid-cols-3">
        {props.columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-semibold text-white">{col.title}</h4>
            <ul className="mt-3 space-y-1 text-sm">
              {col.links.slice(0, density.maxLinksPerColumn).map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {density.showSocialLinks && (
        <div className="mt-8 text-sm text-stone-400">Twitter · Instagram · Facebook</div>
      )}
    </footer>
  );
}
