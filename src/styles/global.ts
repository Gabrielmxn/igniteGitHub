import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['blue']};
  }

  body {
    background-color: ${props => props.theme['base-background']};
    color: ${props => props.theme['base-text']};

    font-family: "Nunito", sans-serif;
  }

`