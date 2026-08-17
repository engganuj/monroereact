export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqProps {
  heading: string | null;
  items: FaqItem[];
}

export function Faq(props: FaqProps) {
  return (
    <section className="mx-auto max-w-3xl px-8 py-16">
      {props.heading && <h2 className="mb-8 text-3xl font-bold text-stone-900">{props.heading}</h2>}
      <div className="space-y-6">
        {props.items.map((item) => (
          <div key={item.question}>
            <h3 className="font-semibold text-stone-900">{item.question}</h3>
            <p className="mt-1 text-sm text-stone-600">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
