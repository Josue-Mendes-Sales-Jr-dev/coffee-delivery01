import ImageCoffe from "../../../assets/imgs/GlassCoffe.svg"

import {
    Page1Container,
    Page1TextBox,
    Page1TitleTextBox,
    Page1Items
} from "./styled"

export const Page01=()=>{
    return(
        <Page1Container>

            <Page1TextBox>

              <Page1TitleTextBox>
              <h1>
              Encontre o café perfeito para qualquer hora do dia
              </h1>
              <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
              </p>
              </Page1TitleTextBox>
              <Page1Items>
                <div>
                    <p>
                    Compra simples e segura
                    </p>
                </div>
                <div>
                    <p>Embalagem mantém o café intacto</p>
                </div>
                <div>
                    <p>Entrega rápida e rastreada</p>
                </div>
                <div>
                    <p>O café chega fresquinho até você</p>
                </div>
              </Page1Items>
            </Page1TextBox>

            <img src={ImageCoffe} alt="Coffe" />

        </Page1Container>
    )
}