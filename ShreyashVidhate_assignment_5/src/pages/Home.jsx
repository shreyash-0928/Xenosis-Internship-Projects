import React from "react";
import VideoList from "../components/Video/VideoList";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Video Streaming Platform</h1>
      <Link to="/upload">
        <button>Upload Video</button>
      </Link>
      <VideoList />
    </div>
  );
};

export default Home;
