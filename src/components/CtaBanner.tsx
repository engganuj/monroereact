import { TONE_STYLES, EMPHASIS_STYLES, type Tone, type Emphasis } from "../design/tokens";

export interface CtaBannerProps {
  headline: string;
  subheadline: string | null;
  ctaLabel: string;
  ctaHref: string;
  tone: Tone;
  ctaEmphasis: Emphasis;
}

export function CtaBanner(props: CtaBannerProps) {
  const tone = TONE_STYLES[props.tone];
  return (
    <section className={`${tone.section} px-8 py-16 text-center`}>
      <h2 className={`text-3xl font-bold ${tone.heading}`}>{props.headline}</h2>
      {props.subheadline && <p className={`mt-3 text-lg ${tone.body}`}>{props.subheadline}</p>}
      <a
        href={props.ctaHref}
        className={`mt-8 inline-block rounded-md ${tone.button} ${EMPHASIS_STYLES[props.ctaEmphasis]}`}
      >
        {props.ctaLabel}
      </a>
    </section>
  );
}
