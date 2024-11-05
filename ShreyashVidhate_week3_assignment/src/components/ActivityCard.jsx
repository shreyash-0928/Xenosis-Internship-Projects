// src/components/ActivityCard.jsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ActivityCard = ({ date, steps, calories, time }) => {
  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{date}</Typography>
        <Typography color="text.secondary">Steps: {steps}</Typography>
        <Typography color="text.secondary">Calories: {calories}</Typography>
        <Typography color="text.secondary">Workout Time: {time} mins</Typography>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
