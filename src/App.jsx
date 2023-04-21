import { AssignContext } from "./context/assign";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import "./tailwind.css";
import { Navegacion } from "./components/share/navbar/Navegacion";
import { Footer } from "./components/share/Footer";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { AssignConnect } from "./pages/assignGroup/AssignConnect";
import { Program } from "./pages/assignGroup/Program";
import { Ficha } from "./pages/assignGroup/Ficha";
import { Competency } from "./pages/assignGroup/Competency";
import { Rap } from "./pages/assignGroup/Rap";
import { Date } from "./pages/assignGroup/Date";
import { Instructor } from "./pages/assignGroup/Instructor";
import { AuthProvider } from "./context/auth";
import { Instructores } from "./pages/Instructores";
import { Fichas } from "./pages/Fichas";
import { DetailsFicha } from "./pages/DetaildsFicha";
import { FichaCreate } from "./pages/FichaCreate";
import { CreateInstructor } from "./context/createInst";
import { InstructorCompet } from "./pages/InstructorCompet";
import { CredentialsInstructor } from "./pages/CredentialsInstructor";
import { DetailsInstructor } from "./pages/DetailsInstructor";

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <AssignContext>
          <CreateInstructor>
            <div className="App min-h-screen flex flex-col">
              <Navegacion />
              <main class="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="login" element={<Login />}></Route>
                  <Route path="/assign" element={<AssignConnect />}>
                    <Route path="program" element={<Program />} />
                    <Route path="ficha" element={<Ficha />} />
                    <Route path="competency" element={<Competency />} />
                    <Route path="rap" element={<Rap />} />
                    <Route path="date" element={<Date />} />
                    <Route path="instructor" element={<Instructor />} />
                  </Route>
                  <Route path="/fichas" element={<Fichas />} />
                  <Route path="/ficha/:slog" element={<DetailsFicha />} />
                  <Route path="/ficha/create" element={<FichaCreate />} />
                  <Route path="*" element={<Navigate to="/" />} />
                  <Route path="/instructores" element={<Instructores />} />
                  <Route
                    path="/instructor/data"
                    element={<CredentialsInstructor />}
                  />
                  <Route
                    path="/instructor/competencia"
                    element={<InstructorCompet />}
                  />
                  <Route
                    path="/instructor/:slog"
                    element={<DetailsInstructor />}
                  />
                </Routes>{" "}
              </main>
              <div className="mt-[50px]">
                <Footer />
              </div>
            </div>
          </CreateInstructor>
        </AssignContext>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
