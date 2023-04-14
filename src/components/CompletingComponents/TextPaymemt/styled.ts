import styled from "styled-components";

export const Container=styled.div`
 width: 90%;
 background: ${({theme})=>theme.colors["base-input"]};
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 gap: .5rem;


 div{
    width: 100%;
    display: flex;
    align-items: center;
   justify-content: space-between;
  
   h4{
    padding: 0px;
    margin: 0px;
   }
 }
 button{
    width: 100%;
    background:${({theme})=>theme.colors["brand-yellow"]};
    height: 2rem;
    border-radius: .5rem;
    border: none;
    :hover{
      background:${({theme})=>theme.colors["brand-yellow-dark"]};
    }
   }
`