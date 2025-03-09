import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Paper } from '@mui/material';

// Registra los componentes de Chart.js
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart = () => {
  // Datos para el gráfico
  const data = {
    labels: ['Ansiedad', 'Culpa', 'Rabia', 'Tristeza', 'Miedo', 'Verguenza', 'Orgullo'],
    datasets: [
      {
        label: 'Emociones diarias',
        data: [65, 59, 90, 81, 56, 55, 40, 35, 15],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Opciones del gráfico
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Permite que el gráfico se ajuste al contenedor
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Emociones diarias',
      },
    },
  };

  return (
    <Paper sx={{ padding: 2, height: '400px' }}>
      <Radar data={data} options={options} />
    </Paper>
  );
};

export default RadarChart;