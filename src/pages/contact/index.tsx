import { GetStaticProps } from "next";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { ButtonBase } from "@mui/material";

import ContactStyled from "./style";

export interface ContactProps {
  id: number;
  type: "email" | "phone" | "whatsapp";
  title: string;
  description: string;
  contact: string;
  link: string;
}

interface ContactPageProps {
  contacts: ContactProps[];
}

const ContactPage = ({ contacts }: ContactPageProps) => {
  const getIcon = (type: ContactProps["type"]) => {
    switch (type) {
      case "phone":
        return <BiPhoneCall />;
      case "whatsapp":
        return <AiOutlineWhatsApp />;
      default:
        return <HiOutlineMail />;
    }
  };

  return (
    <ContactStyled>
      <h2>Contato</h2>
      <hr />
      <section className="contact-container">
        {contacts.map(({ id, type, title, description, contact, link }) => (
          <article key={id}>
            <h3>
              {title}
              <ButtonBase>
                <a href={link} target="_blank" rel="noreferrer">
                    {getIcon(type)}
                </a>
              </ButtonBase>
            </h3>
            <p>{description}</p>
            <p>
              <strong>{contact}</strong>
            </p>
          </article>
        ))}
      </section>
    </ContactStyled>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const contacts = [
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

  return {
    props: {
      contacts,
    },
  };
};

export default ContactPage;
