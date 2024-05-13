import React from "react";

export default function CreateArtist({ closeModal }) {
  return (
    <div className="album-form">
      <h1 className="title-album">Crear artista</h1>

      <div className="input-container">
        <label htmlFor="artist-title">Nombre del artista:</label>
        <input type="text" id="artist-title" placeholder="Título" />
      </div>

      <div className="input-container">
        <label htmlFor="description">Descripción del artista: </label>
        <textarea
          id="description"
          placeholder="Escribe una breve descripción"
        ></textarea>
      </div>

      <div className="button-container">
        <button className="cancel-button" onClick={closeModal}>
          Cancelar
        </button>
        <button className="create-button">Crear</button>
      </div>
    </div>
  );
}
