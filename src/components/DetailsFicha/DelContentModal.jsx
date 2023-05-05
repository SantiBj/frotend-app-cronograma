import { FcDeleteRow } from "react-icons/fc";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { API_URL } from "../../config.js"

export function DelContentModal({ id, handleClick }) {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function destroy() {
    const user = JSON.parse(localStorage.getItem("user"));
    const url = API_URL+"api/fichaDelete/" + id + "/";
    const header = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: "token " + user.token,
      },
    };
    //useEffect solo se usa al cargar o al cambiar algo
    //cuando la consulta se da por la interatividad del usuario no se usa
    async function consult() {
      try {
        const response = await fetch(url, header);
        if (!response.ok) {
          throw new Error(response.status);
        }
        setError("204");
      } catch (error) {
        setError(error.message);
      }
    }
    consult();
  }

  function confirmDelete() {
    handleClick();
    navigate(-1);
  }

  return (
    <div className="w-[80%] space-y-[5px]">
      {!error && (
        <>
          <div className="w-fit mx-auto">
            <FcDeleteRow size={45} />
          </div>
          <div>
            <h3 className="text-center font-medium">
              ¿Desea eliminar la ficha <span className="text-Red">{id}</span>?
            </h3>
            <p className="text-Gray6 text-justify text-[14px] mx-[5%]">
              Tenga en cuenta que al eliminar la ficha {id} se borrar todas las
              asignaciones de esta.
            </p>
          </div>
        </>
      )}
      {error === "204" && (
        <div>
          <div className="text-Green flex justify-center my-[20px]">
            <FaCheckCircle size={45} />
          </div>
          <h3 className="text-center font-medium">
            La ficha {id} se elimino con exito
          </h3>
        </div>
      )}
      {error && error != "204" && (
        <div>
          <div className="text-Red font-medium flex justify-center my-[20px]">
            <MdCancel size={45} />
          </div>
          <h3 className="text-center font-medium">
            No se pudo eliminar la ficha intente mas tarde
          </h3>
        </div>
      )}

      <div className="flex w-fit gap-[10px] pt-[15px]
       mx-auto">
        {(!error || (error && error === "204")) && (
          <button
            onClick={!error ? destroy : confirmDelete}
            className="border-Green border-[2px] text-Green text-[14px] px-[8px] py-[4px] 
          rounded-md duration-300 hover:text-White hover:bg-Green font-medium mx-auto"
          >
            Aceptar
          </button>
        )}
        {(!error || (error && error != "204")) && (
          <button
            onClick={
              error && error != "204"
                ? () => {
                    handleClick();
                    setError(null);
                  }
                : handleClick
            }
            className="border-Red text-[14px] px-[8px] py-[4px] rounded-md text-Red mx-auto
        font-medium duration-300 hover:text-Green hover:text-White border-[2px] hover:bg-Red"
          >
            {error && error != "204" ? "Aceptar" : "Cancelar"}
          </button>
        )}
      </div>
    </div>
  );
}
