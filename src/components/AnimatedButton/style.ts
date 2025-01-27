import styled from "styled-components";
import ButtonBase from "@mui/material/ButtonBase";
import { moveLeft, moveRight } from "../../utils/animation/move";

export interface AnimatedButtonStyledProps {
  animation?: 'moveLeft' | 'moveRight';
  animationDuration?: number;
  animationFillMode?: string;
  initialTranslate?: string;
  endTranslate?: string;
}

export const AnimatedButtonStyled = styled(ButtonBase) <AnimatedButtonStyledProps>`
    &.animated-button {
      height: 56px;
      width: 56px;
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.primary};
      border: 2px solid ${({ theme }) => theme.colors.primary};
      border-radius: 50%;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.200);
      /* animation 
      animation-name: ${({ animation }) => {
        switch (animation) {
          case 'moveLeft':
            return moveLeft
          case 'moveRight':
            return moveRight
  
          default:
            return '';
        }
      }};
      animation-duration: ${({ animationDuration }) => animationDuration ? animationDuration + 's' : '1s'} ;
      animation-fill-mode: ${({ animationFillMode }) => animationFillMode || 'forwards'};
      transition: 0.3s;
      */
  
      &:hover {
          background-color: ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.secondary};
          box-shadow:
            0 0 10px 2px ${({ theme }) => theme.colors.secondary},
            0 0 30px 10px ${({ theme }) => theme.colors.primary},
            0 0 20px 10px ${({ theme }) => theme.colors.primary}
          ;
      }
    }
`;