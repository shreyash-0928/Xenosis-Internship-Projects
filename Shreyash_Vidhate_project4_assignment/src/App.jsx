// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import VideoDetailPage from "./pages/VideoDetailPage";
import UploadPage from "./pages/UploadPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ProtectedRoute from "./components/ProtectedRoute";
import "./styles/App.css";

function App() {
  // Simulated list of videos
  const [videos, setVideos] = useState([
    {
      id: "1",
      title: "React Tutorial",
      description: "Learn React from scratch.",
      url: "/videos/react-tutorial.mp4", // Replace with Firebase URLs
    },
    {
      id: "2",
      title: "Firebase Guide",
      description: "Getting started with Firebase.",
      url: "/videos/firebase-guide.mp4",
    },
  ]);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage videos={videos} />} />
          <Route
            path="/video/:videoId"
            element={<VideoDetailPage videos={videos} />}
          />
          <Route
            path="/upload"
            element={
              <ProtectedRoute>
                <UploadPage setVideos={setVideos} />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
