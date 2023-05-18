import { Navigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { CardsGrid } from "../../components/CompetencyInstructor/CardsGrid";
import { SearchLocation } from "../../components/share/SearchLocation";
import { Search } from "../../components/ficha/Search";
import { updateInst } from "../../context/updateInst";
import { useGetDtaInit } from "../../hooks/updateInstructor/useGetDtaInit";
import { useUpdate } from "../../hooks/updateInstructor/useUpdate";
import { ButtonsContainer } from "../../components/share/ButtonsContainer";
import { BtnPrev } from "../../components/share/BtnPrev";
import { BtnConfirm } from "../../components/share/BtnConfirm";
import { Header } from "../../components/updateInstructor/Header";
import { CompetenciesSelected } from "../../components/pageInstructor/CompetenciesSelected";
import { useCountSelected } from "../../hooks/updateInstructor/useCountSelected";

export function EditCompetencies() {
  const { slog } = useParams();
  //poniendo los datos iniciales en el contexto
  const { initDta } = useGetDtaInit(slog);
  const { dataUpdate, setUpdateData, convertToFalse } = useContext(updateInst);

  //pass -> contentModal
  const { codeState, update } = useUpdate(
    initDta.current,
    dataUpdate.competencias,
    slog,
    dataUpdate.nombreCompleto
  );

  //
  const { quantity, listID } = useCountSelected(dataUpdate.competencias);

  //validacion con user
  if (!dataUpdate.nombreCompleto) {
    return <Navigate to={"/edit/name/" + slog} />;
  }
  return (
    <div className="w-[85%] mx-auto">
      <div className="flex justify-between items-center">
        <Header
          documento={dataUpdate.documento}
          name={dataUpdate.nombreCompleto}
        />
        <CompetenciesSelected
          quantitySelected={quantity}
          listIDCompetencies={listID}
          convertToFalse={convertToFalse}
        />
      </div>

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

      <ButtonsContainer>
        <BtnPrev prevPage={"/edit/name/" + slog} />
        <BtnConfirm text={"Actualizar"} action={update} />
      </ButtonsContainer>
    </div>
  );
}
