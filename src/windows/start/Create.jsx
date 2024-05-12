import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import img1 from "../../assets/music.svg";
import img2 from "../../assets/micro.svg";
import img3 from "../../assets/user.svg";
import img4 from "../../assets/disc.svg";

export default function Create() {
  return (
    <div>
      <Navbar />
      <div className="container">
        
        <div className="title-p2">
          <h2>¿Qué deseas crear?</h2>
          <h3>Por favor, selecciona lo que quieras crear.</h3>
        </div>

        <div className="create-list">
          <div className="create-item">
            <img src={img1} alt="nota de musica" /> Álbum
          </div>
          <div className="create-item">
            <img src={img2} alt="nota de musica" /> Letra
          </div>
          <div className="create-item">
            <img src={img3} alt="nota de musica" /> Artista
          </div>
          <div className="create-item">
            <img src={img4} alt="nota de musica" /> Género
          </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
}
