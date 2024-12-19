// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { loadStripe } from "@stripe/stripe-js"; // Import Stripe loader
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProductPage from "./pages/ProductPage";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Home from "./pages/Home";
import { AuthProvider } from "./context/AuthContext";



// const stripePromise = loadStripe("your-publishable-key-here"); 

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Page Route */}
          <Route path="/products" element={<ProductPage />} />{" "}
          {/* ProductPage Route */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
