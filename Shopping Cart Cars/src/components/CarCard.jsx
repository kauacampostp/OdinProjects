import { useState } from "react";
import QuantityInput from "./QuantityInput";
import { useCart } from "../context/CartContext";

function CarCard({ car }) {
  const [quantity, setQuantity] = useState(1);

  const { addItem } = useCart();

  return (
    <section>
      <img src={car.images[0]} alt={car.name}></img>
      <div>
        <h3>{car.name}</h3>
        <span>
          {car.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <QuantityInput value={quantity} onChange={setQuantity} />

        <button onClick={() => addItem(car.id, quantity)}>Add To Cart</button>
      </div>
    </section>
  );
}

export default CarCard;
