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

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 100vh;
    width: 100%;
  }
`;

export default GlobalStyles;
