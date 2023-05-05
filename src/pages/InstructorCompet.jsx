import { useContext, useState } from "react";
import { createInst } from "../context/createInst";
import { Title } from "../components/share/Title";
import { ButtonsContainer } from "../components/share/ButtonsContainer";
import { BtnPrev } from "../components/share/BtnPrev";
import { BtnNext } from "../components/share/BtnNext";
import { SearchLocation } from "../components/share/SearchLocation";
import { Search } from "../components/ficha/Search";
import { CardsGrid } from "../components/CompetencyInstructor/CardsGrid";
import { CompetenciesSelected } from "../components/pageInstructor/CompetenciesSelected";
import { Modal } from "../components/share/Modal";
import { ConfirmContent } from "../components/CompetencyInstructor/ConfirmContent";
import { Navigate } from "react-router-dom";

export function InstructorCompet() {
  //contexto de la data ingresada para crear el user
  const { instData } = useContext(createInst);
  const [visible, setVisible] = useState(false);
  

  function changeVisible() {
    setVisible(!visible);
  }

  if (!instData.nombreCompleto || !instData.documento) {
    return <Navigate to="/instructor/data" />;
  }
  return (
    <div className="w-[80%] mx-auto">
      <Title text="Seleccione las competencias que dicatara el instructor:" />
      <div className="flex justify-between items-center">
        <div>
          <h3>
            <span className="font-semibold">{instData.nombreCompleto}</span>{" "}
          </h3>
          <h3>
            <span className="font-semibold">CC: {instData.documento}</span>{" "}
          </h3>
        </div>
        <div>
          <div className="fixed top-[95px] z-10 right-[5vw]">
            <CompetenciesSelected />
          </div>
        </div>
      </div>

      <SearchLocation titleText="Busque la competencia que desea asignar: ">
        <Search
          to="/instructor/competencia"
          placeholder="Ej: Enrique Low Mur"
          typeInput="text"
        />
      </SearchLocation>
      <CardsGrid />
      <ButtonsContainer>
        <BtnPrev prevPage="/instructor/data" />
        <div
          onClick={changeVisible}
          className="bg-Green py-[5px] px-[10px] rounded-lg font-medium duration-300 
                      hover:scale-110 hover:brightness-125 cursor-pointer"
        >
          confirmar
        </div>
      </ButtonsContainer>
      <Modal isVisible={visible} sizeMd={true}>
        <ConfirmContent changeVisible={changeVisible} />
      </Modal>
    </div>
  );
}
