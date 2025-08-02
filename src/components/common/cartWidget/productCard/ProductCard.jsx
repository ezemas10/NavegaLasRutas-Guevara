import "./productCard.css";
const ProductCard = ({ product }) => {
  const { title, description, price , stock, category, imageUrl} = product;
  return (
    <div style={{ border: "1px solid black" }}>
      <h1>{title}</h1>
      <h2>Precio: {price}</h2>
      <h2>{description}</h2>
      <img src = {imageUrl}></img>
      <h2>Stock: {stock}</h2>
      <h2>Tipo: {category}</h2>
    </div>
  );
};

export default ProductCard;
