import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/VideoList.css";

function VideoList() {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("coding tutorials");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const apiKey = "AIzaSyDesKgrj87n1xDped8Iq5Snmlyq7A8slec";
  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`,
          {
            params: {
              part: "snippet",
              maxResults: 9,
              q: searchTerm,
              key: apiKey,
            },
          }
        );
        setVideos(response.data.items);
        setError(""); // Clear previous errors on success
      } catch (err) {
        if (err.response) {
          setError(
            `Error ${err.response.status}: ${err.response.data.error.message}`
          );
        } else if (err.request) {
          setError(
            "No response received. Please check your network connection."
          );
        } else {
          setError("An unexpected error occurred.");
        }
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [searchTerm]);

  return (
    <div className="video-list">
      <h2>Explore Videos</h2>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.trim())}
          placeholder="Search for videos"
          className="search-input"
        />
      </div>

      <div className="videos">
        {loading && <p>Loading videos...</p>}
        {error && <p className="error-message">{error}</p>}
        {videos.map((video) => (
          <div key={video.id.videoId} className="video-card">
            <div className="video-thumbnail">
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title={video.snippet.title}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="video-details">
              <h3>{video.snippet.title}</h3>
              <p>{video.snippet.description.substring(0, 100)}...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoList;
