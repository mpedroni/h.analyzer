import { render, within } from "@testing-library/react";
import { Chord } from ".";

import { C, Gm } from "../../../utils/chords";

describe("Chord component", () => {
  it("should renders correctly", () => {
    const { getByTestId } = render(<Chord chord={C} />);
    const chordNotesContainer = getByTestId("chord_notes_container");

    expect(getByTestId("chord")).toHaveTextContent(C.code);

    expect(within(chordNotesContainer).getAllByRole("button")).toHaveLength(
      C.notes.length
    );
  });

  it("should rerender the component when the chord prop changes", () => {
    const { getByTestId, rerender } = render(<Chord chord={C} />);

    expect(getByTestId("chord")).toHaveTextContent(C.code);

    rerender(<Chord chord={Gm} />);

    expect(getByTestId("chord")).not.toHaveTextContent(C.code);
    expect(getByTestId("chord")).toHaveTextContent(Gm.code);
  });

  it("should apply `secondary` color scheme when the prop `active` is `true`", () => {
    const { getByTestId } = render(<Chord chord={C} active />);

    expect(getByTestId("chord")).toHaveClass("secondary");
  });
});
