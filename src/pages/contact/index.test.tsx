import { screen } from "@testing-library/react";

import { renderTheme } from "../../test/renderTheme";
import ContactPage, { ContactProps } from ".";

const contacts: ContactProps[] = [
  {
    id: 1,
    type: "email",
    title: "Email",
    description: "Tem alguma dúvida ou sugestão?",
    contact: "josealissonbezerra3@gmail.com",
    link: "mailto:josealissonbezerra3@gmail.com?subject=contato",
  },
  {
    id: 2,
    type: "phone",
    title: "Celular",
    description: "Disponível para ligação.",
    contact: "+55 (11) 953503982",
    link: "tel:+5511953503982",
  },
  {
    id: 3,
    type: "whatsapp",
    title: "Whatsapp",
    description: "Mensagem rápida!",
    contact: "Click no ícone acima!",
    link: "https://api.whatsapp.com/send?phone=5511953503982",
  },
];

describe("<ContactPage />", () => {
  it("should render component", () => {
    renderTheme(<ContactPage contacts={contacts} />);

    const cards = screen.getAllByRole("article");
    expect(cards).toHaveLength(contacts.length);
  });
});
