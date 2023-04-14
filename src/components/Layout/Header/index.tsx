import { Link } from "react-router-dom"

import Logo from "../../../assets/imgs/Logo (1).png"
import Location from "../../../assets/imgs/Location.png"
import Car from "../../../assets/imgs/Cart.png"

import { HeaderMainLayout } from "../styled"

export const Header=()=>{
    return(
        <HeaderMainLayout>
            <Link to='/'>
                <img src={Logo} alt="logo" />
            </Link>
            <Link to='/'>
                <img src={Location} alt="logo" />
                <span><img src={Car} alt="logo" /></span>
            </Link>
          </HeaderMainLayout>
    )
}