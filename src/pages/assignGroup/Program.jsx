import { Select } from "../../components/program/Select";
import { BtnNext } from "../../components/share/BtnNext";
import { Title } from "../../components/share/Title";
import { ButtonsContainer } from "../../components/share/ButtonsContainer";
import { useContext } from "react";
import { Assign } from "../../context/assign";

export function Program() {
  const {dataAssign,setData} = useContext(Assign)

  return (
    <>
      <Title text="Seleccione la titulada de la ficha a asignar:" />
      <div className="flex justify-center items-center h-[55vh] md:h-[55vh] ">
        <Select />
      </div>
      <ButtonsContainer>
        <div></div>
        {/* se valida si ya hay datos en el contexto de esta vista */}
        <BtnNext nextPage="/assign/ficha" desactivate={dataAssign.programa.id === "" ? true : false}/>
      </ButtonsContainer>
    </>
  );
}
