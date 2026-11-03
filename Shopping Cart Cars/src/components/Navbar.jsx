import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { totalItems } = useCart();
  return (
    <nav>
      {/* NavLink sbae quando está ativo, bom para a nevegação e estilização. O Link é bom para dentro da propria pagina, ex: ver detalhes */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/cart">Cart {totalItems}</NavLink>
    </nav>
  );
}

export default Navbar;
