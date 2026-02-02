import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.colors.background};
    transition: background-color 0.3s ease;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  ::-webkit-scrollbar {
    width: 12px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.gradient};
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.colors.background};
  }
  
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  button {
    color: ${({ theme }) => theme.colors.text};
    font-family: ${(props) => props.theme.fontFamily.primary};
  }

  h1, h2, h3 {
    font-weight: 700;
    line-height: 1.2;
  }

  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
  }

  h2 {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
  }

  h3 {
    font-size: clamp(1.5rem, 3vw, 2rem);
  }

  p {
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  a {
    text-decoration: none;
    transition: all 0.3s ease;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    transition: all 0.3s ease;
  }

  hr {
    margin: 24px 0;
    height: 1px;
    background: ${({ theme }) => theme.colors.border};
    border: 0;
    opacity: 0.5;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;
