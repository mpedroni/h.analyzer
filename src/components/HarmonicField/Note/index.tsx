import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

type ColorScheme =
  | "primary"
  | "secondary"
  | "tertiary"
  | "gray-700"
  | "default";

interface NoteProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  note: string;
  color?: ColorScheme | "";
  active?: boolean;
  small?: boolean;
  flat?: boolean;
  text?: "body" | "heading";
}

function getNoteColorScheme(colorScheme: ColorScheme | "") {
  if (colorScheme === "") return "";

  const colorSchemeClasses: Record<ColorScheme, string> = {
    primary: styles.primary,
    secondary: styles.secondary,
    tertiary: styles.tertiary,
    "gray-700": styles["gray-700"],
    default: "",
  };

  return colorSchemeClasses[colorScheme];
}

export function Note({
  note,

  color = "default",
  small = false,
  flat = false,
  text = "heading",
}: NoteProps) {
  const className = classNames(styles.note, getNoteColorScheme(color), {
    [styles.small]: small,
    [styles.flat]: flat,
    [styles.body]: text === "body",
  });

  return <button className={className}>{note}</button>;
}
