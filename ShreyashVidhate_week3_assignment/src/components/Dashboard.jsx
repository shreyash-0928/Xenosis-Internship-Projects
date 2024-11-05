// src/components/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import ActivityCard from './ActivityCard';
import LogForm from './LogForm';
import { Box, Typography } from '@mui/material';

const Dashboard = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const savedActivities = JSON.parse(localStorage.getItem('activities')) || [];
    setActivities(savedActivities);
  }, []);

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(activities));
  }, [activities]);

  const handleAddActivity = (activity) => {
    setActivities([activity, ...activities]);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Fitness Challenge Tracker
      </Typography>
      <LogForm onAddActivity={handleAddActivity} />
      <Box>
        {activities.map((activity, index) => (
          <ActivityCard key={index} {...activity} />
        ))}
      </Box>
    </Box>
  );
};

export default Dashboard;
