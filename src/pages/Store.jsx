import { useEffect, useState } from "react";

import { Fruit } from "../components/Fruit";
import { Link } from "react-router-dom";

import "./Store.css";

export function Store() {
  const [fruits, setFruits] = useState([]);

  //leer datos
  useEffect(() => {
    fetch("/data/fruits.json")
      .then((res) => res.json())
      .then((data) => setFruits(data));
  }, []);

  return (
    <>
      <div className="store-container">
        {fruits.map((fruit) => (
          <Link to={`/store/${fruit.name}`}>
            <Fruit
              key={fruit.name}
              nombre={fruit.name}
              img={fruit.image}
            ></Fruit>
          </Link>
        ))}
      </div>
    </>
  );
}
