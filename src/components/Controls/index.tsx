import styles from "./styles.module.scss";

import { ButtonGroup, type Button } from "../ButtonGroup";
import { ScaleSelector } from "../ScaleSelector";

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
  activeScale: string;
  onSetEnharmonic: (enharmonic: string) => void;
  onSetChordScheme: (chordScheme: string) => void;
  onSetChordType: (chordType: string) => void;
  onSetActiveScale: (activeScale: string) => void;
}

export function Controls({
  enharmonic,
  chordScheme,
  chordType,
  activeScale,
  onSetActiveScale,
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

      <ScaleSelector
        activeScale={activeScale}
        onSelectScale={(keyCode) => onSetActiveScale(keyCode)}
      />
    </section>
  );
}
