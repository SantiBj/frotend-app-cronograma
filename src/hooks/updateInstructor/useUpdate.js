import { useState } from "react";
import { addAndDeleteCompt } from "../../services/addAndDeleteCompt";

export function useUpdate(initDta, selected, idInst) {
  const [codeState, setCodeState] = useState(null);

  function update() {
    try {
      //aca se cambiara tambien el nombre
      addAndDeleteCompt(initDta, selected, idInst);
      setCodeState("200");
    } catch (error) {
      setCodeState(error.message);
    }
  }
  

  function resetState(params) {
    setCodeState(null)
  }

  return {
    codeState,
    update,
    resetState
  };
}
