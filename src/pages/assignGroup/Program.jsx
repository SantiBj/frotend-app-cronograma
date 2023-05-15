import { Select } from "../../components/program/Select";
import { BtnNext } from "../../components/share/BtnNext";
import { Title } from "../../components/share/Title";
import { ButtonsContainer } from "../../components/share/ButtonsContainer";
import { useContext } from "react";
import { Assign } from "../../context/assign";

export function Program() {
  const { dataAssign } = useContext(Assign);

  return (
    <>
      <div className="fixed top-[80px] left-0 right-0 bottom-0 bg-no-repeat bg-cover bg-left md:bg-center bg-[url('https://i.postimg.cc/MZfwpFXp/fondo.jpg')]">
        <div className="w-[80%] mx-auto">
          <Title text="Seleccione la titulada de la ficha a asignar:" />
          <div className="flex justify-center items-center h-[55vh] md:h-[55vh] ">
            <Select />
          </div>
          <ButtonsContainer>
            <div></div>
            {/* se valida si ya hay datos en el contexto de esta vista */}
            <BtnNext
              nextPage="/assign/ficha"
              desactivate={dataAssign.programa.id === "" ? true : false}
            />
          </ButtonsContainer>
        </div>
      </div>
    </>
  );
}
