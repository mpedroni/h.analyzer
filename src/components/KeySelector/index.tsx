import { naturalKeys } from "../../utils/keys";
import { Note } from "../Note";

import styles from "./styles.module.scss";

interface KeySelectorProps {
  activeKey: string;
  onSelectKey: (selectedKeyCode: string) => void;
}

export function KeySelector({ activeKey, onSelectKey }: KeySelectorProps) {
  return (
    <nav className={styles.container}>
      {naturalKeys.map((key) => (
        <Note
          key={key.code}
          note={key.code}
          onClick={() => onSelectKey(key.code)}
          clickable
          color={key.code === activeKey ? "primary" : ""}
        />
      ))}
    </nav>
  );
}
