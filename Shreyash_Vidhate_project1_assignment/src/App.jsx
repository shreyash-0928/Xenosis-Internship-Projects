import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useState, useEffect } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import TaskManager from "./components/TaskManager";
import Header from "./components/Header";
import "./styles/App.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <div className="loading-screen">Loading...</div>;

  return (
    <Router>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/task-manager"
          element={user ? <TaskManager /> : <Login />}
        />
      </Routes>
    </Router>
  );
};

export default App;
