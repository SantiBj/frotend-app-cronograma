import { useContext } from "react";
import { createInst } from "../context/createInst";
import { Title } from "../components/share/Title";
import { ButtonsContainer } from "../components/share/ButtonsContainer";
import { BtnPrev } from "../components/share/BtnPrev";
import { BtnNext } from "../components/share/BtnNext";
import { SearchLocation } from "../components/share/SearchLocation";
import { Search } from "../components/ficha/Search";
import { CardsGrid } from "../components/CompetencyInstructor/CardsGrid";
import { CompetenciesSelected } from "../components/pageInstructor/CompetenciesSelected";

export function InstructorCompet() {
  //contexto de la data ingresada para crear el user
  const { instData } = useContext(createInst);


  return (
    <div className="w-[80%] mx-auto">
      <Title text="Seleccione las competencias que dicatara el instructor:" />
      <div>
        <div>
          <h3>
            <span className="font-semibold">Nombre:</span>{" "}
            {instData.nombreCompleto}
          </h3>
          <h3>
            <span className="font-semibold">Documento:</span>{" "}
            {instData.documento}
          </h3>
        </div>
        <div>
          <h3>Competencias seleccionadas: </h3>
        </div>
        <div>
          <CompetenciesSelected/>
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
        <BtnNext />
      </ButtonsContainer>
    </div>
  );
}
