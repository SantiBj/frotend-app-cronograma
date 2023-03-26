import { AssignContext } from "./context/assign";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./tailwind.css";
import { Navegacion } from "./components/share/Navegacion";
import { Footer } from "./components/share/Footer";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { AssignConnect } from "./pages/assignGroup/AssignConnect";
import { Program } from "./pages/assignGroup/Program";
import { Ficha } from "./pages/assignGroup/Ficha";

function App() {
  return (
    <HashRouter>
      <AssignContext>
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
      </AssignContext>
    </HashRouter>
  );
}

export default App;
