import { render, fireEvent } from "@testing-library/react";

import { ScaleSelector } from ".";
import { NATURAL_SCALES } from "../../utils/notes";

describe("ScaleSelector component", () => {
  it("should renders correctly", () => {
    const { getByText } = render(
      <ScaleSelector activeScale="" onSelectScale={() => {}} />
    );

    expect(getByText(NATURAL_SCALES[0].code)).toBeInTheDocument();
    expect(getByText(NATURAL_SCALES[1].code)).toBeInTheDocument();
    expect(getByText(NATURAL_SCALES[2].code)).toBeInTheDocument();
    expect(getByText(NATURAL_SCALES[3].code)).toBeInTheDocument();
    expect(getByText(NATURAL_SCALES[4].code)).toBeInTheDocument();
    expect(getByText(NATURAL_SCALES[5].code)).toBeInTheDocument();
    expect(getByText(NATURAL_SCALES[6].code)).toBeInTheDocument();
  });

  it("should be able to select only one scale", () => {
    let activeScale = "";
    const onSelectScale = jest.fn((scaleCode) => (activeScale = scaleCode));
    const { getAllByRole } = render(
      <ScaleSelector activeScale={activeScale} onSelectScale={onSelectScale} />
    );

    const scaleSelectorButton = getAllByRole("button")[0];

    fireEvent.click(scaleSelectorButton);

    expect(activeScale).toBe(NATURAL_SCALES[0].code);
    expect(onSelectScale).toBeCalledTimes(1);
  });
});
