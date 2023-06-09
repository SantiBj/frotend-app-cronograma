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
import { InstructorCompet } from "./pages/CreateInstructor/InstructorCompet";
import { CredentialsInstructor } from "./pages/CreateInstructor/CredentialsInstructor";
import { DetailsInstructor } from "./pages/DetailsInstructor";
import { PageUser } from "./pages/assignGroup/PageUser";
import { EditCompetencies } from "./pages/updateInstructor/EditCompetencies";
import { UpdateInstructor } from "./context/updateInst";
import { EditName } from "./pages/updateInstructor/EditName";
import { ListAssigns } from "./pages/ListAssigns";

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <AssignContext>
          <CreateInstructor>
            <UpdateInstructor>
              <div className="App min-h-screen  flex flex-col">
                <Navegacion />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/user" element={<PageUser />} />
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
                    <Route path="/edit/name/:slog" element={<EditName/>}/>
                    <Route
                      path="/instructor/edit/:slog"
                      element={<EditCompetencies />}
                    />
                    <Route path="/lista/asignaciones/:slog" element={<ListAssigns/>}/>
                  </Routes>{" "}
                </main>
                <Footer />
              </div>
            </UpdateInstructor>
          </CreateInstructor>
        </AssignContext>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
