import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEntry = ({ addEntry }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addEntry({ title, location, date, description });
    setTitle("");
    setLocation("");
    setDate("");
    setDescription("");
  };

  const navigate = useNavigate();
  0
  const handleBack = (e) => {
    navigate(-1)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <button type="submit">Add Entry</button>
      <button onClick={handleBack}>Back</button>
    </form>
  );
};

export default AddEntry;
