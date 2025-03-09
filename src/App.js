import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

// Componente para proteger rutas privadas
const PrivateRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  const [user, setUser] = useState(null); // Estado para almacenar el usuario autenticado

  return (
    <Router>
      <Header />
      <Sidebar />
      <Routes>
        {/* Ruta pública: Login */}
        <Route path="/login" element={<Login onLogin={setUser} />} />

        {/* Ruta pública: Registro */}
        <Route path="/register" element={<Register onRegister={setUser} />} />

        {/* Ruta privada: Dashboard */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute user={user}>
              <Dashboard user={user} />
            </PrivateRoute>
          }
        />

        {/* Ruta por defecto: Redirigir a /login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;