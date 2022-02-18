export type Chord = {
  code: string;
  notes: string[];
};

export const C: Chord = { code: "C", notes: ["C", "E", "G"] };
export const C_SHARPm: Chord = { code: "C#m", notes: ["C#", "E", "G#"] };
export const C_SHARP_HALF_DIM: Chord = {
  code: "C#ø",
  notes: ["C#", "E", "G", "B"],
};

export const D: Chord = { code: "D", notes: ["D", "F#", "A"] };
export const Dm: Chord = { code: "Dm", notes: ["D", "F", "A"] };
export const D_SHARPm: Chord = { code: "D#m", notes: ["D#", "F#", "A#"] };
export const D_SHARP_HALF_DIM: Chord = {
  code: "D#ø",
  notes: ["D#", "F#", "A", "C#"],
};

export const E: Chord = { code: "E", notes: ["E", "G#", "B"] };
export const Em: Chord = { code: "Em", notes: ["E", "G", "B"] };
export const E_HALF_DIM: Chord = { code: "Eø", notes: ["E", "G", "Bb", "D"] };

export const F: Chord = { code: "F", notes: ["F", "A", "C"] };
export const F_SHARP: Chord = { code: "F#", notes: ["F#", "A#", "C#"] };
export const F_SHARPm: Chord = { code: "F#m", notes: ["F#", "A", "C#"] };
export const F_SHARP_HALF_DIM: Chord = {
  code: "F#ø",
  notes: ["F#", "A", "C", "E"],
};

export const G: Chord = { code: "G", notes: ["G", "B", "D"] };
export const Gm: Chord = { code: "Gm", notes: ["G", "A#", "D"] };
export const G_SHARPm: Chord = { code: "G#m", notes: ["G#", "B", "D#"] };
export const G_SHARP_HALF_DIM: Chord = {
  code: "G#ø",
  notes: ["G#", "B", "D", "F#"],
};

export const A: Chord = { code: "A", notes: ["A", "C#", "E"] };
export const Am: Chord = { code: "Am", notes: ["A", "C", "E"] };
export const A_SHARP_HALF_DIM: Chord = {
  code: "A#ø",
  notes: ["A#", "C#", "E", "G#"],
};

export const B: Chord = { code: "B", notes: ["B", "D#", "F#"] };
export const Bm: Chord = { code: "Bm", notes: ["B", "D", "F#"] };
export const Bb: Chord = { code: "Bb", notes: ["Bb", "D", "F"] };
export const B_HALF_DIM: Chord = { code: "Bø", notes: ["B", "D", "F", "A"] };
