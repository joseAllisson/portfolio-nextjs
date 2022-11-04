import { ButtonBase } from "@mui/material";
import { FaEye, FaLink } from "react-icons/fa";
import { Text } from "../Text";
import { CardStyled } from "./style";

export interface CardProps {
  title: string;
  description: string;
  img: string;
  link?: string;
}

export const Card = ({ title, description, img, link }: CardProps) => {
  return (
    <CardStyled background={img}>
      <section className="overlay">
        <div className="card-content">
          <h3>{title}</h3>
          <Text fontSize="1rem">{description}</Text>

          <div className="button-container">
            <ButtonBase disabled={!link} onClick={() => window.open(link, "_blank")}>
              <FaEye />
            </ButtonBase>
            <ButtonBase disabled={!link} onClick={() => window.open(link, "_blank")}>
              <FaLink />
            </ButtonBase>
          </div>
        </div>
      </section>
    </CardStyled>
  );
};

Card.defaultProps = {
  link: "",
};
