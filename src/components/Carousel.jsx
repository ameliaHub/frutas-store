import { useState } from "react";
import { useEffect } from "react";

import "./Carousel.css";

import { Link } from "react-router-dom";

export function Carousel() {
  const [fruits, setFruits] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleFruits = [];

  //leer datos
  useEffect(() => {
    fetch("/data/fruits.json")
      .then((res) => res.json())
      .then((data) => setFruits(data));
  }, []);

  //auto slide
  useEffect(() => {
    if (fruits.length === 0) return;

    const slideInterval = setInterval(() => {
      setCurrentIndex((prevState) => (prevState + 1) % fruits.length);
    }, 2000);

    return () => clearInterval(slideInterval); // Limpia al desmontar
  }, [fruits.length]);

  const prevSlide = () => {
    setCurrentIndex(
      (prevState) => (prevState - 1 + fruits.length) % fruits.length
    );
  };
  const nextSlide = () => {
    setCurrentIndex((prevState) => (prevState + 1) % fruits.length);
  };

  if (fruits.length === 0) return <p>Loading...</p>;

  for (let i = 0; i < 3; i++) {
    const index = (currentIndex + i) % fruits.length;
    visibleFruits.push(fruits[index]);
  }

  return (
    <>
      <div className="carousel-and-btn-container">
        <button className="carousel-btn" onClick={prevSlide}>
          ←
        </button>

        <div className="carousel">
          {visibleFruits.map((fruit) => (
            <Link to={`/store/${fruit.name}`}>
              <div className="carousel-fruit" key={fruit.name}>
                <img
                  className="carousel-fruit-img"
                  src={fruit.image}
                  alt={fruit.name}
                />
                <h3 className="carousel-fruit-name">{fruit.name}</h3>
              </div>
            </Link>
          ))}
        </div>
        <button className="carousel-btn" onClick={nextSlide}>
          →
        </button>
      </div>
    </>
  );
}
