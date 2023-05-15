import { useContext } from "react";
import { auth } from "../context/auth";
import { Navigate } from "react-router-dom";
import { ValidationsPage } from "../components/share/ValidationsPage";
import img from "../assets/home.png";
import qr from "../assets/qr.png";

export function Home() {
  const { user } = useContext(auth);

  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="w-full h-[90vh] bg-cover bg-center bg-[url('https://i.postimg.cc/MZfwpFXp/fondo.jpg')] bg-no-repeat">
      <div className="flex flex-col md:flex-row items-center h-full px-[10%]">
        <div className="md:w-[50%] flex flex-col items-center gap-[25px]">
          <div>
            <h2 className="font-bold text-Green text-[50px] tracking-widest">
              BIENVENIDO
            </h2>
            <h3 className="font-semibold text-[30px] capitalize text-center">
              {user.nombreCompleto} ...
            </h3>
          </div>

          <img className="w-[40%] aspect-square" src={qr} alt="" />
          <button className="border-[2px] border-Green text-Green font-semibold p-[8px] rounded-md tracking-widest">
            MIS ASIGNACIONES
          </button>
        </div>
        <div className="hidden md:flex md:w-[50%]">
          <img className="w-full aspect-square" src={img} alt={"sena"} />
        </div>
      </div>
    </div>
  );
}
