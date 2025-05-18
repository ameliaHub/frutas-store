import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

export function SearchBar() {
  return (
    <>
      <div className="searchbar-and-icon-container">
        <FaSearch id="search-icon" />
        <input className="searchbar" placeholder="Buscar..." />
      </div>
    </>
  );
}
