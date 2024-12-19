import { useState, useEffect } from "react";
import { getTwitterData } from "../../services/socialMediaService"; // Example service
import BarChart from "../Charts/BarChart";
import APIKeyForm from "../Forms/APIKeyForm";
import "../../styles/dashboard.css";

const Dashboard = () => {
  const [apiKey, setApiKey] = useState("");
  const [socialData, setSocialData] = useState({});
  const [error, setError] = useState("");

  // Fetch social media data
  useEffect(() => {
    if (apiKey) {
      getTwitterData(apiKey)
        .then((data) => setSocialData(data))
        .catch(() => setError("Failed to fetch social media data"));
    }
  }, [apiKey]);

  const handleAPIKeySubmit = (key) => {
    setApiKey(key);
  };

  const data = {
    labels: ["Followers", "Posts", "Engagement"],
    datasets: [
      {
        label: "Metrics",
        data: [
          socialData.followers || 0,
          socialData.posts || 0,
          socialData.engagement || 0,
        ],
        backgroundColor: ["#3b82f6", "#ec4899", "#22c55e"],
      },
    ],
  };

  return (
    <div className="dashboard">
      <h2>Social Media Dashboard</h2>
      <p>Followers: {socialData.followers}</p>
      <p>Posts: {socialData.posts}</p>
      <p>Engagement: {socialData.engagement}</p>
      <APIKeyForm onSubmit={handleAPIKeySubmit} />
      {error && <p className="error">{error}</p>}
      {apiKey && <BarChart data={data} />}
    </div>
  );
};

export default Dashboard;
