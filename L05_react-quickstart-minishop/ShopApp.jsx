import { useState } from "react";

const products = [
  { id: 1, title: "Cabbage", price: 1.5, isFruit: false, popular: false },
  { id: 2, title: "Garlic", price: 2.0, isFruit: false, popular: true },
  { id: 3, title: "Apple", price: 3.25, isFruit: true, popular: true },
  { id: 4, title: "Mango", price: 4.0, isFruit: true, popular: false },
];

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <h3>
        {product.title} {product.popular && <span>⭐ Popular</span>}
      </h3>

      <p
        style={{
          color: product.isFruit ? "magenta" : "darkgreen",
        }}
      >
        ${product.price}
      </p>

      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

export default function ShopApp() {
  const [cartCount, setCartCount] = useState(0);

  function handleAddToCart() {
    setCartCount(cartCount + 1);
  }

  function handleRemoveOne() {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  }

  return (
    <div className="shop">
      <h1>Mini Fruit & Veg Stand</h1>

      <p>
        {cartCount === 0
          ? "Cart is empty"
          : `${cartCount} item${cartCount > 1 ? "s" : ""} in cart`}
        <button onClick={handleRemoveOne} style={{ marginLeft: "10px" }}>
          Remove one
        </button>
      </p>

      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}