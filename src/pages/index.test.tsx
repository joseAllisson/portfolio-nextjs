import { screen } from "@testing-library/react";

import { renderTheme } from "../test/renderTheme";
import HomePage from ".";

const cardsMock = [
  {
    id: 1,
    title: "Sua Música",
    description:
      "Projeto desenvolvido em time, reconstruído utilizando Nextjs, serviço prestado para Sua Música, uma plataforma de lançamento de Artistas independentes do Brasil.",
    img: "/img/portfolio/suamusica.jpg",
    link: "https://suamusica.com.br",
  },
  {
    id: 2,
    title: "WDB",
    description:
      "Web Dev Brasil, site criado em grupo para TCC, uma empresa, Startup, focada em criação de sites e aplicativos.",
    img: "/img/portfolio/wdb.png",
    link: "",
  },
  {
    id: 3,
    title: "PetWash",
    description:
      "Um Petshop, para vários tipos de Pets! Site responsivo e com estruturas otimizadas.",
    img: "/img/portfolio/pet.png",
    link: "",
  },
];

describe("<HomePage />", () => {
  it("should render component", () => {
    renderTheme(<HomePage cards={cardsMock} />);

    const cards = screen.getAllByRole("article");
    expect(cards).toHaveLength(cards.length);
  });
});
