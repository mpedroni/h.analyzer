import { FiArrowDown } from "react-icons/fi";

import { Chord } from "../../../utils/chords";
import { Note } from "../../Note";

import styles from "./styles.module.scss";

interface ChordProps {
  chord: Chord;
}

export function Chord({ chord }: ChordProps) {
  return (
    <div key={chord.code + "_chord"} className={styles.chord}>
      <Note data-testid="chord" note={chord.code} flat />

      <FiArrowDown />

      <div className={styles.notes} data-testid="chord_notes_container">
        {chord.notes.map((note: string) => (
          <Note
            data-testid="chord_note"
            key={note + "_note"}
            note={note}
            small
            color="gray-700"
          />
        ))}
      </div>
    </div>
  );
}
