import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Paper } from '@mui/material';

// Registra los componentes de Chart.js
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const PieChart = () => {
  // Datos para el gráfico
  const data = {
    labels: ['Pensamiento introvertido', 'Sentimental introvertido', 'Sensación - introvertido', 'Intuitivo - introvertido', 'Pensamiento extrovertido', 'Sensación - extrovertido'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
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
        text: 'Tipos de personalidad según Jung',
      },
    },
  };

  return (
    <Paper sx={{ padding: 2, height: '400px' }}>
      <Pie data={data} options={options} />
    </Paper>
  );
};

export default PieChart;