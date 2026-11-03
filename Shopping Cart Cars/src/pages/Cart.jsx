import { useCart } from "../context/CartContext";
import { useCars } from "../context/CarsContext";
import CartItem from "../components/CartItem";
import { formatBRL } from "../utils/formatBRL";
import { NavLink } from "react-router-dom";

function Cart() {
  const { cartList } = useCart();
  const { searchItem } = useCars();

  const total = cartList.reduce((acc, item) => {
    const infoItem = searchItem(item.id);

    if (!infoItem) return acc;

    return acc + item.quantity * infoItem.price;
  }, 0);

  return (
    <main>
      {cartList.length === 0 && (
        <>
          <div>Seu carrinho está vazio. Vá comprar! </div>
          <NavLink to="/shop">Ir para a Loja</NavLink>
        </>
      )}

      {cartList.length !== 0 && (
        <>
          {cartList.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <div>
            <span>Total: {formatBRL(total)}</span>
          </div>
        </>
      )}
    </main>
  );
}

export default Cart;
