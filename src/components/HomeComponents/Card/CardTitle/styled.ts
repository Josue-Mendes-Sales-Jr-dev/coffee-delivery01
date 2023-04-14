import styled from "styled-components";

interface IH1props{
   none:string;
}
export const TitleContainer=styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   gap: .5rem;
   
`
export const H1=styled.h1<IH1props>`
    font-size: .9rem;
    border-radius: 2px;
    padding: .2rem;
    color: ${({theme})=>theme.colors["brand-yellow"]};
    background: ${props=>props.none==""?'none':props.theme.colors["brand-yellow-light"]};
    display:${props=>props.none==""?'none':'flex'} ;
   border-radius: 5px;
`