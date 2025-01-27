import { ButtonBase, Tooltip } from "@mui/material";
import { FaEye, FaGit, FaLink } from "react-icons/fa";

import { Text } from "../Text";
import { CardStyled } from "./style";

export interface CardProps {
  id: number;
  title: string;
  description: string;
  img: string;
  link?: string;
  github?: string;
}

export const Card = ({ id, title, description, img, link, github }: CardProps) => {
  return (
    <CardStyled background={img} data-testid={id}>
      <section className="overlay">
        <div className="card-content">
          <h3>{title}</h3>
          <Text fontSize="1rem">{description}</Text>

          <div className="button-container">
            <Tooltip title={link || "Link indisponível"}>
              <span>
                <ButtonBase disabled={!link} data-testid="linkButton">
                  <a href={link} target="_blank" rel="noreferrer">
                    <FaLink />
                  </a>
                </ButtonBase>
              </span>
            </Tooltip>
            <Tooltip title={github || "Link privado(empresas) ou inacessível"}>
              <span>
                <ButtonBase disabled={!github} data-testid="githubButton">
                  <a href={github} target="_blank" rel="noreferrer">
                    <FaGit />
                  </a>
                </ButtonBase>
              </span>
            </Tooltip>
            <Tooltip title="Imagem">
              <ButtonBase>
                <a href={img} target="_blank" rel="noreferrer">
                  <FaEye />
                </a>
              </ButtonBase>
            </Tooltip>
          </div>
        </div>
      </section>
    </CardStyled>
  );
};

Card.defaultProps = {
  link: "",
};
