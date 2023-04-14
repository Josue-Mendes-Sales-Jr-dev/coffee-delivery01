import styled from "styled-components";
 export const Container=styled.div`
 display: flex;
 flex-direction: column;
 padding:2rem;
 margin:0 2rem;
 align-items: center;
 justify-content: center;
 background: ${({theme})=>theme.colors["base-input"]};
 width: 50vw;;
 gap: 2rem;
 @media screen and (max-width:800px) {
    width: 85%;
 }
`

 export const Form=styled.form`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 30% 30% 30%;
  gap: 1rem;
  grid-template-areas: 
  "CEP CEP CEP"
  "Rua Rua Rua"
  "N Comp Comp"
  "Ba City UF";

  input{
    padding: 0.5rem;
    
  }
 .inputCep{
    grid-area: CEP;
    width: 30%;
 }
 .inputStreet{
    grid-area: Rua;
 }
 .inputN{
    grid-area: N;
 }
 .inputC{
    grid-area:Comp;
 }
 .inputB{
    grid-area:Ba;
 }
 .inputCity{
    grid-area:City; 
 }
 .inputUF{ 
    grid-area:UF;   
 }
 `

