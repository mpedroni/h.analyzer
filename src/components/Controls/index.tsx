import { useState } from "react";

import styles from "./styles.module.scss";

import { ButtonGroup, type Button } from "../ButtonGroup";

const enharmonics: Button[] = [
  { label: "b", value: "bemol" },
  { label: "natural", value: "natural", flex: 2 },
  { label: "#", value: "sharp" },
];

export function Controls() {
  const [activeButton, setActiveButton] = useState("natural");

  function handleActiveButton(clickedButtonValue: string) {
    setActiveButton(clickedButtonValue);
  }

  return (
    <section className={styles.container}>
      <ButtonGroup
        buttons={enharmonics}
        activeButton={activeButton}
        onClickButton={handleActiveButton}
      />
    </section>
  );
}
