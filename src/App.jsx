import { HashRouter, Routes, Route } from "react-router-dom";
import "./tailwind.css";
import { Navegacion } from "./components/share/Navegacion";
import { Footer } from "./components/share/Footer";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { AssignConnect } from "./pages/AssignConnect";
import { Program } from "./pages/Program";
import { Ficha } from "./pages/Ficha";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navegacion />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />}></Route>
          <Route path="/assign" element={<AssignConnect />}>
            <Route path="program" element={<Program />} />
            <Route path="ficha" element={<Ficha />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
