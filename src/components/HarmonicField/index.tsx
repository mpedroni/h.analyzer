import { MAJOR_HARMONIC_FIELDS } from "../../utils/harmonicFields";

import { SCALE_DEGREES } from "../../utils/scales";

import { Note } from "../Note";
import { Chord } from "./Chord";

import styles from "./styles.module.scss";

interface HarmonicFieldProps {
  scaleCode: string;
}

export function HarmonicField({ scaleCode }: HarmonicFieldProps) {
  if (!MAJOR_HARMONIC_FIELDS[scaleCode])
    return <span>Campo harmônico não encontrado</span>;

  return (
    <section className={styles.container}>
      <div className={styles.degrees}>
        {SCALE_DEGREES.map((degree) => (
          <Note key={degree} note={degree} small flat text="body" />
        ))}
      </div>

      {MAJOR_HARMONIC_FIELDS[scaleCode].map((chord) => (
        <Chord chord={chord} key={chord.code + "_chord"} />
      ))}
    </section>
  );
}
