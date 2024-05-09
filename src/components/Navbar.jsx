import { Link } from "react-router-dom";
import mfu from "../assets/mfu.svg";

export default function Navbar() {
  return (
    <header className="header">

      <div className="logo">
        <Link to={"/"}>
          <img src={mfu} className="img" />
        </Link>
      </div>

      <nav className="navbar">
        <ul>
          <li>
            <Link to={"/"} className="ref">
              Inicio
            </Link>
          </li>
          <li>
            <Link to={"/gender"} className="ref">
              Generos
            </Link>
          </li>
          <li>
            <Link to={"/create"} className="ref">
              Crear
            </Link>
          </li>
        </ul>
      </nav>

    </header>
  );
}
