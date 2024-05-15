import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/styles.scss";
import Home from "./windows/start/Home";
import Gene from "./windows/start/Gene";
import Create from "./windows/start/Create";
import Album from "./windows/start/Album";
import NotFound from "./components/NotFound/NotFound";
import CreateAlbum from "./components/forms/CreateAlbum";
import AlbumDetail from "./components/AlbumDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gender" element={<Gene />} />
          <Route path="/create" element={<Create />} />
          <Route path="/album" element={<Album />} />
          <Route path="/album/:albumId" element={<AlbumDetail />} /> {/* Ruta dinámica con id */}
          <Route path="/test" element={<CreateAlbum />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
