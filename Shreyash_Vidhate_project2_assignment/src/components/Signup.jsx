// src/components/Signup.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // for navigation after signup
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config"; // Firebase auth import
import { Link } from "react-router-dom";
import "../styles/login.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // For navigation after successful signup

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password); // Firebase signup
      navigate("/login"); // Redirect to login after signup
    } catch (err) {
      setError(err.message); // Set error message
    }
  };

  return (
    <div className="signup">
      <form onSubmit={handleSignup}>
        <h2 className="auth-heading">Sign Up</h2>
        {error && <p className="error">{error}</p>} {/* Show error if exists */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="main-btn" type="submit">
          Sign Up
        </button>
        <div className="second-btn">
          <span className="span">
            {`Already have an account?`}
            <Link to="/login">Login</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signup;
