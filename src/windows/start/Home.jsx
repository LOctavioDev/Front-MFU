import { useEffect } from "react";
import Api from "../../utils/Api";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SongCard from "../../components/SongCard";
import ArtistCard from "../../components/ArtistCard";
import { useState } from "react";
import Messages from "../../components/Messages/Messages";

export default function Home() {
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [albumError, setAlbumError] = useState(null);
  const [artistError, setArtistError] = useState(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      const api = new Api(
        "http://localhost:8000/api/Personas/getAllAlbums",
        "POST",
        {
          nombre: "hola",
        }
      );

      const data = await api.call();

      if (data.response) {
        setAlbums(data.result);
      } else {
        setAlbumError("No se encuentran albumes por ahora");
        console.error("Failed to fetch albums: ", data.message);
      }

      setLoading(false);
    };

    const fetchArtists = async () => {
      const api = new Api(
        "http://localhost:8000/api/Personas/getAllArtists",
        "POST",
        {
          nombre: "hola",
        }
      );

      const data = await api.call();

      if (data.response) {
        setArtists(data.result);
      } else {
        setArtistError("No se encuentran artistas por el momento");
        console.error("Failed to fetch artists: ", data.message);
      }

      setLoading(false);
    };
    fetchArtists();
    fetchAlbums();
  }, []);

  return (
    <div className="main">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="container">
        <div className="title-p">
          <h1>Álbumes</h1>
        </div>
        {loading ? (
          <div className="title-p">
            <h1>Cargando...</h1>
          </div>
        ) : (
          <>
            {albumError ? (
              <Messages textError={albumError} />
            ) : (
              <div className="song-list">
                {albums
                  .filter((album) =>
                    album.nombre_album
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  )
                  .map((album, i) => (
                    <SongCard key={i} album={album} />
                  ))}
              </div>
            )}
          </>
        )}

        <div className="title-a">
          <h1>Artistas</h1>
        </div>

        {loading ? (
          <div className="title-p">
            <h1>Cargando...</h1>
          </div>
        ) : (
          <>
            {artistError ? (

              <Messages textError={artistError} />
            ) : (
              <div className="artist-list">
                {artists.map((artist, i) => (
                  <ArtistCard key={i} artist={artist} />
                ))}
              </div>
            )}
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
