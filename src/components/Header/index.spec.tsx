import { fireEvent, screen } from "@testing-library/react";

import { Header } from ".";
import { renderTheme } from "../../test/renderTheme";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "/",
      query: "",
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

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
  });
});
