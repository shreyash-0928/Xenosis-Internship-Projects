// src/components/Checkout.jsx
import { useNavigate } from "react-router-dom";
import "../styles/checkout.css";

const Checkout = () => {
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    // Mock payment processing
    alert("Payment Successful! Your order has been placed.");
    navigate("/"); // Redirect to home or order confirmation page
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form className="checkout-form" onSubmit={handlePayment}>
        <div className="form-group">
          <label>Card Number</label>
          <input type="text" placeholder="1234 5678 9012 3456" required />
        </div>
        <div className="form-group">
          <label>Expiry Date</label>
          <input type="text" placeholder="MM/YY" required />
        </div>
        <div className="form-group">
          <label>CVV</label>
          <input type="text" placeholder="123" required />
        </div>
        <button className="pay" type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Checkout;
