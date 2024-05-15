import React from "react";
import { useNavigate } from "react-router-dom";

export default function SongCard({ album }) {
  const navigate = useNavigate();

  const handleViewAlbum = () => {
    navigate(`/album/${album.id}`);
  };

  return (
    <div className="song-card">
      <div className="song-image" style={{ backgroundImage: `url(${album.url_imagen})` }}></div>
      <div className="song-info">
        <h2 className="title-song">{album.nombre_album}</h2>
        <p className="p-song">{album.nombre_artista}</p>
        <button className="view-album-btn" onClick={handleViewAlbum}>Ver álbum</button>
      </div>
    </div>
  );
}
