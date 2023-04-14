import { useState } from "react";
import { CardTitle } from "./CardTitle"
import {CardContainer,
    CardBox,TextBox,
    ValueBox,BtnValue,
    CarBox} from "./styled"
import Car from "../../../assets/imgs/Cart.png"
import { Link } from "react-router-dom";

interface ICardProps{
    image:string;
    txt1:string;
    txt2:string;
    txt3:string
    value:number;
    setValue:number;
}

export const Card:React.FC<ICardProps>=({image,txt1,txt2,txt3})=>{
    const [value,setValue]= useState(0)

    const handleClick=()=>{
        setValue((e)=>e+1)
    }
    const handleClickSub=()=>{
        if(value>0){
        setValue((e)=>e-1)}else{
            alert('Não é possível número negativo no pedido!')
        }
        
    }
    return(
        <CardContainer>
           <CardBox>
            <img className="img" src={image} alt="" />
            <CardTitle text1={txt1} text2={txt2} text3={txt3}/>
            <TextBox>
                <h1>Expresso Tradicional</h1>
                <p>O tradicional café feito 
                    com água quente e grãos
                     moídos</p>
            </TextBox>
            <ValueBox>
            <div>
                <p>R$ <span>9,90</span></p>
            </div>
            <CarBox>
                <BtnValue>
                    <button onClick={handleClickSub}>-</button>
                    {value}
                    <button onClick={handleClick}>+</button>
                </BtnValue>
                <Link to="/completing">
                    <img src={Car} alt="car" />
                </Link>
            </CarBox>
            </ValueBox>
            </CardBox>       
         </CardContainer>

    )
}