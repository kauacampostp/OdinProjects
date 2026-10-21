import { useContext, createContext, useState } from "react";

// Cria um contexto ("Quadro de funções") que pode ser usada sem passar por props
const CartContext = createContext(null);

// Esse é o que disponibiliza as funcionalidade desse quadro | children é tudo que está entre as tags <div>Aqui ficam os childrens<div>
export function CartProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  // Recebe o id e a quantidade do carro que vai ser adiconado no carrinho
  function addItem(id, quantity) {
    // Quando fazemos isso, o elemento declarado é o array antigo (prev)
    setCartList((prev) => {
      const exists = prev.some((item) => item.id === id); // Verifica na lista antiga se existe um elemento com o mesmo ID enviado | O some retorna true ou false para a busca

      // Se não existe, adiciona um novo elemento a lista
      if (!exists) {
        return [...prev, { id, quantity }];
      }

      // Caso exista, atualiza somente a quantidade dentro do carrinho
      return prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + quantity } : item,
      );
    });
  }

  // Atualiza a quantidade dos botões +/- e o input dos itens
  function updateQuantity(id, quantity) {
    if (quantity < 1) return;

    setCartList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  }

  // Remove um item do carrinho
  function removeItem(id) {
    setCartList((prev) => prev.filter((item) => item.id !== id));
  }

  // Soma o todos os itens | .reduce() define dois valore: o primeiro é uma função executada para cada item do array (recebe acumulador e elemento atual) (callback), o segundo informa qual o valor dessa variavel.
  const totalItems = cartList.reduce((sum, item) => sum + item.quantity, 0);

  // Tudo que os outros poderão usar
  const value = {
    cartList,
    addItem,
    updateQuantity,
    removeItem,
    totalItems,
  };

  // Quando usa o createContext, é criado o traminssor de sinal .Provider que recebe as ferramentas que pode usar (Value) e quem pode receber o sinal (childrens)
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// Abstração para deixar mais limpo e capturar erros nas chamadas em componentes. usado para receber o sinal de radio
export function useCart() {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart precisa estar dentro de um <CartProvider>");
  }

  return context;
}

export default CartContext;
