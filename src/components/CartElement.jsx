import { useContext } from "react";
import { Context } from "../context/Context";

import { CartItemCounter } from "./CartItemCounter";

export function CartElement({ fruit }) {
  const { cart, setCart } = useContext(Context);

  function deleteElement(name) {
    const elementToDelete = cart.find((element) => element.name === name);

    const newCart = cart.filter((element) => {
      return element !== elementToDelete;
    });

    setCart(newCart);
  }

  return (
    <>
      <div className="cart-element-container">
        <img src={fruit.image} alt="" />
        <div className="name">{fruit.name}</div>
        <div className="price">{fruit.price}</div>
        <button
          className="delete-element"
          onClick={() => deleteElement(fruit.name)}
        >
          ❌
        </button>
        <CartItemCounter fruit={fruit}></CartItemCounter>
      </div>
    </>
  );
}
