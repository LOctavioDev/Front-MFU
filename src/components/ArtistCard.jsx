import React from "react";

export default function ArtistCard({ artist }) {
  return (
    <div className="artist-card">
      <div
        className="artist-image"
        style={{ backgroundImage: `url(${artist.image})`}}
      ></div>
      <div className="artist-info">
        <h2 className="title-artist">{artist.title}</h2>
      </div>
    </div>
  );
}
