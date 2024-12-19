import PropTypes from "prop-types";
import "../styles/HomePage.css";

function VideoCard({ video, onClick }) {
  return (
    <div className="video-card" onClick={onClick}>
      <img
        src={video.thumbnail}
        alt={video.title}
        className="video-thumbnail"
      />
      <h3 className="video-title">{video.title}</h3>
      <p className="video-description">{video.description}</p>
    </div>
  );
}

VideoCard.propTypes = {
  video: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default VideoCard;
