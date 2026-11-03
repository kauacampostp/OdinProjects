import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <>
      {/* Toda pagina vai receber o Navbar. O Outlet é preenchido pelo padrão ou quando é clicado o link */}
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;
