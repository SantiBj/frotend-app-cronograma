import { createContext, useState } from "react";

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

  function resetContext() {
    setInstData(dataInitial);
  }

  function convertToFalse(id) {
    const template = {
      ...instData.competencias,
      [id]: false,
    };
    setInstructorData({ competencias: template });
  }

  const value = {
    instData,
    setInstructorData,
    resetContext,
    convertToFalse
  };
  return <createInst.Provider value={value}>{children}</createInst.Provider>;
}
