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
    labels: ['Comer', 'Beber', 'Dormir', 'Diseñar', 'Programar', 'Correr', 'Cocinar'],
    datasets: [
      {
        label: 'Actividades diarias',
        data: [65, 59, 90, 81, 56, 55, 40],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Opciones del gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Actividades diarias',
      },
    },
  };

  return <Radar data={data} options={options} />;
};

export default RadarChart;