import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./windows/start/Home";
import Gene from "./windows/start/Gene";
import Create from "./windows/start/Create";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* TODO: creacion de rutas */}
          <Route path={"/"} element={<Home />} />
          <Route path={"/Gender"} element={<Gene />} />
          <Route path={"/Create"} element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
