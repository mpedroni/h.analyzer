import { useState } from "react";

import styles from "./styles.module.scss";

import { ButtonGroup, type Button } from "../ButtonGroup";

const enharmonicsButtons: Button[] = [
  { label: "b", value: "flat" },
  { label: "natural", value: "natural", flex: 2 },
  { label: "#", value: "sharp" },
];

const chordSchemeButtons: Button[] = [
  { label: "tríades", value: "triads" },
  { label: "tétrades", value: "tetrads" },
];

const chordTypes: Button[] = [
  { label: "maior", value: "major" },
  { label: "menor", value: "minor" },
];

export function Controls() {
  const [enharmonic, setEnharmonic] = useState("natural");
  const [chordScheme, setChordScheme] = useState("triads");
  const [chordType, setChordType] = useState("major");

  return (
    <section className={styles.container}>
      <ButtonGroup
        buttons={enharmonicsButtons}
        activeButton={enharmonic}
        onClickButton={(enharmonicValue) => setEnharmonic(enharmonicValue)}
      />

      <ButtonGroup
        buttons={chordSchemeButtons}
        activeButton={chordScheme}
        onClickButton={(chordSchemaValue) => setChordScheme(chordSchemaValue)}
      />

      <ButtonGroup
        buttons={chordTypes}
        activeButton={chordType}
        onClickButton={(chordTypeValue) => setChordType(chordTypeValue)}
      />
    </section>
  );
}
