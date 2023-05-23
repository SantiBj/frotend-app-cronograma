import { useState } from "react";
import { addAndDeleteCompt } from "../../services/addAndDeleteCompt";

export function useUpdate(initDta, selected, idInst,name) {
  const [codeState, setCodeState] = useState(null);

  function update() {
    try {
      //aca se cambiara tambien el nombre
      useConsult()
      addAndDeleteCompt(initDta, selected, idInst);
      setCodeState("200");
    } catch (error) {
      setCodeState(error.message);
    }
  }
  

  async function useConsult(){
    const user = JSON.parse(localStorage.getItem("user"));
    const response = await fetch(`http://127.0.0.1:8000/api/update/instructor/${idInst}/`,{
      method: "PATCH",
      body:JSON.stringify({
        nombreCompleto:name
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: user ? "token " + user.token : null,
      },
    })
    if (!response.ok) {
      throw new Error(response.status)
    }
  }

  function resetState() {
    setCodeState(null)
  }

  return {
    codeState,
    update,
    resetState
  };
}
