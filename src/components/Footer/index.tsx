import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import ButtonBase from "@mui/material/ButtonBase";

import { Text } from "../Text";

import { FooterStyled } from "./style";

export const Footer = () => {
  return (
    <FooterStyled>
      <div className="social-section">
        <Text className="social-title">Redes Sociais</Text>
        <div className="buttons-container">
          <a href="https://github.com/joseallisson" target="_blank" rel="noreferrer">
            <ButtonBase>
              <FaGithub />
            </ButtonBase>
          </a>
          <a href="https://www.linkedin.com/in/jose-alisson-bezerra-de-souza/" target="_blank" rel="noreferrer">
            <ButtonBase>
              <FaLinkedinIn />
            </ButtonBase>
          </a>
          <a href="https://www.instagram.com/jose_alisson_bezerra" target="_blank" rel="noreferrer">
            <ButtonBase>
              <FaInstagram />
            </ButtonBase>
          </a>
        </div>
      </div>

      <Text className="background-primary">
        © {new Date().getFullYear()} - José Alisson Bezerra de Souza
      </Text>
    </FooterStyled>
  );
};
