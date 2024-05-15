import { Link } from "react-router-dom";
import mfu from "../assets/mfu.svg";
import lupa from "../assets/lupa.svg";

export default function Navbar({ searchTerm, setSearchTerm }) {
  return (
    <header className="header">
      <div className="logo">
        <Link to={"/"}>
          <img src={mfu} className="img" alt="logo" />
        </Link>
      </div>

      <div className="search-content">
        <input
          type="text"
          placeholder="Buscar..."
          className="input-search"
          value={searchTerm}
          
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={lupa} alt="icono de busqueda" className="search-icon" />
      </div>

      <nav className="navbar">
        <ul>
          <li className="ref">
            <Link to={"/"} className="Link">
              Inicio
            </Link>
          </li>
          <li className="ref">
            <Link to={"/gender"} className="Link">
              Generos
            </Link>
          </li>
          <li className="ref">
            <Link to={"/create"} className="Link">
              Crear
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
