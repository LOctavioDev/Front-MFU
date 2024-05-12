import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SongCard from "../../components/SongCard";
import ArtistCard from "../../components/ArtistCard";

// TODO: consumir con la api
const songs = [
  {
    id: 1,
    title: "Moscow Mule",
    artist: "Bad Bunny",
    image: "https://i.scdn.co/image/ab67616d00001e0249d694203245f241a1bcaa72",
  },
  {
    id: 3,
    title: "7/8",
    artist: "Wos",
    image: "https://i.scdn.co/image/ab67616d00001e02c678828a5678109a13f20ba2",
  },
  {
    id: 4,
    title: "The Tortured Poets...",
    artist: "Artista 4",
    image: "https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33",
  },
  {
    id: 5,
    title: "Golden",
    artist: "Jung Kook",
    image: "https://i.scdn.co/image/ab67616d00001e02741fd4807f442af3f7359316",
  },
  {
    id: 6,
    title: "Heaven and Hell",
    artist: "Black Sabbath",
    image: "https://i.scdn.co/image/ab67616d00001e02a48447e72e8c507054c2ec2e",
  },
  {
    id: 7,
    title: "Led Zeppelin",
    artist: "Led Zeppelin",
    image: "https://i.scdn.co/image/ab67616d00001e026f2f499c1df1f210c9b34b32",
  },
];

const artists = [
  {
    title: "Taylor Swift",
    image: "https://i.scdn.co/image/ab67616100005174e672b5f553298dcdccb0e676",
  },
  {
    title: "Bad Bunny",
    image: "https://i.scdn.co/image/ab6761610000e5eb9ad50e478a469448c6f369df",
  },
  {
    title: "Jung Kook",
    image:
      "https://0.soompi.io/wp-content/uploads/sites/8/2023/07/15200256/20230716013316_Jungkook-4.jpg",
  },
  {
    title: "The Beatles",
    image:
      "https://cdn.britannica.com/18/136518-050-CD0E49C6/The-Beatles-Ringo-Starr-Paul-McCartney-George.jpg",
  },
  {
    title: "Black Sabbath",
    image: "https://i.scdn.co/image/ab67616d0000b273e61731abae915074b93416e9",
  },
  {
    title: "Oasis",
    image: "https://i.scdn.co/image/ab6761610000e5eba572b3112ccbf374488fed58",
  },
];

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="title-p">
          <h1>Álbumes</h1>
        </div>

        <div className="song-list">
          {songs.map((song, i) => (
            <SongCard key={i} song={song} />
          ))}
        </div>

        <div className="title-a">
          <h1>Artistas</h1>
        </div>

        <div className="artist-list">
          {artists.map((artist, i) => (
            <ArtistCard key={i} artist={artist} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
