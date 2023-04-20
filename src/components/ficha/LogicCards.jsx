import { ContentCards } from "./ContentCards";
import { useContext, useState } from "react";
import { Assign } from "../../context/assign";
import { useQueryParams } from "../../hooks/useQueyParams";
import { Card } from "./Card";
import { Loading } from "../share/Loading";
import { useConsult } from "../../hooks/useConsult";
import { Error403 } from "../share/Error403";
import { ErrorGeneric } from "../share/ErrorGeneric";
import { Data404 } from "../share/Data404";
import { usePagination } from "../../hooks/usePaginationL";
import { Pagination } from "../share/Pagination";

export function LogicCards() {
  const { dataAssign, setData } = useContext(Assign);
  const programa = dataAssign.programa.id;

  //capturando parametros de busqueda
  const queryParams = useQueryParams();
  const search = queryParams.get("search");
  const [page, setPage] = useState(1);

  //se ejecuta al cargar y al actualizarse o cambiar una variable
  const urlConsult = search
    ? "api/ficha-buscador/?page=1&search=" + search + "&programa=" + programa
    : "api/fichasprograma/" + programa + "/?page=" + page;

  const { data, loading, errors } = useConsult(
    urlConsult,
    null,
    null,
    page,
    search
  );
  const { nextPage, prevPage } = usePagination(data, page, setPage);

  //ficha seleccionada
  const [selectedOption, setSelectedOption] = useState(dataAssign.ficha);
  function handleClick(e) {
    const numberFicha = parseInt(e.target.value);
    const dataFicha = data.results.find(
      (ficha) => ficha.numero === numberFicha
    );
    setSelectedOption(dataFicha);
    //se usa haci para que cambie rapido el estado del context
    setData(dataFicha, "ficha");
  }

  if (loading) {
    return <Loading small={true} />;
  }
  if (errors === "404") {
    return <Data404 text="no hay coincidencias" small={true} />;
  }
  if (errors === "403") {
    return <Error403 />;
  }
  if (errors) {
    return <ErrorGeneric />;
  }
  return (
    <>
      <ContentCards>
        {data.results.map((ficha) => (
          <Card
            key={ficha.numero}
            numberContent={ficha.numero}
            selectedOption={selectedOption.numero}
            handleClick={handleClick}
          />
        ))}
      </ContentCards>
      <Pagination
        data={data}
        page={page}
        search={search}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </>
  );
}
