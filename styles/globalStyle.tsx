import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }

  body {
    overflow-x: hidden;
  }
  
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: #111;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  button
   {
    font-family: ${(props) => props.theme.fontFamily.primary}, sans-serif;
  }

  hr {
    margin: 4px 0;
    height: 1px;
    background: currentColor;
    border: 0;
    opacity: .25;
  }
`;
