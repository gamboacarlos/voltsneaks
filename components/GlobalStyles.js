import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  html,
  body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
  *, *:before, *:after {
  box-sizing: border-box;
}

  a {
  color: inherit;
  text-decoration: none;
}

  * {
  box-sizing: border-box;
}

`;