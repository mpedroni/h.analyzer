import { FiArrowDown } from "react-icons/fi";

import { Note } from "../Note";

import styles from "./styles.module.scss";

const C = { code: "C", notes: ["E", "G"] };
const Dm = { code: "Dm", notes: ["F", "A"] };
const Em = { code: "Em", notes: ["G", "B"] };
const F = { code: "F", notes: ["A", "C"] };
const G = { code: "G", notes: ["B", "D"] };
const Am = { code: "Am", notes: ["C", "E"] };
const B = { code: "Bø", notes: ["D", "F"] };

const MAJOR_HARMONIC_FIELD = {
  C: [C, Dm, Em, F, G, Am, B],
};

const KEY_DEGREES = ["I", "II", "III", "IV", "V", "VI", "VII"];

interface HarmonicFieldProps {
  activeKey: string;
}

export function HarmonicField({ activeKey }: HarmonicFieldProps) {
  return (
    <section className={styles.container}>
      <div className={styles.degrees}>
        {KEY_DEGREES.map((degree) => (
          <Note key={degree} note={degree} small flat text="body" />
        ))}
      </div>

      {MAJOR_HARMONIC_FIELD.C.map((chord) => (
        <div key={chord.code + "_chord"} className={styles.chord}>
          <Note
            note={chord.code}
            color={chord.code === activeKey ? "secondary" : "tertiary"}
          />

          <FiArrowDown />

          <div className={styles.notes}>
            {chord.notes.map((note) => (
              <Note key={note + "_note"} note={note} small color="gray-700" />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
