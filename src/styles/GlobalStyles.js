import { createGlobalStyle } from "styled-components";

/*Global Styles*/

const GlobalStyles = createGlobalStyle`
/* CSS reset */
 /* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}
  /* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}
/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}
/* Letter spacing */
h1,
h2,
h3,
h4{
  letter-spacing: 2px;
}
/* Remove list styles on ul, ol elements with a class attribute */
ul[class],
ol[class] {
  list-style: none;
}
/* A elements that don't have a class get default styles */
a:not([class]) {
  color: inherit;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  
}
ul{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
/* Make images easier to work with */
img {
  max-width: 100%;
  display: block;
}
/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}
a{
  color: #FFFFFF;
  text-decoration: none;
}
body{
  font-family: 'Roboto', sans-serif;
  background-color: ${({ theme }) => theme.color.background};
  color:  ${({ theme }) => theme.text.primary};
  line-height: 1.6;
}
`;

export default GlobalStyles;
