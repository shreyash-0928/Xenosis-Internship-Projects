import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../services/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import ReactPlayer from "react-player";
import CommentsSection from "../components/Video/CommentsSection";

const VideoPage = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      const docSnap = await getDoc(doc(db, "videos", id));
      if (docSnap.exists()) setVideo(docSnap.data());
    };
    fetchVideo();
  }, [id]);

  if (!video) return <p>Loading...</p>;

  return (
    <div className="video-page">
      <ReactPlayer url={video.url} controls />
      <h2>{video.title}</h2>
      <p>{video.description}</p>
      <CommentsSection videoId={id} />
      <h3>Recommended Videos</h3>
      {/* Add recommendation logic here */}
    </div>
  );
};

export default VideoPage;
