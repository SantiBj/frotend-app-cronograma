import { useState } from "react";
import { API_URL } from "../../config";
import { headerDelete } from "../../services/headerDelete";

export function useDelete(idFicha) {
  const [codeState, setCodeState] = useState(null);

  function resetCodeState(){
    setCodeState(null)
  }

  async function consult() {
    try {
      const response = await fetch(
        API_URL + "api/fichaDelete/" + idFicha + "/",
        headerDelete()
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
    resetCodeState
  }
}
