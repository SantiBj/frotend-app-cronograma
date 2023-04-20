import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { GridCards } from "../../components/rap/GridCards";
import { Title } from "../../components/share/Title";
import { Assign } from "../../context/assign";
import { ButtonsContainer } from '../../components/share/ButtonsContainer'
import { BtnNext } from "../../components/share/BtnNext";
import { BtnPrev } from "../../components/share/BtnPrev";

export function Rap() {
  const {dataAssign} = useContext(Assign)
  const rap = dataAssign.rap.id

  if (dataAssign.competencia.pk === ""){
    return <Navigate to={'/assign/competency'}/>
  }
  return (
    <>
      <div>
        <Title text="Resultados de aprendizaje" />
      </div>
      <div className="flex justify-center">
        <GridCards />
      </div>
      <ButtonsContainer>
          <BtnPrev prevPage={"/assign/competency"} />
          <BtnNext nextPage={"/assign/date"} desactivate={rap === "" ? true : false} />
        </ButtonsContainer> 
    </>
  );
}
