import { screen } from "@testing-library/react";
import { Footer } from ".";
import { renderTheme } from "../../test/renderTheme";

describe("<Footer />", () => {
  it("should render component", () => {
    const { container } = renderTheme(<Footer />);

    expect(container.querySelector("footer")).toBeInTheDocument();
  });

  it("links must have _blank rel noreferrer target attributes", () => {
    renderTheme(<Footer />);

    const links = screen.getAllByRole("link");
    links.map((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noreferrer");
    });
  });
});
