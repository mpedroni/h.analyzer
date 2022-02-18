import { NATURAL_SCALES } from "../../utils/scales";
import { Note } from "../Note";

import styles from "./styles.module.scss";

interface ScaleSelectorProps {
  activeScale: string;
  onSelectScale: (selectedKeyCode: string) => void;
}

export function ScaleSelector({
  activeScale,
  onSelectScale,
}: ScaleSelectorProps) {
  return (
    <nav className={styles.container}>
      {NATURAL_SCALES.map((key) => (
        <Note
          key={key.code}
          note={key.code}
          onClick={() => onSelectScale(key.code)}
          clickable
          color={key.code === activeScale ? "primary" : ""}
        />
      ))}
    </nav>
  );
}
