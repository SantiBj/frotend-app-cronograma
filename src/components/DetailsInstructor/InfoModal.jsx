import { RiUserUnfollowLine } from "react-icons/ri";
import { FaCheckCircle,FaUserSlash } from "react-icons/fa";

export function InfoModal({error,nombre,id}){
    return (
      <>
        {!error && (
          <>
            {" "}
            <div className="w-fit mx-auto">
              <RiUserUnfollowLine size={45} />
            </div>
            <div className="space-y-[5px]">
              <div className="w-[300px] mx-auto">
                <h3 className="text-center font-medium text-[14px]">
                ¿Desea eliminar al instructor{" "}
                <span className="text-Red">{nombre} </span>con numero de
                documento <span className="text-Red">{id}</span> ?
              </h3>
              </div>
              
              <p className="text-Gray6 text-justify text-[14px] mx-[5%]">
                Tenga en cuenta que al eliminar el instructor se borrar todas
                las asignaciones de este.
              </p>
            </div>
          </>
        )}

        {error === "204" && (
          <div>
            <div className="text-Green flex justify-center my-[20px]">
              <FaCheckCircle size={45} />
            </div>
            <h3 className="text-center font-medium text-[14px]">
              El instructor {nombre} se elimino con exito.
            </h3>
          </div>
        )}

        {error && error !== "204" && (
          <div>
            <div className="text-Red flex justify-center my-[20px]">
              <FaUserSlash size={45} />
            </div>
            <h3 className="text-center font-medium text-[14px]">
              El instructor {nombre} no se pudo elimino intente mas tarde.
            </h3>
          </div>
        )}
      </>
    );
}