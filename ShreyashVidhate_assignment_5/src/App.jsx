import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import VideoPage from "./pages/VideoPage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import PrivateRoute from "./components/Auth/PrivateRoute";
import './styles/App.css';
import VideoUpload from "./components/Video/VideoUpload";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<VideoUpload/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/video/:id" element={<PrivateRoute component={VideoPage} />} />
      </Routes>
    </Router>
  );
};

export default App;
