import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Toda pagina vai receber o Navbar. O Outlet é preenchido pelo padrão ou quando é clicado o link */}
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
