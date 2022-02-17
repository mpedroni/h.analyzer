import { render, fireEvent } from "@testing-library/react";

import { KeySelector } from ".";
import { naturalKeys } from "../../utils/keys";

describe("KeySelector component", () => {
  it("should renders correctly", () => {
    const { getByText, getAllByRole } = render(
      <KeySelector activeKey="" onSelectKey={() => {}} />
    );

    expect(getByText(naturalKeys[0].code)).toBeInTheDocument();
    expect(getByText(naturalKeys[1].code)).toBeInTheDocument();
    expect(getByText(naturalKeys[2].code)).toBeInTheDocument();
    expect(getByText(naturalKeys[3].code)).toBeInTheDocument();
    expect(getByText(naturalKeys[4].code)).toBeInTheDocument();
    expect(getByText(naturalKeys[5].code)).toBeInTheDocument();
    expect(getByText(naturalKeys[6].code)).toBeInTheDocument();
  });

  it("should be able to select only one key", () => {
    let activeKey = "";
    const onSelectKey = jest.fn((keyCode) => (activeKey = keyCode));
    const { getAllByRole } = render(
      <KeySelector activeKey={activeKey} onSelectKey={onSelectKey} />
    );

    const keyButton = getAllByRole("button")[0];

    fireEvent.click(keyButton);

    expect(activeKey).toBe(naturalKeys[0].code);
    expect(onSelectKey).toBeCalledTimes(1);
  });
});
