import styled from "styled-components";

export const Page1Container=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
  min-height: 34rem;
  gap: 2rem;
  margin-bottom: 5rem;

`



export const Page1TextBox=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:2rem;
  width: 50%;
`


export const Page1TitleTextBox=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
  gap:1rem;
  width: 80%;
   h1{
    color: ${({theme})=>theme.colors["base-title"]};
    font-weight: 800;
    font-size: 2.4rem;
   }
   p{
    color: ${({theme})=>theme.colors["base-text"]};
    font-size: 1.2rem;
   }
`


export const Page1Items=styled.div`
    margin-top: 2rem;
    display: grid; 
    width: 100%;
    grid-template-columns: auto auto;
    gap: 1rem 3rem;
    align-items: center;
    justify-content: center;

`