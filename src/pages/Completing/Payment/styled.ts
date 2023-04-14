import styled from "styled-components";
export const Container=styled.div`

margin: 2rem;
display: flex;
align-items: center;
flex-direction: column;
gap: 1.5rem;
justify-content: center;
background: ${({theme})=>theme.colors["base-input"]};
width: 50vw;
height: 10rem;
.PaymemtBox{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}
button{
    padding: .5rem;
    background: ${({theme})=>theme.colors["base-hover"]};
    height: 3rem;
    border: none;
    border-radius: 3px;
    text-transform: uppercase;
    font-size: .8rem;
    width: 11.5rem;
    :hover{
        background: ${({theme})=>theme.colors["base-button"]};

    }
}
`