import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { GridCards } from "../../components/competency/GridCards";
import { BtnNext } from "../../components/share/BtnNext";
import { BtnPrev } from "../../components/share/BtnPrev";
import { ButtonsContainer } from "../../components/share/ButtonsContainer";
import { Title } from "../../components/share/Title";
import { Assign } from "../../context/assign";

export function Competency() {
  const { dataAssign } = useContext(Assign);

  const competency = dataAssign.competencia.pk;

  if (dataAssign.ficha.numero === "") {
    return <Navigate to={"/assign/ficha"} />;
  }
  return (
    <>
      <div className="w-[60%] max-w-[400px]">
        <Title text="Competencias" />
        <h2 className="lowercase">
          <span className="font-medium">Titulada: </span>
          {dataAssign.programa.nombre}
        </h2>
        <h2 className="lowercase">
          <span className="font-medium">ficha: </span>
          {dataAssign.ficha.numero}
        </h2>
      </div>
      <div className="flex justify-center">
        <GridCards />
      </div>
      <ButtonsContainer>
        <BtnPrev prevPage={"/assign/ficha"} />
        <BtnNext
          nextPage={"/assign/rap"}
          desactivate={competency === "" ? true : false}
        />
      </ButtonsContainer>
    </>
  );
}
