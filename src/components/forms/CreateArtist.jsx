import React, { useState } from "react";
import Api from "../../utils/Api.js";

export default function CreateArtist({ closeModal }) {
  const [artistData, setArtistData] = useState({
    nombre: "",
    descripcion: "",
    debut: "2000",
    genero: 1,
    fecha_registro: "2020-01-01"
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setArtistData({ ...artistData, [id]: value });
  };

  const handleSubmit = async () => {
    try {
      const api = new Api(
        "https://site--apimfu--4nfy6d8474fb.code.run/api/Personas/addArtist",
        "POST",
        artistData
      );
      const response = await api.call();

      if (response.response) {
        console.log("Artista creado exitosamente");
        closeModal();
      } else {
        console.error("Error al crear el artista:", response.message);
      }
    } catch (error) {
      console.error("Error al crear el artista:", error.message);
    }
  };

  return (
    <div className="album-form">
      <h1 className="title-album">Crear artista</h1>

      <div className="input-container">
        <label htmlFor="artist-name">Nombre del artista:</label>
        <input
          type="text"
          id="nombre"
          placeholder="Nombre del artista"
          onChange={handleChange}
        />
      </div>

      <div className="input-container">
        <label htmlFor="artist-description">Descripción del artista:</label>
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
        <button className="create-button" onClick={handleSubmit}>
          Crear
        </button>
      </div>
    </div>
  );
}
