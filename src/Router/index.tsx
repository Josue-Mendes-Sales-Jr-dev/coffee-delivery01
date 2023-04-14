import { Layout } from "../components/Layout"
import{Routes,Route} from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { Completing } from "../pages/Completing"


export const Router=()=>{
    return(
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="/completing" element={<Completing/>}/>
            </Route>
        </Routes>
    )
}