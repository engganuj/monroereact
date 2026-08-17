import { TONE_STYLES, EMPHASIS_STYLES, type Tone, type Emphasis } from "../design/tokens";

export interface HeroProps {
  headline: string;
  subheadline: string;
  tone: Tone;
  ctaLabel: string;
  ctaEmphasis: Emphasis;
}

export function Hero(props: HeroProps) {
  const tone = TONE_STYLES[props.tone];
  return (
    <section className={`${tone.section} px-8 py-20 text-center`}>
      <h1 className={`text-4xl font-bold ${tone.heading}`}>{props.headline}</h1>
      <p className={`mt-4 text-lg ${tone.body}`}>{props.subheadline}</p>
      <button className={`mt-8 rounded-md ${tone.button} ${EMPHASIS_STYLES[props.ctaEmphasis]}`}>
        {props.ctaLabel}
      </button>
    </section>
  );
}
