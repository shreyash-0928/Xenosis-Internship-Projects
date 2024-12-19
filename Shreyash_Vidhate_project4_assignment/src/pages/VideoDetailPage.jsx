import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { recommendVideos } from "../utils/recommendationEngine";
import CommentSection from "../components/CommentSection";
import "../styles/VideoDetailPage.css";

function VideoDetailPage({ videos }) {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const [recommendedVideos, setRecommendedVideos] = useState([]);

  useEffect(() => {
    const selectedVideo = videos.find((v) => v.id === videoId);
    setVideo(selectedVideo);

    const recommendations = recommendVideos(videos, [videoId]);
    setRecommendedVideos(recommendations);
  }, [videoId, videos]);

  const handleCommentSubmit = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div className="video-detail-page">
      {video && (
        <>
          <video src={video.url} controls className="video-player"></video>
          <h2>{video.title}</h2>
          <p>{video.description}</p>
          <CommentSection
            comments={comments}
            onCommentSubmit={handleCommentSubmit}
          />
          <h4>Recommended Videos</h4>
          <div className="recommended-videos">
            {recommendedVideos.map((rv) => (
              <div key={rv.id} className="recommended-video">
                <p>{rv.title}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

VideoDetailPage.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default VideoDetailPage;
