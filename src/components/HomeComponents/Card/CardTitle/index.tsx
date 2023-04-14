import {TitleContainer,H1} from './styled'

interface ICardTitleProps{
  text1:string;
  text2:string;
  text3:string;

}
export const CardTitle:React.FC<ICardTitleProps>=({text1,text2,text3})=>{
    return(
        <TitleContainer >
           <H1 none={text1}>
            {text1}
           </H1>
           <H1 none={text2}>
            {text2}
           </H1>
           <H1 none={text3}>
            {text3}
           </H1>
        </TitleContainer>
    )
}