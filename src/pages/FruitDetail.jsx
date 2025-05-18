import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context"; //para k tenga acceso al carrito

import "./FruitDetail.css";

export function FruitDetail() {
  const { fruitName } = useParams(); // lee lo que esté en la URL
  const [fruit, setFruit] = useState(null);
  const { cart, setCart } = useContext(Context);

  useEffect(() => {
    fetch("/data/fruits.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find(
          (f) => f.name.toLowerCase() === fruitName.toLowerCase()
        );
        setFruit(selected);
      });
  }, [fruitName]);

  function addProductToCart(fruit) {
    console.log(cart);
    if (cart.find((item) => item.name === fruit.name) != null) {
      //si el carrito ya tiene ese elemento

      setCart(
        cart.map((f) =>
          f.name === fruit.name ? { ...f, quantity: f.quantity + 1 } : f
        )
      );
    } else {
      setCart([...cart, fruit]); //...cart para copiar los productos q ya estaban en el carrito, para no sobreescribirlos con un unico producto
      console.log(cart);
    }
  }

  if (!fruit) return <p>Cargando...</p>;

  return (
    <div className="fruit-detail-container">
      <div className="fruit-detail">
        <img className="detail-fruit-img" src={fruit.image} alt={fruit.name} />
        <div className="fruit-info-container">
          <h2 className="detail-fruit-name">{fruit.name}</h2>
          <p className="detail-fruit-description">{fruit.description}</p>
          <div className="detail-btns-container">
            <button className="detail-btn" id="detail-buy-btn">
              Comprar ahora
            </button>
            <button
              onClick={() => addProductToCart(fruit)}
              className="detail-btn"
              id="detail-cart-btn"
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
