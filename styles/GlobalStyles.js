import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

@font-face {
  font-family: "Gilroy-ExtraBold";
  src: url("/fonts/Gilroy-ExtraBold/font.woff");
  font-style: bold;
  font-weight: 900;
  font-display: swap;
}

  html,
  body {
  padding: 0;
  margin: 0;
  font-family: ${({theme}) => theme.fonts.primary};
}
  *, *:before, *:after {
  box-sizing: border-box;
}

  a {
  color: inherit;
  text-decoration: none;
}
`;