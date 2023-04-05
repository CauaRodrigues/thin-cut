import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before,
  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    font-family: ${({ theme }) => theme.fonts.fm.poppins};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    text-decoration: none;
  }
  
  body,
  html {
    background-color: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.black};
  }
  
  ul,
  li {
    list-style: none;
  }
  
  img {
    display: block;
    max-width: 100%;
  }
`;
