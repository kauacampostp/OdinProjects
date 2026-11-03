import { useCars } from "../context/CarsContext";
import { useCart } from "../context/CartContext";
import QuantityInput from "./QuantityInput";

function CartItem() {
  const { cartList, addItem } = useCart();
  const { searchItem } = useCars();

  return (
    <section>
      {cartList.map((item) => {
        const infoItem = searchItem(item.id);

        const totalValue = item.quantity * infoItem.price;

        if (!infoItem) {
          throw new Error("Lista não carregada!");
        }

        return (
          <div>
            <img src={infoItem.images[0]}></img>
            <h3>{infoItem.name}</h3>
            <span>{infoItem.price}</span>
            <span>{totalValue}</span>

            <QuantityInput value={quantity} onChange={addItem} />
          </div>
        );
      })}
    </section>
  );
}

export default CartItem;
