import { useEffect, useState } from "react";
import { useSessionStorage } from "./global";

const useCartState = () => {
  const [cart, setCart] = useState({
    items: [],
    total: 0,
    customer: {},
  });
  const [cartSession, setCartSession] = useSessionStorage("cart", cart);

  const addToCart = (product) => {
    if (cart.items.length > 0) {
      return false;
    }
    product = {
      ...product,
      id: `${cart.items.length}-${new Date().getTime()}`,
    };
    setCartSession({
      items: [...cart.items, product],
      total: cart.total + product.price,
    });
    return true;
  };

  const removeFromCart = (product) => {
    const newItems = cart.items.filter((item) => item.id !== product.id);
    const itemToRemove = cart.items.find((item) => item.id === product.id);
    setCartSession({
      items: newItems,
      total: cart.total - product.price * itemToRemove.quantity,
    });
  };

  const updateCartItem = (product) => {
    const newItems = cart.items.map((item) => {
      if (item.id === product.id) {
        return product;
      }
      return item;
    });

    setCartSession({
      items: newItems,
      total: newItems.reduce((acc, item) => acc + item.price, 0),
    });
  };

  const updateCustomer = (customer) => {
    setCartSession({
      items: cart.items,
      total: cart.total,
      customer,
    });
  };

  const clearCart = () => {
    setCart({
      items: [],
      total: 0,
      customer: cart.customer,
    });

    setCartSession({
      items: [],
      total: 0,
      customer: cart.customer,
    });
  };

  useEffect(() => {
    setCart({
      items: !!cartSession.items.length ? cartSession.items : [],
      total: cartSession.total || 0,
      customer: cartSession.customer || {},
    });
  }, [cartSession]);

  return {
    cart,
    addToCart,
    removeFromCart,
    updateCartItem,
    clearCart,
    updateCustomer,
  };
};

export default useCartState;
