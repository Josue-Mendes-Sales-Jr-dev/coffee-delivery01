import { Container } from "./styled"
import Coffee from "../../../assets/imgs/Coffee (1).svg"

export const PaymemtCard=()=>{
    return(
        <Container>
            <img className="coffeeImg" src={Coffee} alt="coffee1" />
            <div className="Box">
                <p>Expresso Tradicional</p>
                <div className="BtnBox">
                    <div>
                        <button>-</button>
                        <p>1</p>
                        <button>+</button>
                    </div>
                   <button>Remove</button>
                </div>
            </div>
             <p className="P">R$ 9,90</p>
        </Container>
    )
}