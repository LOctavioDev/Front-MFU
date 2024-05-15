import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../utils/Api";

export default function AlbumDetail() {
  const { albumId } = useParams();
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
      const api = new Api(
        "http://localhost:8000/api/Personas/getAlbumMusic", 
        "POST",
        {
          id: albumId,
        }
      );

      const data = await api.call();

      if (data.response) {
        setSongs(data.result);
      } else {
        setError("No se pudieron obtener las canciones del álbum");
        console.error("Failed to fetch songs: ", data.message);
      }

      setLoading(false);
    };

    fetchSongs();
  }, [albumId]);

  return (
    <div className="album-detail">
      <h1>Álbum {albumId}</h1> {/* Aquí podrías obtener y mostrar más detalles del álbum si es necesario */}
      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="song-list">
          {songs.map((song, index) => (
            <div key={index} className="song-card">
              <h2>{song.nombre_cancion}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
