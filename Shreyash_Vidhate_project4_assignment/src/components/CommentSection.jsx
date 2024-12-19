import PropTypes from "prop-types";
import { useState } from "react";
import "../styles/VideoDetailPage.css";

function CommentSection({ comments, onCommentSubmit }) {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      onCommentSubmit(newComment);
      setNewComment("");
    }
  };

  return (
    <div className="comment-section">
      <h4>Comments</h4>
      {comments.map((comment, index) => (
        <p key={index}>{comment}</p>
      ))}
      <form onSubmit={handleSubmit} className="comment-form">
        <input
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCommentSubmit: PropTypes.func.isRequired,
};

export default CommentSection;
