import React from 'react';
import { Paper, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Paper sx={{ padding: 2, marginTop: 'auto' }} elevation={3}>
      <Typography variant="body2" align="center">
        © 2023 React Dashboard
      </Typography>
    </Paper>
  );
};

export default Footer;