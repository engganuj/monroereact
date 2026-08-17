export type ContactFieldName = "name" | "email" | "phone" | "message";

export interface ContactInfo {
  address: string | null;
  phone: string | null;
  email: string | null;
}

export interface ContactProps {
  heading: string;
  description: string | null;
  fields: ContactFieldName[];
  submitLabel: string;
  contactInfo: ContactInfo;
}

// fields is bounded to a fixed set of input kinds the form actually knows how to
// render — a freeform field-definition prop would let the model reference an input
// type with no corresponding UI.
const FIELD_LABELS: Record<ContactFieldName, string> = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  message: "Message",
};

export function Contact(props: ContactProps) {
  return (
    <section className="mx-auto grid max-w-4xl gap-10 px-8 py-16 md:grid-cols-2">
      <div>
        <h2 className="text-3xl font-bold text-stone-900">{props.heading}</h2>
        {props.description && <p className="mt-3 text-stone-600">{props.description}</p>}
        <div className="mt-6 space-y-1 text-sm text-stone-700">
          {props.contactInfo.address && <div>{props.contactInfo.address}</div>}
          {props.contactInfo.phone && <div>{props.contactInfo.phone}</div>}
          {props.contactInfo.email && <div>{props.contactInfo.email}</div>}
        </div>
      </div>
      <form className="space-y-4">
        {props.fields.map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium text-stone-700">{FIELD_LABELS[field]}</label>
            {field === "message" ? (
              <textarea className="mt-1 w-full rounded-md border border-stone-300 px-3 py-2" readOnly />
            ) : (
              <input className="mt-1 w-full rounded-md border border-stone-300 px-3 py-2" readOnly />
            )}
          </div>
        ))}
        <button type="button" className="rounded-md bg-stone-900 px-6 py-2 text-white">
          {props.submitLabel}
        </button>
      </form>
    </section>
  );
}
