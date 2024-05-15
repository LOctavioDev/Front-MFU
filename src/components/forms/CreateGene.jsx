import React, { useState } from 'react';
import Api from '../../utils/Api.js'

export default function CreateGene({ closeModal }) {
  const [genreData, setGenreData] = useState({
    nombre: '',
    descripcion: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setGenreData({ ...genreData, [id]: value });
  };

  const handleSubmit = async () => {
    try {
      const api = new Api('http://localhost:8000/api/Personas/addGender', 'POST', genreData);
      const response = await api.call();
      
      if (response.response) {
        console.log('CREADO');
        closeModal();
      } else {
        console.error('Error al crear el género:', response.message);
      }
    } catch (error) {
      console.error('Error al crear el género:', error.message);
    }
  };

  return (
    <div className="album-form">
      <h1 className="title-album">Crear género</h1>

      <div className="input-container">
        <label htmlFor="nombre">Nombre del género:</label>
        <input type="text" id="nombre" placeholder="Nombre del género" onChange={handleChange} />
      </div>

      <div className="input-container">
        <label htmlFor="descripcion">Descripción del género: </label>
        <textarea
          id="descripcion"
          placeholder="Escribe una breve descripción"
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="button-container">
        <button className="cancel-button" onClick={closeModal}>
          Cancelar
        </button>
        <button className="create-button" onClick={handleSubmit}>Crear</button>
      </div>
    </div>
  );
}
