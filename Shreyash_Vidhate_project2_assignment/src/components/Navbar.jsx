// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav>
      <h1 className="main-heading">E-commerce</h1>
      <div>
        <Link className="nav-btn" to="/">
          Home
        </Link>
        <Link className="nav-btn" to="/products">
          Products
        </Link>
        <Link className="nav-btn" to="/cart">
          Cart
        </Link>
        {user ? (
          <button className="nav-btn out-btn" onClick={logout}>
            Logout
          </button>
        ) : (
          <Link className="nav-btn" to="/login">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
