import React from "react";

export default function SongCard({ song }) {
  return (
    <div className="song-card">
      <div className="song-image" style={{backgroundImage: `url(${song.image})`}}>
      </div>
      <div className="song-info">
        <h2 className="title-song">{song.title}</h2>
        <p className="p-song">{song.artist}</p>
        <button className="view-album-btn">Ver álbum</button>
      </div>
    </div>
  );
}
