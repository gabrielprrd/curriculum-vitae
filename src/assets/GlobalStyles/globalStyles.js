import { createGlobalStyle } from 'styled-components';
import DroidSansMono from '../fonts/DroidSansMono.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Droid Sans Mono';
    src: local('Droid Sans Mono'), local('Droid Sans Mono'),
    url(${DroidSansMono}) format('truetype'); 
    font-weight: 300;
    font-style: normal;
      };  

  * {
    /* reset */
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  
  html, body {
    height: 100vh;
    width: 100%;
    background: ${({ theme }) => theme.bodyGap};
    color: ${({ theme }) => theme.text};
    overflow: hidden;
    font-family: 'Droid Sans Mono', 'monospace', monospace, 'Droid Sans Fallback';
  }
`;

export default GlobalStyle;
