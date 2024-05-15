import React from "react";

export default function ArtistCard({ artist }) {
  return (
    <div className="artist-card">
      <div
        className="artist-image"
        style={{ backgroundImage: `url(${artist.url_imagen})` }}
      ></div>
      <div className="artist-info">
        <h2 className="title-artist">{artist.nombre_artista}</h2>
      </div>
    </div>
  );
}
