import { useMemo } from "react";

import { SCALES_VARIANTS, type ScaleVariant } from "../../utils/scales";

import styles from "./styles.module.scss";

import { ButtonGroup, type Button } from "../ButtonGroup";
import { ScaleSelector } from "../ScaleSelector";

const chordSchemeButtons: Button[] = [
  { label: "tríades", value: "triads" },
  { label: "tétrades", value: "tetrads", disabled: true },
];

const chordTypes: Button[] = [
  { label: "maior", value: "major" },
  { label: "menor", value: "minor", disabled: true },
];

interface ControlsProps {
  scaleVariant: ScaleVariant;
  chordScheme: string;
  chordType: string;
  activeScale: string;
  onSetScaleVariant: (scaleVariant: ScaleVariant) => void;
  onSetChordScheme: (chordScheme: string) => void;
  onSetChordType: (chordType: string) => void;
  onSetActiveScale: (activeScale: string) => void;
}

export function Controls({
  scaleVariant,
  chordScheme,
  chordType,
  activeScale,
  onSetActiveScale,
  onSetChordScheme,
  onSetChordType,
  onSetScaleVariant,
}: ControlsProps) {
  const scalesVariantsButtons: Button[] = useMemo(
    () =>
      Object.values(SCALES_VARIANTS).map(({ code, value }) => ({
        label: code,
        value,
        disabled: code !== "natural",
      })),
    []
  );

  function handleScaleVariantSelect(scaleVariantCode: string) {
    const scaleVariant = Object.values(SCALES_VARIANTS).find(
      ({ value }) => value === scaleVariantCode
    );

    onSetScaleVariant(scaleVariant as ScaleVariant);
  }

  return (
    <section className={styles.container}>
      <ButtonGroup
        buttons={scalesVariantsButtons}
        activeButton={scaleVariant.value}
        onClickButton={handleScaleVariantSelect}
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
