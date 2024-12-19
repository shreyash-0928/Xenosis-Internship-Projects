import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase-config"; 
import { onAuthStateChanged, signOut } from "firebase/auth";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe; // Clean up the listener on unmount.
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      alert("Logout successful!");
    } catch (error) {
      console.error("Error during logout:", error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Define prop types for AuthProvider
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // 'children' must be a React node
};
