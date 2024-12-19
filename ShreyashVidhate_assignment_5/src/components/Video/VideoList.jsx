import React, { useEffect, useState } from "react";
import { db } from "../../services/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const querySnapshot = await getDocs(collection(db, "videos"));
      setVideos(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchVideos();
  }, []);

  return (
    <div className="video-list">
      {videos.map((video) => (
        <Link to={`/video/${video.id}`} key={video.id} className="video-card">
          <img src={video.thumbnail || "default-thumbnail.jpg"} alt={video.title} />
          <h3>{video.title}</h3>
          <p>{video.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default VideoList;
