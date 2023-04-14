import styled from "styled-components";

export const Container=styled.div`
display: flex;
gap:0.5rem;
 height: 6rem;
 border-bottom: 1px solid ${(props)=>props.theme.colors["base-hover"]};
 padding: 20px 0;
 margin-bottom: 1rem;

.coffeeImg{
    width: 4rem;
}
.Box{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .5rem;
}
.BtnBox{
    display: flex;       
    gap:0.5rem;
    button{
        padding: 0rem;
    }
}
.P{
    flex-basis: 100px;
    font-weight: 600;
}
`