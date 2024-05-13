import DAD from "./DAD";

export default function CreateAlbum({ closeModal }) {
  
  return (
    <div className="album-form">
      <h1 className="title-album">Crear álbum</h1>

      <DAD />

      <div className="input-container">
        <label htmlFor="album-title">Título del álbum:</label>
        <input type="text" id="album-title" placeholder="Título" />
      </div>

      <div className="input-container">
        <label htmlFor="artist">Artista:</label>
        <input type="text" id="artist" placeholder="Nombre del artista" />
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

      <div className="button-container">
        <button className="cancel-button" onClick={closeModal}>
          Cancelar
        </button>
        <button className="create-button">Crear</button>
      </div>
    </div>
  );
}
