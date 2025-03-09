import React, { useEffect, useState } from 'react';
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
import axios from 'axios';
import { Update } from '@mui/icons-material';

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
  const [emocionesData, setEmocionesData] = useState({
    labels: [],
    datasets: [],
  });

  // Obtener datos de la API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/emociones');
        setEmocionesData(response.data);
      } catch (error) {
        console.error('Error fetching emociones data:', error);
      }
    };

    fetchData();
}, [Update]); // Escucha cambios en la prop `update`

  // Opciones del gráfico
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Registro emociones',
      },
    },
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };

  return (
    <Paper sx={{ padding: 2, height: '400px' }}>
      <Radar data={emocionesData} options={options} />
    </Paper>
  );
};

export default RadarChart;