import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import axios from 'axios';

const FormularioEmociones = ({ onUpdate }) => {
  const [valores, setValores] = useState({
    Ansiedad: 0,
    Culpa: 0,
    Rabia: 0,
    Tristeza: 0,
    Miedo: 0,
    Vergüenza: 0,
    Orgullo: 0,
    Alegría: 0,
    Angustia: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValores({ ...valores, [name]: parseInt(value, 10) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/emociones', {
        data: Object.values(valores),
      });
      onUpdate(); // Actualiza el gráfico
    } catch (error) {
      console.error('Error updating emociones data:', error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      {Object.keys(valores).map((emocion) => (
        <TextField
          key={emocion}
          label={emocion}
          name={emocion}
          type="number"
          value={valores[emocion]}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
      ))}
      <Button type="submit" variant="contained" color="primary">
        Actualizar emociones
      </Button>
    </Box>
  );
};

export default FormularioEmociones;