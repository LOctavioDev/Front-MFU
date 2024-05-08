import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/"}>Inicio</Link>
        </li>
        <li>
          <Link to={"/Gender"}>Crear</Link>
        </li>
        <li>
          <Link to={"/Create"}>Generos</Link>
        </li>
      </ul>
    </div>
  );
}
