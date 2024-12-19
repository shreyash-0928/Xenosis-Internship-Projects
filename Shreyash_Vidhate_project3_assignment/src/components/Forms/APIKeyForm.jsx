import { useState } from "react";
import "../../styles/apikeyform.css";

const APIKeyForm = ({ onSubmit }) => {
  const [apiKey, setApiKey] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!apiKey) {
      setError("API Key is required!");
      return;
    }

    // Clear the error and pass the API key to the parent component or backend
    setError("");
    onSubmit(apiKey);
  };

  return (
    <div className="api-form">
      <h2>Enter API Key</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="API Key"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default APIKeyForm;
