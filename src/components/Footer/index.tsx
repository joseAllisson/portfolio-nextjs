import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import ButtonBase from "@mui/material/ButtonBase";

import { Text } from "../Text";

import { FooterStyled } from "./style";

const Footer = () => {
  return (
    <FooterStyled>
      <Text padding="8px 0">Redes Sociais</Text>
      <hr />
      <div className="buttons-container">
        <ButtonBase
          onClick={() => {
            window.open("https://github.com/joseallisson", "_blank");
          }}
        >
          <FaGithub />
        </ButtonBase>
        <ButtonBase
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/jos%C3%A9-alisson-bezerra-de-souza/",
              "_blank"
            );
          }}
        >
          <FaLinkedinIn />
        </ButtonBase>
        <ButtonBase
          onClick={() => {
            window.open("https://www.instagram.com/jose_alisson_bezerra/", "_blank");
          }}
        >
          <FaInstagram />
        </ButtonBase>
      </div>

      <p className="background-primary">
        © {new Date().getFullYear()} José Alisson Bezerra de Souza
      </p>
    </FooterStyled>
  );
};

export default Footer;
