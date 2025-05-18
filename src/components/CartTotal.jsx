import { useContext } from "react";
import { Context } from "../context/Context";

export function CartTotal() {
  const { cart } = useContext(Context);

  const total = cart.reduce((acc, el) => acc + el.price * el.quantity, 0);

  return (
    <>
      <div className="cart-total-container">
        <div className="total">Total a pagar: {total}</div>
      </div>
    </>
  );
}
