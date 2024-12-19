// src/pages/Home.jsx
import { Link } from "react-router-dom"; // Import Link for navigation
import "../styles/home.css"; // Add a CSS file for styling

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Our E-Commerce Store</h1>
      <p>Explore our wide range of products and shop your favorites!</p>
      <Link to="/products">Go to Products</Link> {/* Link to Product Page */}
    </div>
  );
};

export default Home;
