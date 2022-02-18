import { useState } from "react";

import styles from "./styles.module.scss";

import { ButtonGroup, type Button } from "../ButtonGroup";
import { KeySelector } from "../KeySelector";

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

interface ControlsProps {
  enharmonic: string;
  chordScheme: string;
  chordType: string;
  activeKey: string;
  onSetEnharmonic: (enharmonic: string) => void;
  onSetChordScheme: (chordScheme: string) => void;
  onSetChordType: (chordType: string) => void;
  onSetActiveKey: (activeKey: string) => void;
}

export function Controls({
  enharmonic,
  chordScheme,
  chordType,
  activeKey,
  onSetActiveKey,
  onSetChordScheme,
  onSetChordType,
  onSetEnharmonic,
}: ControlsProps) {
  return (
    <section className={styles.container}>
      <ButtonGroup
        buttons={enharmonicsButtons}
        activeButton={enharmonic}
        onClickButton={(enharmonicValue) => onSetEnharmonic(enharmonicValue)}
      />

      <ButtonGroup
        buttons={chordSchemeButtons}
        activeButton={chordScheme}
        onClickButton={(chordSchemaValue) => onSetChordScheme(chordSchemaValue)}
      />

      <ButtonGroup
        buttons={chordTypes}
        activeButton={chordType}
        onClickButton={(chordTypeValue) => onSetChordType(chordTypeValue)}
      />

      <KeySelector
        activeKey={activeKey}
        onSelectKey={(keyCode) => onSetActiveKey(keyCode)}
      />
    </section>
  );
}
