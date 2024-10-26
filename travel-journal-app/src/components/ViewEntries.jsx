import { useNavigate } from "react-router-dom";

const ViewEntries = ({ entries, editEntry, deleteEntry }) => {
  const navigate = useNavigate();
  0;
  const handleBack = (e) => {
    navigate(-1);
  };
  return (
    <div>
      {entries.length === 0 ? (
        <p>No entries available. Add some!</p>
      ) : (
        entries.map((entry, index) => (
          <div key={index}>
            <h2>{entry.title}</h2>
            <p>{entry.location}</p>
            <p>{entry.date}</p>
            <p>{entry.description}</p>
            <button onClick={() => editEntry(index)}>Edit</button>
            <button onClick={() => deleteEntry(index)}>Delete</button>
            <button onClick={handleBack}>Back</button>
          </div>
        ))
      )}
    </div>
  );
};

export default ViewEntries;
