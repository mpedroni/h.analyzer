import { render, fireEvent } from "@testing-library/react";

import { ButtonGroup, type Button } from "./";

it("should render correctly", () => {
  const buttons: Button[] = [
    { label: "Button 1", value: "button1" },
    { label: "Button 2", value: "button2" },
    { label: "Button 3", value: "button3" },
  ];

  const { getByText } = render(
    <ButtonGroup activeButton="" buttons={buttons} onClickButton={() => {}} />
  );

  expect(getByText("Button 1")).toBeInTheDocument();
  expect(getByText("Button 2")).toBeInTheDocument();
  expect(getByText("Button 3")).toBeInTheDocument();
});

it("should be able to select only one group item", () => {
  const buttons: Button[] = [
    { label: "Button 1", value: "button1" },
    { label: "Button 2", value: "button2" },
  ];
  let activeButton = "";
  const onClickButton = jest.fn((buttonValue) => {
    activeButton = buttonValue;
  });

  const { getByText } = render(
    <ButtonGroup
      activeButton={activeButton}
      buttons={buttons}
      onClickButton={onClickButton}
    />
  );
  const button = getByText("Button 1");
  fireEvent.click(button);

  expect(onClickButton).toBeCalledTimes(1);
  expect(activeButton).toBe(buttons[0].value);
});
