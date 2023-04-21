import "./Navegacion.css";
import { FaUserCircle } from "react-icons/fa";
import { useContext, useState } from "react";
import { CgMenu } from "react-icons/cg";
import { auth } from "../../../context/auth";
import { Logo } from "./Logo";
import { OptionMenu } from "./OpcionMenu";
import { ContentMenuProfile } from "./ContentMenuProfile";

export function Navegacion() {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [visibleMenuProfile, setVisibleMenuProfile] = useState(false);
  const { user } = useContext(auth);
  const paddingPage = "px-[30px] sm:px-[50px] md:px-[100px]";

  function handleClickOut() {
    setVisibleMenuProfile(!visibleMenuProfile);
  }

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
            {user && !user.isAdmin && (
              <>
                <OptionMenu
                  to="/por-definir"
                  text="Asignaciones"
                  setVisibleMenu={setVisibleMenu}
                />
              </>
            )}
          </div>
        </div>

        <div className="flex gap-[15px] items-center">
          <div>
            {user && (
              <button
                onClick={() => setVisibleMenuProfile(!visibleMenuProfile)}
              >
                <FaUserCircle
                  size={25}
                  className="text-White hover:text-Black duration-[400ms]"
                />
              </button>
            )}

            {visibleMenuProfile && (
              <ContentMenuProfile handleClickOut={handleClickOut} />
            )}
          </div>
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
