import { render } from "@testing-library/react";
import { Logo } from ".";

describe("Logo component", () => {
  it("should renders correctly", () => {
    const { getByRole } = render(<Logo />);

    const logo = getByRole("heading", {
      name: /(h\.).(analyzer)/,
    });

    expect(logo).toBeInTheDocument();
  });
});
