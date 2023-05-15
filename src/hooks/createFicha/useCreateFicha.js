import { header } from "../../context/consult";
import { useState } from "react";
import { API_URL } from "../../config";

export function useCreateFicha() {
  const [codeState, setCodeState] = useState(null);
  //una vez haya un error cerrar el modal y volver a 0 este estado

  async function consult(data,postData) {
    const dataTitulada = data.find(
      (item) => item.id === parseInt(postData.titulada)
    );
    try {
      const response = await fetch(
        API_URL + "api/ficha/crear/",
        header({
          numero: postData.ficha,
          nombre: dataTitulada.nombre,
          titulada: postData.titulada,
        })
      );
      if (!response.ok) {
        throw new Error(response.status);
      }
      setCodeState("200");
    } catch (error) {
      setCodeState(error.message);
    }
  }

  return {
    codeState,
    consult,
  };
}
