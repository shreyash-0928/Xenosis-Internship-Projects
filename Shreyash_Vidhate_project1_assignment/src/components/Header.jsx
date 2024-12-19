import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/Header.css";

const Header = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <header className="header">
      <h1>Real-Time Task Manager</h1>
      {user && (
        <nav>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </nav>
      )}
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
};

export default Header;
