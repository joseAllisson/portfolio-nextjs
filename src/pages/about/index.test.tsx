import { screen } from "@testing-library/react";

import { renderTheme } from "../../test/renderTheme";
import AboutPage from ".";

const formationMock = [
  {
    id: 1,
    title: "Técnico em analise e desenvolvimento de sistemas",
    time: "2019 - 2020",
    institution: "ETEC Paulistano",
  },
  {
    id: 2,
    title: "Faculdade em analise e desenvolvimento de sistemas",
    time: "2022 - 2024",
    institution: "Faculdade Impacta",
  },
];

const coursesMock = [
  {
    id: 1,
    title: "React Completo",
    time: "36",
    institution: "Origamid",
    link: "https://www.origamid.com/certificate/4df2861c",
  },
  {
    id: 2,
    title: "Javacript Completo ES6",
    time: "74",
    institution: "Origamid",
    link: "https://www.origamid.com/certificate/3f1e329c/",
  },
  {
    id: 3,
    title: "Programação Web",
    time: "106",
    institution: "Udemy",
    link: "https://www.udemy.com/certificate/UC-22c3a1cb-ac13-4b5f-b51f-f9a4be2870fc/",
  },
  {
    id: 4,
    title: "Operador de microcomputador",
    time: "160",
    institution: "SENAI Theobaldo De Nigris – SP",
    link: "#",
  },
];

describe("<AboutPage />", () => {
  it("should render component", () => {
    renderTheme(<AboutPage formation={formationMock} courses={coursesMock} />);

    const profileImage = screen.getByRole("img", { name: "José Alisson" });
    expect(profileImage).toBeInTheDocument();

    const cards = screen.getAllByRole("article");
    expect(cards).toHaveLength(formationMock.length + coursesMock.length);
  });
});
