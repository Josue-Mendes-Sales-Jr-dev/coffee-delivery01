import { createGlobalStyle } from "styled-components";

export const GlobalStyle=createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Roboto',sans-serif;
  }

  body{
    color: ${({theme})=>theme.colors["base-text"]};
    background: ${props=>props.theme.colors['base-background']};
  }

  body,input,textarea,button{
    font-family: ${({theme})=>theme.fonts.regular};
    font-weight: 400;
    font-size: ${(props)=>props.theme.textSizes["text-regular-m"]};
     
  }
  button{
    cursor: pointer;
  }
  a{
    text-decoration: none;
  }
`