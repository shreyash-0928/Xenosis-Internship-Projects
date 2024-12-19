// src/pages/Dashboard.jsx
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" replace />; // Redirect if not logged in
  }

  return (
    <div>
      <h1>Welcome to your Dashboard, {user.name}!</h1>
    </div>
  );
};

export default Dashboard;
