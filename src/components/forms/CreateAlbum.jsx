import React, { useState, useEffect } from "react";
import Api from "../../utils/Api.js";

export default function CreateAlbum({ closeModal }) {
  const URL_API = "https://site--apimfu--4nfy6d8474fb.code.run/api/Personas";
  const END_POINT_ARTISTAS = "getAllArtist";
  const END_POINT_GENEROS = "getAllGenders";

  const [albumData, setAlbumData] = useState({
    artista: "",
    nombre: "",
    año: "",
    // url_imagen: "",
    // genero: "",
  });
  const [artistas, setArtistas] = useState([]);
  const [generos, setGeneros] = useState([]);

  useEffect(() => {

    const fetchArtistas = async () => {
      try {
        const api = new Api(`${URL_API}/${END_POINT_ARTISTAS}`, "POST");
        const response = await api.call();
        if (response.response) {
          setArtistas(response.result);
        } else {
          console.error(
            "Error al obtener la lista de artistas:",
            response.message
          );
        }
      } catch (error) {
        console.error("Error al obtener la lista de artistas:", error.message);
      }
    };

    const fetchGeneros = async () => {
      try {
        const api = new Api(`${URL_API}/${END_POINT_GENEROS}`, "POST");
        const response = await api.call();
        if (response.response) {
          setGeneros(response.result);
        } else {
          console.error(
            "Error al obtener la lista de géneros:",
            response.message
          );
        }
      } catch (error) {
        console.error("Error al obtener la lista de géneros:", error.message);
      }
    };

    fetchArtistas();
    fetchGeneros();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setAlbumData({ ...albumData, [id]: value });
  };

  const handleSubmit = async () => {
    console.log(albumData);
    try {
      const api = new Api(`${URL_API}/addAlbum`, "POST", albumData);
      const response = await api.call();

      if (response.response) {
        console.log("Álbum creado exitosamente");
        closeModal();
      } else {
        console.error("Error al crear el álbum:", response.message);
      }
    } catch (error) {
      console.error("Error al crear el álbum:", error.message);
    }
  };

  return (
    <div className="album-form">
      <h1 className="title-album">Crear álbum</h1>

      <div className="input-container">
        <label htmlFor="album-url">URL de la imagen:</label>
        <input
          type="text"
          id="url_imagen"
          placeholder="URL de la imagen"
          // onChange={handleChange}
        />
      </div>

      <div className="input-container">
        <label htmlFor="album-title">Título del álbum:</label>
        <input
          type="text"
          id="nombre"
          placeholder="Título del álbum"
          onChange={handleChange}
        />
      </div>

      <div className="input-container">
        <label htmlFor="album-artist">Artista:</label>
        <select id="artista" onChange={handleChange}>
          <option value="">Selecciona un artista</option>
          {artistas.map((artista, i) => (
            <option key={i} value={artista.id}>
              {artista.nombre_artista}
            </option>
          ))}
        </select>
      </div>

      <div className="double-input-container">
        <div className="input-container">
          <label htmlFor="album-year">Año de lanzamiento:</label>
          <input
            type="number"
            id="año"
            placeholder="Año de lanzamiento"
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="album-genre">Género musical:</label>
          <select id="genero">
            <option value="">Selecciona un género musical</option>
            {generos.map((genero, i) => (
              <option key={i} value={genero.id}>
                {genero.nombre_genero}
              </option>
            ))}
          </select>
        </div>
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
