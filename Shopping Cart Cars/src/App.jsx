import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      {/* Mantém o histórico do navegador para navegar sem carregar */}
      <BrowserRouter>
        {/* Conteiner que mantém as possiveis rotas para ir quando for chamada */}
        <Routes>
          {/* Rota. "/" caminho padrão. element = é qual pagina abrir. Layout mantém a mesma base e somente atualiza a parte desejada (sem carregar a pagina) */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
