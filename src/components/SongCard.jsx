import React from "react";
import { Link } from "react-router-dom";
import AlbumDetail from "./AlbumDetail";

export default function SongCard({ album, onViewAlbum }) {
  // console.log(onViewAlbum(album.id));
  return (
    <div className="song-card">
      <div
        className="song-image"
        style={{ backgroundImage: `url(${album.url_imagen})` }}
      ></div>
      <div className="song-info">
        <h2 className="title-song">{album.nombre_album}</h2>
        <p className="p-song">{album.nombre_artista}</p>
        <button
          className="view-album-btn"
          onClick={() => onViewAlbum(album.id)}
        >
          Ver álbum
        </button>
      </div>
    </div>
  );
}
