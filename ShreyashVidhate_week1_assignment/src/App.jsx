import React, { useState } from "react";
import "./App.css"; // Add basic styles in a separate CSS file

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    let errors = {};

    if (!name) errors.name = "Name is required";
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email format is invalid";
    }
    if (!rating) errors.rating = "Rating is required";
    if (!comments) errors.comments = "Comments are required";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="feedback-form">
      <h1>Customer Feedback Form</h1>
      {submitted ? (
        <div className="submitted-data">
          <h2>Thank you for your feedback!</h2>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Rating:</strong> {rating}
          </p>
          <p>
            <strong>Comments:</strong> {comments}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {formErrors.name && <p className="error">{formErrors.name}</p>}
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {formErrors.email && <p className="error">{formErrors.email}</p>}
          </div>
          <div>
            <label>Rating (1-5):</label>
            <input
              type="range"
              value={rating}
              min="1"
              max="5"
              onChange={(e) => setRating(e.target.value)}
            />
            {formErrors.rating && <p className="error">{formErrors.rating}</p>}
          </div>
          <div>
            <label>Comments:</label>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
            {formErrors.comments && (
              <p className="error">{formErrors.comments}</p>
            )}
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default App;
