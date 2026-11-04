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
    <main className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Carrinho</h1>

      {cartList.length === 0 && (
        <div className="flex flex-col items-center gap-4 py-12 text-center">
          <div className="text-gray-600">
            Seu carrinho está vazio. Vá comprar!
          </div>
          <NavLink
            to="/shop"
            className="bg-cyan-800 text-white rounded-lg px-6 py-2 font-semibold hover:bg-cyan-700"
          >
            Ir para a Loja
          </NavLink>
        </div>
      )}

      {cartList.length !== 0 && (
        <>
          <div className="flex flex-col gap-4">
            {cartList.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-6 flex justify-end border-t border-gray-300 pt-4">
            <span className="text-xl font-bold">Total: {formatBRL(total)}</span>
          </div>
        </>
      )}
    </main>
  );
}

export default Cart;
