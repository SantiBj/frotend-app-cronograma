import { useContext, useState } from "react";
import { Assign } from "../../context/assign";
import { Card } from "../share/Card";
import { Loading } from "../share/Loading";
import { Data404 } from "../share/Data404";
import { ErrorGeneric } from "../share/ErrorGeneric";
import { useConsult } from "../../hooks/useConsult";
import { Error403 } from "../share/Error403";

export function GridCards() {
  const { dataAssign, setData } = useContext(Assign);

  //competencias pertenecientes a una titulada
  const programa = parseInt(dataAssign.programa.id);

  const { data, loading, errors } = useConsult(
    "api/competencias/programa/" + programa + "/"
  );

  //competencia seleccionada
  const [optionSelected, setOptionSelected] = useState(dataAssign.competencia);

  function handleClik(e) {
    const idCompetency = e.target.value;
    const dataCompetency = data.find(
      (competencia) => competencia.pk == idCompetency
    );
    setOptionSelected(dataCompetency);
    setData(dataCompetency, "competencia");
  }

  if (loading) {
    return <Loading />;
  }
  if (errors === "404") {
    return <Data404 text={"No se encontraron competencias"} />;
  }
  if (errors === "403"){
    return <Error403/>
  }
  if (errors) {
    return <ErrorGeneric />;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px] lg:gap-[50px] my-[40px]">
      {data.map((competencia) => (
        <Card
          key={competencia.pk}
          pk={competencia.pk}
          optionSelect={optionSelected.pk}
          handleClick={handleClik}
          content={competencia.nombre}
          isCompetency={true}
        />
      ))}
    </div>
  );
}
