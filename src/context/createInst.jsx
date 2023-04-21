import { createContext, useState } from "react";
import { header } from "./consult";

export const createInst = createContext();

const dataInitial = {
  documento: "",
  nombreCompleto: "",
  admin: false,
  competencias: {},
};

export function CreateInstructor({ children }) {
  const [instData, setInstData] = useState(dataInitial);

  function setInstructorData(data) {
    const template = {
      ...instData,
      ...data,
    };
    setInstData(template);
  }

  function listCompetenciesSelected() {
    const competencies = instData.competencias;
    let quantity = 0;
    const listIDCompetencies = [];

    for (let key in competencies) {
      if (competencies[key]) {
        listIDCompetencies.push(key);
        quantity++;
      }
    }

    return {
      quantity,
      listIDCompetencies,
    };
  }

  function convertCompetencieToFalse(id) {
    const templateCompetencies = { ...instData.competencias, [id]: false };

    const template = {
      ...instData,
      competencias: templateCompetencies,
    };

    setInstData(template);
  }

  const [codeState, setCodeState] = useState(null);

  function addUserCompetency(idCompetencie) {
    const url = "http://127.0.0.1:8000/api/anadirinstructor/";
    const dataPost = {
      pkCompetencia: parseInt(idCompetencie),
      docInstructor: parseInt(instData.documento),
    };

    async function consult() {
      try {
        const response = await fetch(url, header(dataPost));
        if (!response.ok) {
          throw new Error(response.status);
        }
        setCodeState("201");
      } catch (error) {
        setCodeState(error.message);
      }
    }
    return consult();
  }

  function createUser() {
    const url = "http://127.0.0.1:8000/api/instructor/crear/";
    const dataPost = {
      documento: parseInt(instData.documento),
      password: instData.documento,
      is_superuser: instData.admin,
      nombreCompleto: instData.nombreCompleto,
      is_staff: instData.admin,
    };

    async function consult() {
      try {
        const response = await fetch(url, header(dataPost));
        if (!response.ok) {
          throw new Error(response.status);
        }
        setCodeState("200");
        const { listIDCompetencies } = listCompetenciesSelected();
        const promesa = listIDCompetencies.map((competencie) => {
          return addUserCompetency(competencie);
        });

        //espera que un array de promesas se completo para realizar una accion
        //si alguna no se completa se genera un error
        //importante el array debe retornar la promesa
        //en el ejemplo promesa es un nuevo array que contiene todas las promesas
        Promise.all(promesa)
          .then(() => setCodeState("201"))
          .catch((error) => {
            setCodeState(error.message);
          });
      } catch (error) {
        setCodeState(error.message);
      }
    }
    consult();
  }

  function codeStateEmpty() {
    setCodeState(null);
  }

  function createOk() {
    setInstData(dataInitial);
    setCodeState(null);
  }

  const value = {
    instData,
    convertCompetencieToFalse,
    setInstructorData,
    listCompetenciesSelected,
    createUser,
    codeState,
    codeStateEmpty,
    createOk,
  };
  return <createInst.Provider value={value}>{children}</createInst.Provider>;
}
