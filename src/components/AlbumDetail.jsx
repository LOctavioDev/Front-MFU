import React, { useEffect, useState } from "react";
import Api from "../utils/Api";

export default function AlbumDetail({ albumId }) {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(albumId+'111');
    const fetchSongs = async () => {
      const api = new Api(
        "https://site--apimfu--4nfy6d8474fb.code.run/api/Personas/getAlbumMusic", 
        "POST",
        {
          id: albumId
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
      <h1>Álbum {albumId}</h1>
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
