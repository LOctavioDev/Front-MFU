import React from "react";

export default function CreateWord({ closeModal }) {
  return (
    <div className="album-form">
      <h1 className="title-album">Crear letra</h1>

      <div className="input-container">
        <label htmlFor="song-title">Título de la canción</label>
        <input type="text" id="song-title" placeholder="Título" />
      </div>

      <div className="input-container">
        <label htmlFor="artist-name">Artista</label>
        <input type="text" id="artist-name" placeholder="Nombre del artista" />
      </div>

      <div className="double-input-container">
        <div className="input-container">
          <label htmlFor="album">Álbum:</label>
          <input type="text" id="album" placeholder="Selecciona el álbum" />
        </div>
        <div className="input-container">
          <label htmlFor="genre">Género musical:</label>
          <input
            type="text"
            id="genre"
            placeholder="Selecciona el género musical"
          />
        </div>
      </div>

      <div className="input-container">
        <label htmlFor="url">URL del vídeo: </label>
        <input type="text" id="url" placeholder="Pega el URL del vídeo" />
      </div>

      <div className="input-container">
        <label htmlFor="word-name">Letra: </label>
        <textarea id="word-name" placeholder="Escribe la letra de la canción"></textarea>
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
