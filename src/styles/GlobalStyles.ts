import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    color: #fff;    
  }
  html, body, #root {  
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;    
    background: #333;
  }
`;
