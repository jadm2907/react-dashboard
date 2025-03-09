import React from 'react';
import ChartComponent from './ChartComponent';
import LineChart from './LineChart';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <h2>Bienvenido al Dashboard</h2>
      <p>Este es un ejemplo de un dashboard en React.</p>
      <div className="chart-container">
        <ChartComponent />
        <LineChart />
      </div>
    </main>
  );
};

export default MainContent;