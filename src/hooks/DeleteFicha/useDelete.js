import { useState } from "react";
import { API_URL } from "../../config";
import { headerDelete } from "../../services/headerDelete";

export function useDelete(idFicha) {
  const [codeState, setCodeState] = useState(null);
  const [loading,setLoading]=useState(null)

  function resetCodeState(){
    setCodeState(null)
  }

  async function consult() {
    try {
      setLoading(true)
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
    } finally{
      setLoading(false)
    }
  }

  return {
    loading,
    codeState,
    consult,
    resetCodeState
  }
}
