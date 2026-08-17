import { ICONS, type IconName } from "../design/icons";
import { gridColsClass } from "../design/layout";

export interface FeatureItem {
  icon: IconName;
  title: string;
  description: string;
}

export interface FeatureGridProps {
  heading: string;
  items: FeatureItem[];
}

export function FeatureGrid(props: FeatureGridProps) {
  return (
    <section className="px-8 py-16">
      <h2 className="text-center text-3xl font-bold text-stone-900">{props.heading}</h2>
      <div className={`mt-10 grid gap-8 ${gridColsClass(props.items.length)}`}>
        {props.items.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <div key={item.title} className="text-center">
              <Icon className="mx-auto h-8 w-8 text-stone-900" />
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-stone-600">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
