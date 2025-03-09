import React from 'react';
import ChartComponent from './ChartComponent';
import LineChart from './LineChart';
import PieChart from './PieChart';
import RadarChart from './RadarChart';
import { Grid, Paper, Typography, Box } from '@mui/material';

const MainContent = () => {
    return (
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Bienvenido al Dashboard
        </Typography>
        <Typography variant="body1" paragraph>
          Este es un ejemplo de un dashboard en React.
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 2 }}>
              <ChartComponent />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 2 }}>
              <LineChart />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 2 }}>
              <PieChart />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 2 }}>
              <RadarChart />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    );
  };
  
  export default MainContent;