import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  
  :root {
    --primary: #00B997;
    --white: #FFFFFF;
    --black: #000000;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    color: var(--black);    
  }
  html, body, #root {  
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;    
    background: var(--white);
    font-family: Roboto, sans-serif;
  }
`;
