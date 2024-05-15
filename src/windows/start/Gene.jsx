import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Api from "../../utils/Api";
import Messages from "../../components/Messages/Messages";

export default function Gene() {
  const [genders, setGenders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [gendersError, setGendersError] = useState(null);

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

  return (
    <div>
      <Navbar />
      <div>
        <div className="title-p">
          <h1>Géneros</h1>
        </div>
  
        {loading ? (
          <div className="title-p">
            <h1>Cargando...</h1>
          </div>
        ) : (
          <>
            {gendersError ? (
              <Messages textError={gendersError} />
            ) : (
              <div className="gene-list">
                {genders.map((gender, index) => (
                  <div key={index} className="card">
                    <h2>{gender.nombre_genero}</h2>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
      {/* <Footer /> */}
    </div>
  );
}
