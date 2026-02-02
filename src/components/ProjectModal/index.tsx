import { useEffect, useCallback, useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { CardProps } from "../Card";
import { ModalOverlay, ModalWrapper, ModalContainer, NavButton, MobileNavBar } from "./style";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: CardProps[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export const ProjectModal = ({
  isOpen,
  onClose,
  projects,
  currentIndex,
  onNavigate,
}: ProjectModalProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const currentProject = projects[currentIndex];
  const totalProjects = projects.length;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const goToPrevious = useCallback(() => {
    setImageLoaded(false);
    const newIndex = currentIndex === 0 ? totalProjects - 1 : currentIndex - 1;
    onNavigate(newIndex);
  }, [currentIndex, totalProjects, onNavigate]);

  const goToNext = useCallback(() => {
    setImageLoaded(false);
    const newIndex = currentIndex === totalProjects - 1 ? 0 : currentIndex + 1;
    onNavigate(newIndex);
  }, [currentIndex, totalProjects, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose, goToPrevious, goToNext]);

  useEffect(() => {
    setImageLoaded(false);
  }, [currentIndex]);

  if (!isOpen || !currentProject) return null;

  return (
    <>
      <ModalOverlay onClick={onClose} />
      
      {!isMobile && (
        <>
          <NavButton className="prev" onClick={goToPrevious} aria-label="Projeto anterior">
            <FaChevronLeft />
          </NavButton>
          <NavButton className="next" onClick={goToNext} aria-label="Próximo projeto">
            <FaChevronRight />
          </NavButton>
        </>
      )}

      <ModalWrapper>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={onClose} aria-label="Fechar">
            <FaTimes />
          </button>

          <div className="modal-image-section">
            {!imageLoaded && <div className="image-skeleton" />}
            <div className="image-wrapper">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentProject.img}
                alt={currentProject.title}
                style={{ 
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: imageLoaded ? 1 : 0,
                  transition: "opacity 0.3s ease",
                  position: "absolute",
                  top: 0,
                  left: 0
                }}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>

          <div className="modal-content-section">
            <span className="project-number">
              Projeto {currentIndex + 1} de {totalProjects}
            </span>
            <h2>{currentProject.title}</h2>
            <p className="description">{currentProject.description}</p>

            <div className="modal-actions">
              {currentProject.link ? (
                <a
                  href={currentProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <FaExternalLinkAlt />
                  {isMobile ? "Acessar" : "Visitar Site"}
                </a>
              ) : (
                <button className="btn-primary btn-disabled" disabled>
                  <FaExternalLinkAlt />
                  {isMobile ? "Indisponível" : "Site Indisponível"}
                </button>
              )}
              {currentProject.github ? (
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  <FaGithub />
                  {isMobile ? "Código" : "Ver Código"}
                </a>
              ) : (
                <button className="btn-secondary btn-disabled" disabled>
                  <FaGithub />
                  {isMobile ? "Privado" : "Código Privado"}
                </button>
              )}
            </div>
          </div>

          <div className="project-counter">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => onNavigate(index)}
                aria-label={`Ir para projeto ${index + 1}`}
              />
            ))}
          </div>
        </ModalContainer>
      </ModalWrapper>

      <MobileNavBar>
        <NavButton className="prev" onClick={goToPrevious} aria-label="Projeto anterior">
          <FaChevronLeft />
        </NavButton>
        
        <div className="nav-dots">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => onNavigate(index)}
              aria-label={`Ir para projeto ${index + 1}`}
            />
          ))}
        </div>

        <NavButton className="next" onClick={goToNext} aria-label="Próximo projeto">
          <FaChevronRight />
        </NavButton>
      </MobileNavBar>
    </>
  );
};
