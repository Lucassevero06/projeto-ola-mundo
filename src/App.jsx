import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";

//window.location.pathname é uma forma nativa do javascript para saber a url
//usado justamente para criar routas da aplicação
// console.log(window.location.pathname); //forma de saber a url e criar routes

// const pagina = window.location.pathname === '/' ? <Inicio/> : <SobreMim/>

function App() {
  
  return (
    // serve para criar rotas da aplicação
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<h1>Página não encontrada 404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
