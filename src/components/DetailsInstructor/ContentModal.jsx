import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { API_URL } from "../../config";
import { InfoModal } from "./InfoModal";

export function ContentModal({ id, nombre, handleClick }) {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function destroy() {
    const user = JSON.parse(localStorage.getItem("user"));
    const url =  API_URL+"api/eliminarInstructor/" + id + "/";
    const header = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: "token " + user.token,
      },
    };
    async function consult() {
      try {
        const response = await fetch(url, header);
        if (!response.ok) {
          throw new Error(response.status);
        }
        setError("204");
      } catch (error) {
        setError(error.message)
      }
    }
    consult();
  }

  function cerrarModal() {
    handleClick();
    setError(null);
  }

  function confirmDelete() {
    cerrarModal();
    navigate(-1);
  }

  return (
    <div>
      <div className="space-y-[5px]">
        <InfoModal error={error} id={id} nombre={nombre}/>
        
        <div className="flex justify-center gap-[5px]">
          {(!error || error === "204") && (
            <button
              className="border-Green border-[2px] text-Green text-[14px] px-[8px] py-[4px] 
                rounded-md duration-300 hover:text-White hover:bg-Green font-medium "
              onClick={!error ? destroy : confirmDelete}
            >
              Aceptar
            </button>
          )}
          {(!error || (error && error !== "204")) && (
            <button
              className="border-Red text-Red text-[14px] px-[8px] py-[4px] rounded-md  
                font-medium duration-300 hover:text-White hover:bg-Red border-[2px]"
              onClick={cerrarModal}
            >
              {error ? "Aceptar" : "Cancelar"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
