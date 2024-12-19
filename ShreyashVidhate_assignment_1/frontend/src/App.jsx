// src/App.jsx
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Auth/Logn";
import Register from "./components/Auth/Register";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogForm from "./components/BlogForm";
import BlogList from "./components/BlogList";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/create-blog" element={<BlogForm />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
