import { useContext } from "react";
import { Assign } from "../../context/assign";
import { API_URL } from "../../config";
import { header } from "../../context/consult";
import { useState } from "react";

export function useCreate() {
  const [codeState, setCodeState] = useState(null);
  const { dataAssign, returningInitialState } = useContext(Assign);

  function resetCodeState(){
     setCodeState(null)
  }

  const dataPost = {
    ficha: dataAssign.ficha.numero,
    rap: dataAssign.rap.id,
    instructor: dataAssign.instructor.documento,
    fechaInicio: dataAssign.fechaInicio,
    fechaFin: dataAssign.fechaFin,
  };

  async function consult() {
    try {
      const response = await fetch(
        API_URL + "api/crear/asignacion/",
        header(dataPost)
      );
      if (!response.ok) {
        throw new Error(response.status);
      }
      setCodeState("200")
    } catch (error) {
      setCodeState(error.message);
    }
  }

  return{
     codeState,
     consult,
     resetCodeState,
     resetContext:returningInitialState
  }
}
