import "../styles/HomePage.css";
import VideoList from "../components/VideoList";

function HomePage() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to Video Explorer</h1>
        <p>Discover the best videos tailored to your interests!</p>
      </div>
      <div className="content-section">
        <VideoList />
      </div>
    </div>
  );
}

export default HomePage;
