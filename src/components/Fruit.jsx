import "./Fruit.css";
export function Fruit({ nombre, img, precio }) {
  return (
    <div className="fruit">
      <img className="fruit-img" src={img} alt={nombre} />
      <h3 className="fruit-name">{nombre}</h3>
      {/* Solo muestra el precio si existe */}
      {precio !== undefined && <div className="precio">Precio: {precio} €</div>}
    </div>
  );
}
