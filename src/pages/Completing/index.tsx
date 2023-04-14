import { ComfirmPaymemtBox } from "../../components/CompletingComponents/ComfirmPaymemtBox"
import { FormC } from "./FormC"
import Paymemt from "./Payment"

import {Container,PaymemtBox} from "./styled"

export const Completing=()=>{
    return(
        <Container>
            <div>
                <h4>Complete seu pedido</h4>
                <FormC/>
                <Paymemt/>
            </div>
            <PaymemtBox>
              <h4>Cafés selecionados</h4>
              <ComfirmPaymemtBox/>
            </PaymemtBox>
        </Container>
    )
}