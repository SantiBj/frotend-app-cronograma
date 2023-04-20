import { createContext, useState } from "react";

export const Assign = createContext();

const dataInitial = {
  programa: {
    id: "",
  },
  ficha: {
    numero: "",
  },
  competencia: {
    pk: "",
  },
  rap: {
    id: "",
  },
  instructor: {
    documento: "",
  },
  fechaInicio: "",
  fechaFin: "",
};

export function AssignContext({ children }) {
  //logica
  const [dataAssign, setDataAssign] = useState(dataInitial);

  function returningInitialState() {
    setDataAssign(dataInitial)
  }

  function setData(data, keyName) {
    if (dataAssign.ficha.numero !== "" && keyName === "ficha") {
      setDataAssign({
        programa: dataAssign.programa,
        ficha: data,
        competencia: {
          pk: "",
        },
        rap: {
          id: "",
        },
        instructor: {
          documento: "",
        },
        fechaInicio: "",
        fechaFin: "",
      });
    } else if (dataAssign.programa.id !== "" && keyName === "programa") {
      setDataAssign({
        programa: data,
        ficha: {
          numero: "",
        },
        competencia: {
          pk: "",
        },
        rap: {
          id: "",
        },
        instructor: {
          documento: "",
        },
        fechaInicio: "",
        fechaFin: "",
      });
    } else if (dataAssign.competencia.pk !== "" && keyName === "competencia") {
      setDataAssign({
        programa: dataAssign.programa,
        ficha: dataAssign.ficha,
        competencia: data,
        rap: {
          id: "",
        },
        instructor: {
          documento: "",
        },
        fechaInicio: "",
        fechaFin: "",
      });
    } else if (dataAssign.fechaInicio !== "" && keyName === "fechaInicio") {
      setDataAssign({
        programa: dataAssign.programa,
        ficha: dataAssign.ficha,
        competencia: dataAssign.competencia,
        rap: dataAssign.rap,
        instructor: {
          documento: "",
        },
        fechaInicio: data,
        fechaFin: dataAssign.fechaFin,
      });
    } else if (dataAssign.fechaFin !== "" && keyName === "fechaFin") {
      setDataAssign({
        programa: dataAssign.programa,
        ficha: dataAssign.ficha,
        competencia: dataAssign.competencia,
        rap: dataAssign.rap,
        instructor: {
          documento: "",
        },
        fechaInicio: dataAssign.fechaInicio,
        fechaFin: data,
      });
    } else {
      const newDataAssign = {
        ...dataAssign,
        [keyName]: data,
      };
      setDataAssign(newDataAssign);
    }
  }

  const dataContext = {
    dataAssign,
    setData,
    returningInitialState
  };

  return <Assign.Provider value={dataContext}>{children}</Assign.Provider>;
}

///bloquear las url solo para admin y user normales
//en caso de vulnerabilidad saldra el mensaje que vi


//falta guardar esto en localstorage
