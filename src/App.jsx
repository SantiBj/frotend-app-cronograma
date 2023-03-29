import { AssignContext } from "./context/assign";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import "./tailwind.css";
import { Navegacion } from "./components/share/Navegacion";
import { Footer } from "./components/share/Footer";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { AssignConnect } from "./pages/assignGroup/AssignConnect";
import { Program } from "./pages/assignGroup/Program";
import { Ficha } from "./pages/assignGroup/Ficha";
import { Competency } from "./pages/assignGroup/Competency";
import { Rap } from "./pages/assignGroup/Rap";

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
              <Route path="competency" element={<Competency/>}/>
              <Route path="rap" element={<Rap/>}/>
            </Route>
            <Route path="*" element={<Navigate to="/"/>}/>
          </Routes>
        </div>
      </AssignContext>
    </HashRouter>
  );
}

export default App;
