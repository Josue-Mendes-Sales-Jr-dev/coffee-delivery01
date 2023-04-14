import {Container} from "./styled"

const Paymemt=()=>{
 return(
    <Container>
        <div>
            <h4>Pagamento</h4>
            <p>O pagamento é feito na entrega. Escolha a
                forma que deseja pagar</p>
        </div>
        <div className="PaymemtBox">
            <button>cartão de Crédito</button>
            <button>cartão de Débito</button>
            <button>No Pix</button>
        </div>
    </Container>
 )
}
export default Paymemt