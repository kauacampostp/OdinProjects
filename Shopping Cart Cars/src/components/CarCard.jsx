import { useState } from "react";
import QuantityInput from "./QuantityInput";
import { useCart } from "../context/CartContext";
import { formatBRL } from "../utils/formatBRL";

function CarCard({ car }) {
  const [quantity, setQuantity] = useState(1);

  const { addItem } = useCart();

  return (
    <section>
      <img src={car.images[0]} alt={car.name}></img>
      <div>
        <h3>{formatBRL(car.name)}</h3>
        <span>{car.price}</span>
        <QuantityInput value={quantity} onChange={setQuantity} />

        <button onClick={() => addItem(car.id, quantity)}>Add To Cart</button>
      </div>
    </section>
  );
}

export default CarCard;
