import {
  A,
  Am,
  A_SHARP_HALF_DIM,
  B,
  Bb,
  Bm,
  B_HALF_DIM,
  C,
  C_SHARPm,
  C_SHARP_HALF_DIM,
  D,
  Dm,
  D_SHARPm,
  D_SHARP_HALF_DIM,
  E,
  Em,
  E_HALF_DIM,
  F,
  F_SHARP,
  F_SHARPm,
  F_SHARP_HALF_DIM,
  G,
  Gm,
  G_SHARPm,
  G_SHARP_HALF_DIM,
} from "./chords";
import type { Chord } from "./chords";

export type HarmonicField = Record<string, Chord[]>;

export const MAJOR_HARMONIC_FIELDS: HarmonicField = {
  C: [C, Dm, Em, F, G, Am, B_HALF_DIM],
  D: [D, Em, F_SHARPm, G, A, Bm, C_SHARP_HALF_DIM],
  E: [E, F_SHARPm, G_SHARPm, A, B, C_SHARPm, D_SHARP_HALF_DIM],
  F: [F, Gm, Am, Bb, C, Dm, E_HALF_DIM],
  G: [G, Am, Bm, C, D, Em, F_SHARP_HALF_DIM],
  A: [A, Bm, C_SHARPm, D, E, F_SHARPm, G_SHARP_HALF_DIM],
  B: [B, C_SHARPm, D_SHARPm, E, F_SHARP, G_SHARPm, A_SHARP_HALF_DIM],
};
