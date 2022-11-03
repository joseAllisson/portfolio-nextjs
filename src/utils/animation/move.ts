import { keyframes } from "styled-components";

export interface AnimaProps {
  initialTransform?: string;
  endTransform?: string;
}

export const move = ({ initialTransform, endTransform }: AnimaProps) => keyframes`
  0% {
      transform : translate(${initialTransform});
  }
  100% {
      transform : translate(${endTransform}) rotate(360deg);
  }
`;

export const moveLeft = keyframes`
  from {
    transform:  translate(-80vw, 0);
  }
  to {
    transform: translate(0, 0) rotate(360deg);
  }
`;

export const moveRight = keyframes`
  from {
    transform: translate(80vw, 0);
  }
  to {
    transform: translate(0, 0) rotate(360deg);
  }
`;