import { useContext, useState } from "react";
import { Assign } from "../../context/assign";
import { Card } from "../share/Card";
import { Data404 } from "../share/Data404";
import { Loading } from "../share/Loading";
import { ErrorGeneric } from "../share/ErrorGeneric";
import { useConsult } from "../../hooks/useConsult";
import { Error403 } from "../share/Error403";

export function GridCards() {
  const { dataAssign, setData } = useContext(Assign);
  const idCompetency = dataAssign.competencia.pk;
  const nFicha = dataAssign.ficha.numero;

  //cargando los raps de la competencia
  const { data, loading, errors } = useConsult(
    "api/raps/competencia/" + idCompetency + "/" + nFicha + "/"
  );

  //opcion seleccionada
  const [optionSelected, setOptionSelected] = useState(dataAssign.rap);
  function handleClik(e) {
    const idRap = e.target.value;
    const dataRap = data.find((rap) => rap.id == idRap);
    setOptionSelected(dataRap);
    setData(dataRap, "rap");
  }

  if (loading) {
    return <Loading />;
  }
  if (errors === "404") {
    return  <Data404
    text={`Los raps de la competencia ${dataAssign.competencia.nombre}
      ya han sido asignados todos a la ficha
      ${dataAssign.ficha.numero} o la
      competencia no tiene raps.`}
  />;
  }
  if (errors === "403") {
    return <Error403/>
  }
  if (errors) {
    return <ErrorGeneric />;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px] lg:gap-[50px] my-[40px]">
      {data.map((rap) => (
        <Card
          key={rap.id}
          pk={rap.id}
          optionSelect={optionSelected.id}
          handleClick={handleClik}
          content={rap.nombre}
        />
      ))}
    </div>
  );
}
