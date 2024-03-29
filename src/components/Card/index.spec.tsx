import { screen } from "@testing-library/react";

import { Card, CardProps } from ".";
import { renderTheme } from "../../test/renderTheme";

const mock: CardProps = {
  id: 1,
  title: "title",
  description: "description",
  img: "/img/portfolio/wdb.png",
  link: "https://google.com",
};

describe("<Card />", () => {
  it("should render component with link", () => {
    renderTheme(<Card {...mock} />);

    const title = screen.getByRole("heading", { name: mock.title });
    expect(title).toBeInTheDocument();

    const description = screen.getByText(mock.description);
    expect(description).toBeInTheDocument();

    const linkButtonActivated = screen.getByTestId("linkButton");
    expect(linkButtonActivated).toBeEnabled();

    const card = screen.getByTestId(mock.id);
    expect(card).toHaveStyle({
      backgroundImage: `url(${mock.img})`,
    });
  });

  it("should render component without link", () => {
    delete mock.link;
    renderTheme(<Card {...mock} />);

    const title = screen.getByRole("heading", { name: mock.title });
    expect(title).toBeInTheDocument();

    const description = screen.getByText(mock.description);
    expect(description).toBeInTheDocument();

    const linkButtonActivated = screen.getByTestId("linkButton");
    expect(linkButtonActivated).toBeDisabled();

    const card = screen.getByTestId(mock.id);
    expect(card).toHaveStyle({
      backgroundImage: `url(${mock.img})`,
    });
  });
});
