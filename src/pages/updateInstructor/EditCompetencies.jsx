import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CardsGrid } from "../../components/CompetencyInstructor/CardsGrid";
import { SearchLocation } from "../../components/share/SearchLocation";
import { Search } from "../../components/ficha/Search";
import { updateInst } from "../../context/updateInst";
import { useGetDtaInit } from "../../hooks/updateInstructor/useGetDtaInit";
import { useUpdate } from "../../hooks/updateInstructor/useUpdate";

export function EditCompetencies() {
  const { slog } = useParams();
  //poniendo los datos iniciales en el contexto
  const { initDta } = useGetDtaInit(slog);
  const { dataUpdate, setUpdateData } = useContext(updateInst);

  //modal
  //initDta.current -> pass
  //pass -> dataUpdate.competencias
  const { codeState, update } = useUpdate(
    initDta.current,
    dataUpdate.competencias,
    slog
  );

  return (
    <div className="w-[85%] mx-auto">
      <SearchLocation
        titleText={"Seleccione o quite las competencias que desee:"}
      >
        <Search
          to={"/instructor/edit/5555"}
          placeholder={"Ej: analizar"}
          typeInput={"text"}
        />
      </SearchLocation>

      <CardsGrid
        context={dataUpdate}
        setContext={setUpdateData}
        searchUrl={"api/buscador/competencias/?page=1&search="}
        competenciesUrl={"api/competencias/?page="}
      />

      <button
        onClick={update}
        className="bg-Green p-[20px] fixed bottom-[100px] right-2"
      >
        actualizar
      </button>
    </div>
  );
}
