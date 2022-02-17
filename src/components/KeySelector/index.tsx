import { naturalKeys } from "../../utils/keys";

import styles from "./styles.module.scss";

interface KeySelectorProps {
  activeKey: string;
  onSelectKey: (selectedKeyCode: string) => void;
}

export function KeySelector({ activeKey, onSelectKey }: KeySelectorProps) {
  return (
    <nav className={styles.container}>
      {naturalKeys.map((key) => (
        <button
          key={key.code}
          className={key.code === activeKey ? styles.active : ""}
          onClick={() => onSelectKey(key.code)}
        >
          {key.code}
        </button>
      ))}
    </nav>
  );
}
