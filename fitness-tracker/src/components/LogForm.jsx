// src/components/LogForm.jsx
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const LogForm = ({ onAddActivity }) => {
  const [steps, setSteps] = useState('');
  const [calories, setCalories] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const activity = {
      date: new Date().toLocaleDateString(),
      steps,
      calories,
      time,
    };
    onAddActivity(activity);
    setSteps('');
    setCalories('');
    setTime('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
      <TextField
        label="Steps Taken"
        type="number"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Calories Burned"
        type="number"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Workout Time (mins)"
        type="number"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Log Activity
      </Button>
    </Box>
  );
};

export default LogForm;
