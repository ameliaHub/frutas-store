import { useContext } from "react";
import { Context } from "../context/Context";

export function CartItemCounter({ fruit }) {
  const { cart, setCart } = useContext(Context);

  function addQuantity(fruit) {
    setCart(
      cart.map((f) =>
        f.name === fruit.name ? { ...f, quantity: f.quantity + 1 } : f
      )
    );
  }

  function decreaseQuantity(fruit) {
    if (fruit.quantity != 1) {
      setCart(
        cart.map((f) =>
          f.name === fruit.name ? { ...f, quantity: f.quantity - 1 } : f
        )
      );
    }
  }

  return (
    <>
      <div className="">
        <button onClick={() => decreaseQuantity(fruit)}>-</button>
        <p>{fruit.quantity}</p>
        <button onClick={() => addQuantity(fruit)}>+</button>
      </div>
    </>
  );
}
