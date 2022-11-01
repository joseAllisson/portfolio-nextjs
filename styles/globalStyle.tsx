import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
  p {
    font-family: "Open Sans", sans-serif;
  }
`;