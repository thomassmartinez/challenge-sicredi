import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #CDA15C;
    --white: #ffffff;
    --black: #000000;
    --gray: #A9A9A9;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  body {
    background: #1D242F 
  }

  h1, h2, h3, h4, h5, h6, span, p, th, td {
    font-family: 'Almendra SC', sans-serif;
    font-weight: 400;
  }
`;
