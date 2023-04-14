import { Container,Form } from "./styled"
export const FormC=()=>{
    return(
        <Container>
        <div>
            <p>Endereço de Entrega</p>
            <p>Informe o endereço onde deseja receber seu pedido</p>
            
        </div>
        <Form>
             
                    <input className="inputCep" type="text" placeholder="CEP"/>
              
                    <input className="inputStreet" type="text" placeholder="Rua" />
               
                    <input className="inputN" type="tel" placeholder="Número" />
               
                    <input className="inputC" type="text" placeholder="Complemento" />
               
                    <input className="inputB" type="text" placeholder="Bairro" />
                
                    <input className="inputCity" type="text" placeholder="Cidade" />

                    <input className="inputUF" type="text" placeholder="UF" />
               
            </Form>
            </Container>
    )
}