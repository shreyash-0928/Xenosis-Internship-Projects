import { useState, useEffect } from "react";
import "../styles/product-list.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    currentCart.push(product); // Add the full product object, including image
    localStorage.setItem("cart", JSON.stringify(currentCart));
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="product-list">
      <h2>Our Products</h2>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="product-items">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <h3>{product.title}</h3>
              <p>{product.description.substring(0, 100)}...</p>
              <p>${product.price}</p>
              <button
                className="add-cart-btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
