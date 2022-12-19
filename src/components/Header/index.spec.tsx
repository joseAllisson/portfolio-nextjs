import { fireEvent, screen } from "@testing-library/react";

import { Header } from ".";
import { renderTheme } from "../../test/renderTheme";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      pathname: "/",
      push: jest.fn(),
    };
  },
}));

global.open = jest.fn();

describe("<Header />", () => {
  it("should display component", () => {
    renderTheme(<Header />);

    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });

  it("there must be a profile picture", () => {
    renderTheme(<Header />);

    const profileImg = screen.getByRole("img", { name: "Jose Alisson" });
    expect(profileImg).toBeInTheDocument();
  });

  it("must display the tabs", () => {
    renderTheme(<Header />);

    const tabList = screen.getByRole("tablist");
    expect(tabList).toBeInTheDocument();
  });

  it("should display floating menu", () => {
    const { container } = renderTheme(<Header />);

    const floatingMenu = container.querySelector("#floating-menu");
    expect(floatingMenu).toBeInTheDocument();

    const animatedButton = screen.getByRole("button", { name: "" });
    fireEvent.click(animatedButton);

    const floatingMenuButtons = screen.getAllByRole("button", { name: "" });
    floatingMenuButtons.map((button) => fireEvent.click(button));
  });
});
