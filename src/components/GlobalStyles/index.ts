import { createGlobalStyle } from 'styled-components';
import { FontFamily } from 'styles/fonts';
import { backgroundColor } from 'styles/theme';

const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  *::after, *::before {
    box-sizing: inherit;
  }

  body {
    height: 100%;
    font-family: ${FontFamily};
    margin: 0;
    box-sizing: border-box;
    background-color: ${backgroundColor};
  }
`;

export default GlobalStyles;
