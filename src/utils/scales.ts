export type ScaleVariant = {
  value: string;
  code: string;
};

export const SCALE_DEGREES = ["I", "II", "III", "IV", "V", "VI", "VII"];

const FLAT_SCALE: ScaleVariant = { value: "flat", code: "b" };
const NATURAL_SCALE: ScaleVariant = { value: "natural", code: "natural" };
const SHARP_SCALE: ScaleVariant = { value: "sharp", code: "#" };

export const SCALES_VARIANTS = {
  flat: FLAT_SCALE,
  natural: NATURAL_SCALE,
  sharp: SHARP_SCALE,
};

export const NATURAL_SCALES = [
  { code: "C" },
  { code: "D" },
  { code: "E" },
  { code: "F" },
  { code: "G" },
  { code: "A" },
  { code: "B" },
];
