import React, { useState, useEffect } from "react";
/* eslint-disable no-unused-vars */
import Footer from "../../components/Footer";
/* eslint-enable no-unused-vars */
import Navbar from "../../components/Navbar";
import Api from "../../utils/Api";
import Messages from "../../components/Messages/Messages";
import Loading from "../../components/Loading";
import Modal from "../../components/Modal";

export default function Gene() {
  const [genders, setGenders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [gendersError, setGendersError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchGenders = async () => {
      const api = new Api(
        "https://site--apimfu--4nfy6d8474fb.code.run/api/Personas/getAllGenders",
        "POST",
        { nombre: "Hola" }
      );
      const data = await api.call();

      if (data.response) {
        setGenders(data.result);
      } else {
        setGendersError("No hay géneros por el momento");
        console.error("Failed to fetch genders:", data.message);
      }

      setLoading(false);
    };

    fetchGenders();
  }, []);

  const handleCardClick = (gender) => {
    setSelectedGender(gender);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedGender(null);
  };

  return (
    <div>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div>
        <div className="title-p">
          <h1>Géneros</h1>
        </div>

        {loading ? (
          <Loading />
        ) : (
          <>
            {gendersError ? (
              <Messages textError={gendersError} />
            ) : (
              <div className="gene-list">
                {genders
                  .filter((gender) =>
                    gender.nombre_genero
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  )
                  .map((gender, index) => (
                    <div
                      key={index}
                      className="card"
                      onClick={() => handleCardClick(gender)}
                    >
                      <h2>{gender.nombre_genero}</h2>
                    </div>
                  ))}
              </div>
            )}
          </>
        )}
      </div>
      {/* <Footer /> */}

      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        {selectedGender && (
          <>
            <h2>{selectedGender.nombre_genero}</h2>
            <p>{selectedGender.descripcion}</p>
          </>
        )}
      </Modal>
    </div>
  );
}
