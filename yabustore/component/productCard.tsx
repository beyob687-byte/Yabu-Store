
export default function ProductCard({ product }) {
  return (
    <div>
      <div>
        <h2>{product.name}</h2>
      </div>

      <div>
        <h4>{product.price}</h4>
      </div>

      <div>
        <h4>{product.category}</h4>
      </div>

      <div>
        <h4>
          {product.available ? "It's Available" : "Out of Product"}
        </h4>
      </div>
    </div>
  );
}
