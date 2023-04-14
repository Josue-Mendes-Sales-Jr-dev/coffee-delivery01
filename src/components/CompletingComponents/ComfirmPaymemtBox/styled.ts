import styled from "styled-components";

export const Container=styled.div`
 width: 30vw;
 background: ${({theme})=>theme.colors["base-input"]};
 margin: 0 2rem;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 padding: 2rem;
 gap: .5rem;
 border-radius: 5px 30px 5px 30px;

 div{
    width: 90%;
    display: flex;
    align-items: center;
   justify-content: space-between;
  
   h4{
    padding: 0px;
    margin: 0px;
   }
 }
 button{
    width: 90%;
    background:${({theme})=>theme.colors["brand-yellow"]};
    height: 2rem;
    border-radius: .5rem;
    border: none;
    :hover{
      background:${({theme})=>theme.colors["brand-yellow-dark"]};
    }
   }
`