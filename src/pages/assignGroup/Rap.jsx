import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { GridCards } from "../../components/rap/GridCards";
import { Title } from "../../components/share/Title";
import { Assign } from "../../context/assign";
import { ButtonsContainer } from "../../components/share/ButtonsContainer";
import { BtnNext } from "../../components/share/BtnNext";
import { BtnPrev } from "../../components/share/BtnPrev";

export function Rap() {
  const { dataAssign } = useContext(Assign);
  const rap = dataAssign.rap.id;

  if (dataAssign.competencia.pk === "") {
    return <Navigate to={"/assign/competency"} />;
  }
  return (
    <>
      <div className="w-[60%] max-w-[400px]">
        <Title text="Resultados de aprendizaje" />
        <h2 className="lowercase">
          <span className="font-medium">Titulada: </span>
          {dataAssign.programa.nombre}
        </h2>
        <h2 className="lowercase">
          <span className="font-medium">ficha: </span>
          {dataAssign.ficha.numero}
        </h2>
        <h2 className="lowercase">
          <span className="font-medium">Competencia: </span>
          {dataAssign.competencia.nombre}
        </h2>
      </div>
      <div className="flex justify-center">
        <GridCards />
      </div>
      <ButtonsContainer>
        <BtnPrev prevPage={"/assign/competency"} />
        <BtnNext
          nextPage={"/assign/date"}
          desactivate={rap === "" ? true : false}
        />
      </ButtonsContainer>
    </>
  );
}
