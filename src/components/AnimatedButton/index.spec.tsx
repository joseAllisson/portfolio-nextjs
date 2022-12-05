import { fireEvent, screen } from "@testing-library/react";

import { AnimatedButton } from ".";
import { renderTheme } from "../../test/renderTheme";

describe("<AnimatedButton />", () => {
  it("should render component with text", () => {
    renderTheme(<AnimatedButton>Text</AnimatedButton>);

    const animatedButton = screen.getByRole("button");
    expect(animatedButton).toBeInTheDocument();

    const animatedButtonWithText = screen.getByText("Text");
    expect(animatedButtonWithText).toBeInTheDocument();
  });

  it("must call the function when clicking the button", () => {
    const fn = jest.fn();
    renderTheme(<AnimatedButton onClick={fn}>Text</AnimatedButton>);

    const animatedButton = screen.getByRole("button");
    fireEvent.click(animatedButton);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
