import { ButtonBase, Tooltip } from "@mui/material";
import { FaEye, FaGit, FaLink } from "react-icons/fa";
import { useEffect, useState } from "react";

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

interface CardComponentProps extends CardProps {
  onPreview?: () => void;
}

export const Card = ({ id, title, description, img, link, github, onPreview }: CardComponentProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handlePreviewClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onPreview) {
      onPreview();
    }
  };

  const handleCardClick = () => {
    if (isMobile && onPreview) {
      onPreview();
    }
  };

  return (
    <CardStyled background={img} data-testid={id} onClick={handleCardClick}>
      <section className="overlay">
        <div className="card-content">
          <h3>{title}</h3>
          <Text fontSize="1rem">{description}</Text>

          <div className="button-container">
            <Tooltip title={link || "Link indisponível"}>
              <span>
                <ButtonBase disabled={!link} data-testid="linkButton" onClick={(e) => e.stopPropagation()}>
                  <a href={link} target="_blank" rel="noreferrer">
                    <FaLink />
                  </a>
                </ButtonBase>
              </span>
            </Tooltip>
            <Tooltip title={github || "Link privado(empresas) ou inacessível"}>
              <span>
                <ButtonBase disabled={!github} data-testid="githubButton" onClick={(e) => e.stopPropagation()}>
                  <a href={github} target="_blank" rel="noreferrer">
                    <FaGit />
                  </a>
                </ButtonBase>
              </span>
            </Tooltip>
            <Tooltip title="Ver detalhes">
              <ButtonBase onClick={handlePreviewClick}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                  <FaEye />
                </span>
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
