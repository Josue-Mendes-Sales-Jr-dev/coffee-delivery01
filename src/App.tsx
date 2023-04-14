import {GlobalStyle} from "./styles/themeGlobal/styleGlobal"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes"
import { BrowserRouter} from "react-router-dom"
import { Router } from "./Router"
function App() {
  
  return (
    <>
    <ThemeProvider theme={defaultTheme}>
    <GlobalStyle/>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
    </ThemeProvider>
     
    </>
  )
}

export default App


