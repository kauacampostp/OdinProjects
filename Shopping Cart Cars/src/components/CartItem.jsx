import { useCars } from "../context/CarsContext";
import { useCart } from "../context/CartContext";
import QuantityInput from "./QuantityInput";
import { formatBRL } from "../utils/formatBRL";

function CartItem({ item }) {
  const { updateQuantity, removeItem } = useCart();
  const { searchItem } = useCars();
  const infoItem = searchItem(item.id);

  if (!infoItem) {
    return null;
  }

  const totalValue = item.quantity * infoItem.price;

  return (
    <section>
      <img src={infoItem.images[0]} alt={infoItem.name}></img>
      <h3>{infoItem.name}</h3>
      <span>{formatBRL(infoItem.price)}</span>
      <span>{formatBRL(totalValue)}</span>

      <QuantityInput
        value={item.quantity}
        onChange={(newQuantity) => updateQuantity(item.id, newQuantity)}
      />

      <button onClick={() => removeItem(item.id)}>Remove</button>
    </section>
  );
}

export default CartItem;
