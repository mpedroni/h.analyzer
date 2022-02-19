import { FiArrowDown } from "react-icons/fi";

import { Chord } from "../../../utils/chords";
import { Note } from "../../Note";

import styles from "./styles.module.scss";

interface ChordProps {
  chord: Chord;
  active?: boolean;
}

export function Chord({ chord, active = false }: ChordProps) {
  return (
    <div key={chord.code + "_chord"} className={styles.chord}>
      <Note note={chord.code} color={active ? "secondary" : "tertiary"} />

      <FiArrowDown />

      <div className={styles.notes}>
        {chord.notes.map((note: string) => (
          <Note key={note + "_note"} note={note} small color="gray-700" />
        ))}
      </div>
    </div>
  );
}
