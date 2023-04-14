import styled from "styled-components";

export const CardContainer=styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 20rem;
   height: 20rem;

`
export const CardBox=styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   gap: 1rem;
   width: 16rem;
   height: 16rem;
   background-color: ${({theme})=>theme.colors["base-card"]};
   border:none;
   border-top-right-radius:50px;
   border-top-left-radius:5px;
   border-bottom-left-radius:50px;
   border-bottom-right-radius:5px;
   .img{
      width: 6rem;
   }
`
export const TextBox=styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   width: 80%;
   gap: 1rem;
   h1{
      font-size: 1.2rem;
   }
   p{
      font-size: .7rem;
      text-align: center;
   }
`
export const ValueBox=styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   justify-content: center;
   gap: 1.5rem;
   margin-bottom: 3rem;
   span{
      font-size: 1.6rem;
      font-weight: 600;
   }
    
`
export const CarBox=styled.div`
   display: flex;
   align-items: center;
   width: 40%;
   justify-content: center;
   gap: 0.5rem;
  
  
`

export const BtnValue=styled.div`
      background-color: ${({theme})=>theme.colors["base-button"]};
      display:flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 5px;
      button{
      width: 2em;
      height: 2.2rem;
      border: none;
      background:none;
     
    }
`