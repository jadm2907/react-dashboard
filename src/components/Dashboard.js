import React from 'react';
import { Typography, Box } from '@mui/material';

const Dashboard = ({ user }) => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Bienvenido, {user.username}!
      </Typography>
      <Typography variant="body1">
        Este es tu dashboard personalizado.
      </Typography>
    </Box>
  );
};

export default Dashboard;