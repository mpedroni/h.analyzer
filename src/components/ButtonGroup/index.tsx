import styles from "./styles.module.scss";

export type Button = {
  label: string;
  value: string;
  flex?: number;
};

interface ButtonGroupProps {
  buttons: Button[];
  activeButton: string;
  onClickButton: (clickedButtonValue: string) => void;
}

export function ButtonGroup({
  activeButton,
  onClickButton,
  buttons,
}: ButtonGroupProps) {
  return (
    <nav className={styles.container}>
      {buttons.map((button) => (
        <button
          key={button.value}
          onClick={() => onClickButton(button.value)}
          className={`${activeButton === button.value ? styles.active : ""}`}
          style={{
            flex: button.flex ?? 1,
          }}
        >
          {button.label}
        </button>
      ))}
    </nav>
  );
}
