import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  
  :root {
    --primary: #00B997;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    color: #000;    
  }
  html, body, #root {  
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;    
    background: #fff;
    font-family: Roboto, sans-serif;
  }
`;
