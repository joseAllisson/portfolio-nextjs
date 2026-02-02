import styled from "styled-components";
import { mediaDevice } from "../../../styles/responsive/mediaDevice";

export const LayoutStyled = styled.main`
  min-height: 65vh;
  padding-top: 80px;
  background: ${({ theme }) => theme.colors?.background || "#ffffff"};
  position: relative;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.08) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }
`;

export const ContentStyled = styled.section`
  // position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
  animation: fadeIn 0.6s ease-out;

  @media ${mediaDevice.mobile} {
    padding: 0;
  }
`;
