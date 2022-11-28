import { ButtonBase, Tooltip } from "@mui/material";
import { FaEye, FaLink } from "react-icons/fa";
import { Text } from "../Text";
import { CardStyled } from "./style";

export interface CardProps {
  id: number;
  title: string;
  description: string;
  img: string;
  link?: string;
}

export const Card = ({ id, title, description, img, link }: CardProps) => {
  return (
    <CardStyled background={img} data-testid={id}>
      <section className="overlay">
        <div className="card-content">
          <h3>{title}</h3>
          <Text fontSize="1rem">{description}</Text>

          <div className="button-container">
            <Tooltip title="Imagem">
              <ButtonBase onClick={() => window.open(img, "_blank")}>
                <FaEye />
              </ButtonBase>
            </Tooltip>
            <Tooltip title={link}>
              <ButtonBase
                disabled={!link}
                onClick={() => window.open(link, "_blank")}
                data-testid="linkButton"
              >
                <FaLink />
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
