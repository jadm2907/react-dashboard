import React, { useState } from 'react';
import ChartComponent from './ChartComponent';
import LineChart from './LineChart';
import PieChart from './PieChart';
import RadarChart from './RadarChart';
import FormularioEmociones from './FormularioEmociones';
import { Grid, Paper, Typography, Box } from '@mui/material';

const MainContent = () => {
  const [update, setUpdate] = useState(false);

  const handleUpdate = () => {
    setUpdate(!update); // Forzar la actualización del gráfico
  };

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
            <RadarChart update={update} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ padding: 2 }}>
            <FormularioEmociones onUpdate={handleUpdate} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent;