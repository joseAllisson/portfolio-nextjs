import { screen } from "@testing-library/react";

import { DefaultLayout } from ".";
import { renderTheme } from "../../../test/renderTheme";

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

describe("<DefaultLayout />", () => {
  it("should display full layout", () => {
    renderTheme(
      <DefaultLayout>
        <></>
      </DefaultLayout>
    );

    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();

    const content = screen.getByRole("main");
    expect(content).toBeInTheDocument();

    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });
});
