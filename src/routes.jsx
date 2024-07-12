import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio/Inicio";
import SobreMim from "./paginas/SobreMim/SobreMim";
import Menu from "./componentes/Menu/Menu";
import Rodape from "./componentes/Rodape/Rodape";
import PaginaPadrao from "./componentes/PaginaPadrao/PaginaPadrao";
import Post from "./paginas/Post/Post";

//window.location.pathname é uma forma nativa do javascript para saber a url
//usado justamente para criar routas da aplicação
// console.log(window.location.pathname); //forma de saber a url e criar routes

// const pagina = window.location.pathname === '/' ? <Inicio/> : <SobreMim/>

function AppRoutes() {
  
  return (
    // serve para criar rotas da aplicação
    <BrowserRouter>
      <Menu />

      {/* Routes aninhadas */}
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
          <Route path="/posts/:id" element={<Post />} />
        </Route>

        <Route path="*" element={<h1>Página não encontrada 404</h1>} />
      </Routes>

      <Rodape/>
    </BrowserRouter>
  )
}

export default AppRoutes;
