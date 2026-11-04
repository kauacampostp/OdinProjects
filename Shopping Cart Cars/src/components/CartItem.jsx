import { useState } from "react";
import { useCars } from "../context/CarsContext";
import { useCart } from "../context/CartContext";
import QuantityInput from "./QuantityInput";
import { formatBRL } from "../utils/formatBRL";

function CartItem({ item }) {
  const { updateQuantity, removeItem } = useCart();
  const { searchItem } = useCars();
  // O que o usuário está digitando fica aqui; o contexto só recebe números válidos
  const [draft, setDraft] = useState(item.quantity);

  const infoItem = searchItem(item.id);

  if (!infoItem) {
    return null;
  }

  const handleChange = (value) => {
    setDraft(value);
    const n = parseInt(value, 10);
    if (n >= 1) updateQuantity(item.id, n);
  };

  const totalValue = item.quantity * infoItem.price;

  return (
    <section className="flex flex-wrap items-center gap-4 bg-white rounded-xl shadow-md p-4">
      <img
        src={infoItem.images[0]}
        alt={infoItem.name}
        className="w-24 h-20 object-cover rounded-lg"
      />

      <div className="flex-1 min-w-40">
        <h3 className="font-semibold">{infoItem.name}</h3>
        <span className="text-sm text-gray-600">
          {formatBRL(infoItem.price)}
        </span>
      </div>

      {/* No celular essa linha ocupa a largura toda; de sm pra cima fica ao lado */}
      <div className="flex w-full items-center justify-between gap-3 sm:w-auto">
        <QuantityInput value={draft} onChange={handleChange} />
        <span className="font-bold text-cyan-800">{formatBRL(totalValue)}</span>
        <button
          onClick={() => removeItem(item.id)}
          className="text-red-700 hover:underline"
        >
          Remove
        </button>
      </div>
    </section>
  );
}

export default CartItem;
