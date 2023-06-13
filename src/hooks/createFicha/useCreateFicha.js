import { header } from "../../context/consult";
import { useState } from "react";
import { API_URL } from "../../config";

export function useCreateFicha() {
  const [codeState, setCodeState] = useState(null);
  const [loading,setLoading] = useState(null)

  function resetState(){
    setCodeState(null)
  }
  //una vez haya un error cerrar el modal y volver a 0 este estado

  async function consult(postData) {
    try {
      setLoading(true)
      const response = await fetch(
        API_URL + "api/ficha/crear/",
        header({
          numero: postData.ficha,
          nombre: postData.titulada.nombre,
          titulada: postData.titulada.id,
        })
      );
      if (!response.ok) {
        throw new Error(response.status);
      }
      setCodeState("200");
    } catch (error) {
      setCodeState(error.message);
    }finally{
      setLoading(false)
    }
  }

  return {
    loadingCreate:loading,
    codeState,
    resetState,
    consult,
  };
}
