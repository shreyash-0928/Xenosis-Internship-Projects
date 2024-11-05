import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddEntry from "./components/AddEntry";
import ViewEntries from "./components/ViewEntries";
import "./app.css"
function App() {
  const [entries, setEntries] = useState([]);

  const addEntry = (newEntry) => {
    setEntries([...entries, newEntry]);
  };

  const editEntry = (index) => {
    const entryToEdit = entries[index];
    const updatedEntry = {
      title: prompt("Edit title", entryToEdit.title),
      location: prompt("Edit location", entryToEdit.location),
      date: prompt("Edit date", entryToEdit.date),
      description: prompt("Edit description", entryToEdit.description),
    };
    const updatedEntries = entries.map((entry, i) =>
      i === index ? updatedEntry : entry
    );
    setEntries(updatedEntries);
  };

  const deleteEntry = (index) => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-entry" element={<AddEntry addEntry={addEntry} />} />
        <Route
          path="/view-entries"
          element={
            <ViewEntries
              entries={entries}
              editEntry={editEntry}
              deleteEntry={deleteEntry}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
