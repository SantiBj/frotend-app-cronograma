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

  const value = {
    instData,
    setInstructorData,
    resetContext,
  };
  return <createInst.Provider value={value}>{children}</createInst.Provider>;
}
