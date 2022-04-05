import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
  }

  html {
  box-sizing: border-box;
  font-size: 62.5%; // 1rem = 10px
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 94.4rem;
  margin: 0 auto 0 auto;
  padding-right: 1.6rem;
  padding-left: 1.6rem;
  background-color: #ccc;
`;

export default GlobalStyle;
