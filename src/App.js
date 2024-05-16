import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/styles.scss";
import Home from "./windows/start/Home";
import Gene from "./windows/start/Gene";
import Create from "./windows/start/Create";
import Album from "./windows/start/Album";
import NotFound from "./components/NotFound/NotFound";
import CreateAlbum from "./components/forms/CreateAlbum";
import AlbumDetail from "./components/AlbumDetail";
import Login from "./components/Login";
import Register from "./components/Register";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRote";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/gender" element={<Gene />} />
              <Route path="/create" element={<Create />} />
              <Route path="/album" element={<Album />} />
              <Route path="/album/:albumId" element={<AlbumDetail />} />
              <Route path="/test" element={<CreateAlbum />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
