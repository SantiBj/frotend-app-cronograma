import { useContext, useState } from "react";
import { createInst } from "../../context/createInst";
import { API_URL } from "../../config";
import { header } from "../../context/consult";

export function useCreate() {
  const { instData, listCompetenciesSelected } = useContext(createInst);

  const [codeState, setCodeState] = useState(null);

  function resetCodeState() {
    setCodeState(null)
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
    console.log(idCompetencie)
    const dataComp = {
      pkCompetencia: parseInt(idCompetencie),
      docInstructor: parseInt(instData.documento),
    };
    console.log("hola")
    async function consult() {
      const response = await fetch(url, header(dataComp));
      return response
    }
    return consult();
  }

  async function consult() {
    //este trycath maneja todo si hay un error lo maneja
    try {
      const response = await fetch(
        API_URL + "api/instructor/crear/",
        header(dataPost)
      );
      if (!response.ok) {
        throw new Error(response.status);
      }
      //luego añade las competencias al instructor
      const { listIDCompetencies } = listCompetenciesSelected();
      //array con las promesas
      const promesas = listIDCompetencies.map((competencie) => {
        return addUserCompetency(competencie);
      });
      //si finalizan con exito se realiza
      Promise.all(promesas).then(() => setCodeState("200"));
    } catch (error) {
      setCodeState(error.message);
      console.log(console.message)
    }
  }

  return{
    consult,
    codeState,
    resetCodeState
  }
}
