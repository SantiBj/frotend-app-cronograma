import "./Navegacion.css";
import { useContext, useState } from "react";
import { CgMenu } from "react-icons/cg";
import { auth } from "../../../context/auth";
import { Logo } from "./Logo";
import { OptionMenu } from "./OpcionMenu";
import { BtnSalir } from "../../logout/BtnSalir";

export function Navegacion() {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const { user } = useContext(auth);
  const paddingPage = "px-[30px] sm:px-[50px] md:px-[100px]";

  return (
    <div
      className={`w-full bg-Green shadow-md sticky top-0 z-30 ${paddingPage}`}
    >
      <div className="flex justify-between items-center h-[80px]">
        <Logo />

        <div>
          <div
            className={`${!visibleMenu && "hidden delay-300"} font-medium
                                    fixed z-[10] top-[80px] w-full h-[100vh] left-0 
                                    flex flex-col justify-center items-center
                                    ${paddingPage} bg-White gap-10
                                    lg:flex lg:flex-row lg:static lg:bg-Green lg:h-[80px] lg:p-0`}
          >
            {user && !user.isAdmin && (
              <OptionMenu
                to="/user"
                text="Mis Asignaciones"
                setVisibleMenu={setVisibleMenu}
              />
            )}

            {user && user.isAdmin && (
              <>
                <OptionMenu
                  to="/assign/program"
                  text="Asignar"
                  setVisibleMenu={setVisibleMenu}
                />
                <OptionMenu
                  to="/instructores"
                  text="Instructores"
                  setVisibleMenu={setVisibleMenu}
                />
                <OptionMenu
                  to="/fichas"
                  text="Fichas"
                  setVisibleMenu={setVisibleMenu}
                />
              </>
            )}
          </div>
        </div>

        <div className="flex gap-[15px] items-center">
          <div>{user && <BtnSalir />}</div>
          <div className="lg:hidden flex gap-5">
            {user && (
              <button
                className={`${visibleMenu ? "text-Black" : "text-White"}`}
                onClick={() => {
                  setVisibleMenu(!visibleMenu);
                }}
              >
                <CgMenu size={25} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
