import "./Navbar.css";
import { SearchBar } from "./SearchBar";
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <div className="navbar-left">
            <Link to="/">
              <button id="logo" className="navbar-btn">
                frutas.
              </button>
            </Link>

            <Link to="/">
              <button className="navbar-btn navbar-link">Inicio</button>
            </Link>
            <Link to="store">
              <button className="navbar-btn navbar-link">Tienda</button>
            </Link>
          </div>

          <div className="navbar-right">
            <SearchBar></SearchBar>
            <FaRegHeart id="fav-items" />
            <Link to="/cart">
              <FaCartPlus id="cart-items" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
