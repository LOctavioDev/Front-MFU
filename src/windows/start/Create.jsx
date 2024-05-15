import React, { useState } from "react";
import CreateAlbum from "../../components/forms/CreateAlbum";
import Modal from "../../components/Modal";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import img1 from "../../assets/music.svg";
import img2 from "../../assets/micro.svg";
import img3 from "../../assets/user.svg";
import img4 from "../../assets/disc.svg";
import CreateWord from "../../components/forms/CreateWord";
import CreateArtist from "../../components/forms/CreateArtist";
import CreateGene from "../../components/forms/CreateGene";

export default function Create() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalName) => {
    setActiveModal(modalName);
    console.log("OPEN MODAL");
    
  };

  const closeModal = () => {
    setActiveModal(null);
    console.log("CLOSE MODAL");
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="title-p2">
          <h2>¿Qué deseas crear?</h2>
          <h3>Por favor, selecciona lo que quieras crear.</h3>
        </div>

        <Modal isOpen={activeModal === "album"} closeModal={closeModal}>
          <CreateAlbum closeModal={closeModal} />
        </Modal>
        <Modal isOpen={activeModal === "word"} closeModal={closeModal}>
          <CreateWord closeModal={closeModal} />
        </Modal>
        <Modal isOpen={activeModal === "artist"} closeModal={closeModal}>
          <CreateArtist closeModal={closeModal}/>
        </Modal>
        <Modal isOpen={activeModal === "gene"} closeModal={closeModal}>
          <CreateGene closeModal={closeModal}/>
        </Modal>

        <div className="create-list">
          <div className="create-item" onClick={() => openModal("album")}>
            <img src={img1} alt="nota de musica" /> Álbum
          </div>
          <div className="create-item" onClick={() => openModal("word")}>
            <img src={img2} alt="nota de musica" /> Letra
          </div>
          <div className="create-item" onClick={() => openModal("artist")}>
            <img src={img3} alt="nota de musica" /> Artista
          </div>
          <div className="create-item" onClick={() => openModal("gene")}>
            <img src={img4} alt="nota de musica" /> Género
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
