import { useState } from "react";
import QuantityInput from "./QuantityInput";
import { useCart } from "../context/CartContext";
import { formatBRL } from "../utils/formatBRL";

function CarCard({ car }) {
  const [quantity, setQuantity] = useState(1);

  const { addItem } = useCart();

  const handleAdd = () => {
    const qty = Math.max(1, parseInt(quantity, 10) || 1);
    addItem(car.id, qty);
    setQuantity(1);
  };

  return (
    <section className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition hover:-translate-y-1 hover:shadow-lg">
      <img
        src={car.images[0]}
        alt={car.name}
        className="w-full aspect-16/10 object-cover"
      />
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="text-lg font-semibold">{car.name}</h3>
        <span className="text-xl font-bold text-cyan-800">
          {formatBRL(car.price)}
        </span>

        {/* mt-auto empurra quantidade e botão para o fundo do card */}
        <div className="mt-auto flex flex-col gap-3 pt-2">
          <QuantityInput value={quantity} onChange={setQuantity} />

          <button
            onClick={handleAdd}
            className="w-full bg-cyan-800 text-white rounded-lg py-2 font-semibold hover:bg-cyan-700 active:scale-95 transition"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default CarCard;
