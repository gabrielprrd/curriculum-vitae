import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
