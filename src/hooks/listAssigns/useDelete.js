import { useState } from "react";
import { API_URL } from "../../config";

export function useDelete(id, data, setData) {
  const [codeState, setCodeState] = useState(null);

  function newState(id) {
    const template = data.filter((assignP) => assignP.id !== parseInt(id));
    setData(template);
  }

  async function deleteAssign() {
    console.log("aca esta el id " + id);
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const response = await fetch(API_URL + `api/delete/asignacion/${id}/`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: user ? "token " + user.token : null,
        },
      });

      if (!response.ok) {
        throw new Error(response.status);
      }

      setCodeState("200");
    } catch (error) {
      setCodeState(error.message);
    }
  }

  function resetCodeState() {
    setCodeState(null);
  }

  return {
    resetCodeState,
    codeState,
    deleteAssign,
    newState
  };
}
