import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

const baseLink = "px-3 py-2";

const linkClass = ({ isActive }) =>
  `${baseLink} ${
    isActive
      ? "font-bold border-b-2 border-white"
      : "opacity-80 hover:opacity-100"
  }`;

function Navbar() {
  const { totalItems } = useCart();
  return (
    <nav
      aria-label="Principal"
      className="bg-cyan-800 text-white py-3 flex justify-between items-center sticky top-0 z-10 md:justify-start  "
    >
      {/* NavLink sbae quando está ativo, bom para a nevegação e estilização. O Link é bom para dentro da propria pagina, ex: ver detalhes */}
      <NavLink to="/" end className={linkClass}>
        Home
      </NavLink>
      <NavLink to="/shop" className={linkClass}>
        Shop
      </NavLink>
      <NavLink
        to="/cart"
        className={(state) => `${linkClass(state)} md:ml-auto`}
      >
        Cart
        {totalItems > 0 ? (
          <span
            aria-label={`${totalItems} itens no carrinho`}
            className="ml-1 rounded-full bg-white text-cyan-800 text-xs font-bold px-2 py-0.5"
          >
            {totalItems}
            <span className="sr-only">itens no carrinho</span>
          </span>
        ) : null}
      </NavLink>
    </nav>
  );
}

export default Navbar;
