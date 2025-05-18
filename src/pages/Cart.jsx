import { CartElement } from "../components/CartElement";
import { useContext } from "react";
import { Context } from "../context/Context";
import { CartTotal } from "../components/CartTotal";
import { GoContainer } from "react-icons/go";

export function Cart() {
  const { cart } = useContext(Context);
  return (
    <>
      {cart.length > 0 ? (
        <div className="cart-container">
          {cart.map((fruit) => (
            <CartElement key={fruit.name} fruit={fruit}></CartElement>
          ))}
          <CartTotal></CartTotal>
        </div>
      ) : (
        <div className="cart-empty-message-container">VACIO</div>
      )}
    </>
  );
}
