import { PaymemtCard } from "../PaymemtCard"
import { TextPaymemt } from "../TextPaymemt"
import { Container } from "./styled"


export const ComfirmPaymemtBox=()=>{
    return(
        <Container>
          <PaymemtCard/>
          <PaymemtCard/>
          <TextPaymemt/>
        </Container>
    )
}