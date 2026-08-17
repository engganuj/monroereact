import { TONE_STYLES, type Tone } from "../design/tokens";

export interface AnnouncementBarProps {
  message: string;
  linkLabel: string;
  linkHref: string;
  dismissible: boolean;
  tone: Tone;
}

export function AnnouncementBar(props: AnnouncementBarProps) {
  const tone = TONE_STYLES[props.tone];
  return (
    <div className={`${tone.section} flex items-center justify-center gap-3 px-4 py-2 text-sm`}>
      <span className={tone.body}>{props.message}</span>
      <a href={props.linkHref} className={`font-semibold underline ${tone.heading}`}>
        {props.linkLabel}
      </a>
      {props.dismissible && <span className={`ml-2 cursor-pointer ${tone.body}`}>✕</span>}
    </div>
  );
}
