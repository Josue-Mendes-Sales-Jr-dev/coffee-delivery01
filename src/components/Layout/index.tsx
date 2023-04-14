import {Outlet} from "react-router-dom"

import {ContainerLayout} from "./styled"
import { Header } from "./Header"

export const Layout=()=>{
    return(
        <>
          <ContainerLayout>
            <Header/>
            <Outlet/>
          </ContainerLayout>
            
        </>
    )
}