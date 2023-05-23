import { API_URL } from "../../config";
import { useState } from "react";

export function useDelete(id) {
  const [codeState, setCodeState] = useState(null);

  function destroy() {
    const user = JSON.parse(localStorage.getItem("user"));
    const url = API_URL + "api/eliminarInstructor/" + id + "/";
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
        setCodeState("200");
      } catch (error) {
        setCodeState(error.message);
      }
    }
    consult();
  }

  function resetState() {
    setCodeState(null);
  }

  return {
    destroy,
    codeState,
    resetState,
  };
}
