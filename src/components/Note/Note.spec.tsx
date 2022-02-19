import { fireEvent, render } from "@testing-library/react";
import { Note } from ".";

describe("Note component", () => {
  it("should renders correctly", () => {
    const { getByText } = render(<Note note="C" />);

    expect(getByText("C")).toBeInTheDocument();
  });

  it("should fires click events when prop `clickable` is `true`", () => {
    const onClickNote = jest.fn();

    const { getByRole } = render(
      <Note note="C" clickable onClick={onClickNote} />
    );

    const note = getByRole("button", {
      name: "C",
    });

    fireEvent.click(note);

    expect(onClickNote).toBeCalledTimes(1);
  });

  it("should apply the correct color scheme when the prop `color` is passed", () => {
    const { getByText, rerender } = render(<Note note="C" color="gray-700" />);
    const note = getByText("C");

    expect(note).toHaveClass("gray-700");

    rerender(<Note note="C" color="primary" />);
    expect(note).toHaveClass("primary");

    rerender(<Note note="C" color="secondary" />);
    expect(note).toHaveClass("secondary");

    rerender(<Note note="C" color="tertiary" />);
    expect(note).toHaveClass("tertiary");
  });
});
