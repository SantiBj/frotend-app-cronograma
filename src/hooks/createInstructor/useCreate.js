import { useContext, useState } from "react";
import { createInst } from "../../context/createInst";
import { API_URL } from "../../config";
import { header } from "../../context/consult";
import { useCountSelected } from "./useCountSelected";

export function useCreate() {
  const { instData } = useContext(createInst);
  const { listIDCompetencies } = useCountSelected();

  const [codeState, setCodeState] = useState(null);
  const [loading,setLoading] = useState(null)

  function resetCodeState() {
    setCodeState(null);
  }

  const dataPost = {
    documento: parseInt(instData.documento),
    password: instData.documento,
    is_superuser: instData.admin,
    nombreCompleto: instData.nombreCompleto,
    is_staff: instData.admin,
  };

  function addUserCompetency(idCompetencie) {
    const url = API_URL + "api/anadirinstructor/";
    const dataComp = {
      pkCompetencia: parseInt(idCompetencie),
      docInstructor: parseInt(instData.documento),
    };
    async function consult() {
      const response = await fetch(url, header(dataComp));
      return response;
    }
    return consult();
  }

  async function consult() {
    //este trycath maneja todo si hay un error lo maneja
    try {
      setLoading(true)
      const response = await fetch(
        API_URL + "api/instructor/crear/",
        header(dataPost)
      );
      if (!response.ok) {
        throw new Error(response.status);
      }
      const promesas = listIDCompetencies.map((competencie) => {
        return addUserCompetency(competencie);
      });
      //si finalizan con exito se realiza
      Promise.all(promesas).then(() => setCodeState("200"));
    } catch (error) {
      setCodeState(error.message);
      console.log(error.message);
    }finally{
      setLoading(false)
    }
  }

  return {
    loading,
    consult,
    codeState,
    resetCodeState,
  };
}
