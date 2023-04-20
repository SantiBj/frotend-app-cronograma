import { useContext } from "react";
import { SlLogout } from "react-icons/sl";
import { auth } from "../../context/auth";

export function ContentModal({handleClick,menuUser}){

    const {logoutUser} = useContext(auth)

    function handleClickLogout(){
      //eliminando el token, user, localstorage
      logoutUser()
      //cerrando el modal //cerrando el menu del user
      handleClick()
      menuUser()
    }

    return(
        <div className="flex flex-col gap-[15px]">
        <div className="flex justify-center text-Red">
          <SlLogout size={30} />
        </div>
        <p className="text-[18px] font-medium">¿ Desea cerrar su sesión ?</p>
        <div className="flex justify-center gap-[20px]">
          <button onClick={handleClickLogout} className="bg-Red text-White font-medium px-[12px] py-[5px] rounded-lg duration-300 hover:bg-Black">
            Aceptar
          </button>
          <button onClick={handleClick} className="bg-Green text-White font-medium px-[10px] py-[5px] rounded-lg box-border border-[3px] border-Green duration-300 hover:bg-White hover:text-Green">
            Cancelar
          </button>
        </div>
      </div>
    )
}