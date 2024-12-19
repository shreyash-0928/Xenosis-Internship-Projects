import React, { useState, useEffect } from "react";
import { db } from "../../services/firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

const CommentsSection = ({ videoId }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const querySnapshot = await getDocs(collection(db, `videos/${videoId}/comments`));
      setComments(querySnapshot.docs.map((doc) => doc.data()));
    };
    fetchComments();
  }, [videoId]);

  const handleComment = async () => {
    if (!comment) return;
    const commentRef = collection(db, `videos/${videoId}/comments`);
    await addDoc(commentRef, { text: comment, createdAt: new Date() });
    setComments([...comments, { text: comment }]);
    setComment("");
  };

  return (
    <div className="comments-section">
      <h3>Comments</h3>
      <div className="comments-list">
        {comments.map((c, index) => (
          <p key={index}>{c.text}</p>
        ))}
      </div>
      <textarea
        placeholder="Add a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button onClick={handleComment}>Post</button>
    </div>
  );
};

export default CommentsSection;
