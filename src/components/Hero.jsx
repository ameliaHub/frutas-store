import "./Hero.css";

import { Link } from "react-router-dom";

export function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="hero">
          <div id="title">Bienvenido a frutas.</div>
          <div id="sub-title">
            Descubre nuestra selección de frutas frescas, radiantes de sabor y
            vitalidad. Enviadas directamente del huerto a tu mesa
          </div>
          <Link to="/store">
            <button id="hero-btn">Comprar ahora</button>
          </Link>
        </div>
      </div>
    </>
  );
}
