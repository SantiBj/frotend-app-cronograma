import { Card } from "./Card";
import { useConsult } from "../../hooks/useConsult";
import { useState, useContext, useEffect } from "react";
import { usePagination } from "../../hooks/usePaginationL";
import { useQueryParams } from "../../hooks/useQueyParams";
import { Pagination } from "../share/Pagination";
import { Loading } from "../share/Loading";
import { Data404 } from "../share/Data404";
import { Error403 } from "../share/Error403";
import { ErrorGeneric } from "../share/ErrorGeneric";



export function CardsGrid({ context,setContext, searchUrl, competenciesUrl }) {
  //////////////carga de competencias/////////
  //paginacion
  const [page, setPage] = useState(1);
  //parametro de busqueda
  const queryParams = useQueryParams();
  const search = queryParams.get("search");
  const url = search ? searchUrl + search : competenciesUrl + page;
  const { data, loading, errors } = useConsult(url, null, null, page, search);
  //////////////carga de competencias/////////


  //funcion al seleccionar una competencia
  function handleSelected(e) {
    const name = e.target.name;

    const checked = e.target.checked;

    if (name in context.competencias) {
      const competenciesInst = {
        competencias: {
          ...context.competencias,
          [name]: !context.competencias[name],
        },
      };
      setContext(competenciesInst);

    } else {
      const dataInst = {
        competencias: {
          ...context.competencias,
          [name]: checked,
        },
      };
      setContext(dataInst);
    }
  }

  const { nextPage, prevPage } = usePagination(data, page, setPage);

  if (loading) {
    return <Loading />;
  }
  if (errors === "404") {
    return <Data404 text="no hay competencias" />;
  }
  if (errors === "403") {
    return <Error403 />;
  }
  if (errors) {
    return <ErrorGeneric />;
  }
  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] lg:gap-[50px] my-[40px]">
          {data.results.map((competencia) => (
            <Card
              key={competencia.pk}
              selected={context.competencias}
              handleClick={handleSelected}
              content={competencia}
            />
          ))}
        </div>
      </div>
      <Pagination
        data={data}
        prevPage={prevPage}
        nextPage={nextPage}
        page={page}
        search={search}
      />
    </>
  );
}
