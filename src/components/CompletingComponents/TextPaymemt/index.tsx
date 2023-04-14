import {Container} from "./styled"

export const TextPaymemt=()=>{
    return(
        <Container>
          <div>
            <p>Total de Item</p>
            <span>valor</span>
          </div>
          <div>
            <p>taxa da entrega</p>
            <span>valor</span>
          </div>
          <div>
            <h4>Total</h4>
            <span>valor</span>
          </div>
          <button>Confirmar pedido</button>
        </Container>
    )
}