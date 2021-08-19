import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  
  :root {
    --primary: #00B997;
    --white: #FFFFFF;
    --black: #000000;
    --light-gray: #7A7A7A;
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

export const SectionTitle = styled.h1`
  font-size: 34px;
  font-weight: bold;
  color: var(--black);
  padding: 3rem 0 5rem 0;
`;
