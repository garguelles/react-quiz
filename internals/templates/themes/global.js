import { injectGlobal } from 'styled-components';
import { fontFamily } from './variables';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  * {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  html {
    -webkit-tap-highlight-color: transparent;
  }

  body {
    font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust:100%;
    -ms-text-size-adjust:100%;
    font-size: 10px;
    height: 100%;
    width: 100%;
    font-family: Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: ${fontFamily.fontPrimary};
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }

  a {
  text-decoration: none;

    &:hover, &:focus, &:active{
      text-decoration: none;
    }
  }

  .clear {
    clear: both;
    width: 0;
    height: 0;
    display: block;
  }

  :focus {
    outline: none;
  }
`;
