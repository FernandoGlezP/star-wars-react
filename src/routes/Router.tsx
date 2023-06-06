import { BrowserRouter, Route, Routes } from "react-router-dom"
import Prueba from "../pages/prueba"
import Characters from "../pages/characters"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Prueba/>} path="/prueba"/>
        <Route element={<Characters/>} path="/"/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router