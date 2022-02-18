import { FiArrowDown } from "react-icons/fi";
import { MAJOR_HARMONIC_FIELDS } from "../../utils/harmonicFields";

import { SCALE_DEGREES } from "../../utils/scales";

import { Note } from "../Note";

import styles from "./styles.module.scss";

interface HarmonicFieldProps {
  activeKey: string;
}

export function HarmonicField({ activeKey }: HarmonicFieldProps) {
  if (!MAJOR_HARMONIC_FIELDS[activeKey])
    return <span>Campo harmônico não encontrado</span>;

  return (
    <section className={styles.container}>
      <div className={styles.degrees}>
        {SCALE_DEGREES.map((degree) => (
          <Note key={degree} note={degree} small flat text="body" />
        ))}
      </div>

      {MAJOR_HARMONIC_FIELDS[activeKey].map((chord) => (
        <div key={chord.code + "_chord"} className={styles.chord}>
          <Note
            note={chord.code}
            color={chord.code === activeKey ? "secondary" : "tertiary"}
          />

          <FiArrowDown />

          <div className={styles.notes}>
            {chord.notes.map((note: string) => (
              <Note key={note + "_note"} note={note} small color="gray-700" />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
