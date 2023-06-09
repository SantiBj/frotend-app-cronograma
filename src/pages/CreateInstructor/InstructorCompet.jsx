import { useContext, useState } from "react";
import { createInst } from "../../context/createInst";
import { Title } from "../../components/share/Title";
import { ButtonsContainer } from "../../components/share/ButtonsContainer";
import { BtnPrev } from "../../components/share/BtnPrev";
import { SearchLocation } from "../../components/share/SearchLocation";
import { Search } from "../../components/ficha/Search";
import { CardsGrid } from "../../components/CompetencyInstructor/CardsGrid";
import { CompetenciesSelected } from "../../components/pageInstructor/CompetenciesSelected";
import { Modal } from "../../components/share/Modal";
import { ConfirmContent } from "../../components/CompetencyInstructor/ConfirmContent";
import { Navigate } from "react-router-dom";
import { BtnConfirm } from "../../components/share/BtnConfirm";
import { useCountSelected } from "../../hooks/updateInstructor/useCountSelected";

export function InstructorCompet() {
  //contexto de la data ingresada para crear el user
  const { instData, setInstructorData, convertToFalse } =
    useContext(createInst);
  const [visible, setVisible] = useState(false);

  function changeVisible() {
    setVisible(!visible);
  }

  if (!instData.nombreCompleto || !instData.documento) {
    return <Navigate to="/instructor/data" />;
  }

  const { quantity, listID } = useCountSelected(instData.competencias);

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
            <CompetenciesSelected
              convertToFalse={convertToFalse}
              listIDCompetencies={listID}
              quantitySelected={quantity}
            />
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
      <CardsGrid
        context={instData}
        setContext={setInstructorData}
        searchUrl={"api/buscador/competencias/?page=1&search="}
        competenciesUrl={"api/competencias/?page="}
      />
      <ButtonsContainer>
        <BtnPrev prevPage="/instructor/data" />
        <BtnConfirm text={"confirmar"} action={changeVisible} />
      </ButtonsContainer>
      <Modal isVisible={visible} sizeMd={true}>
        <ConfirmContent changeVisible={changeVisible} />
      </Modal>
    </div>
  );
}
