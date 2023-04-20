import { Card } from "./Card";
import { useConsult } from "../../hooks/useConsult";
import { useState , useContext } from "react";
import { usePagination } from "../../hooks/usePaginationL";
import { useQueryParams } from "../../hooks/useQueyParams";
import { Pagination } from "../share/Pagination";
import { Loading } from "../share/Loading";
import { Data404 } from "../share/Data404";
import { ErrorGeneric } from "../share/ErrorGeneric";
import { createInst } from "../../context/createInst";

export function CardsGrid() {
  const { instData, setInstructorData } = useContext(createInst);
  //paginacion
  const [page, setPage] = useState(1);
  //parametro de busqueda
  const queryParams = useQueryParams();
  const search = queryParams.get("search");
  const url = search
    ? "api/buscador/competencias/?page=1&search=" + search
    : "api/competencias/?page=" + page;
  const { data, loading, errors } = useConsult(url, null, null, page, search);
  const [selected, setSelected] = useState(instData.competencias);

  //funcion al seleccionar una competencia
  function handleSelected(e) {
    const name = e.target.name;
    const checked = e.target.checked;
    if (name in selected) {
      const check = !selected[name];
      const template = {
        ...selected,
        [name]: check,
      };
      const dataInst = {
        competencias: { ...template },
      };
      setSelected(template);
      setInstructorData(dataInst);
    } else {
      const template = {
        ...selected,
        [name]: checked,
      };
      const dataInst = {
        competencias: { ...template },
      };
      setSelected(template);
      setInstructorData(dataInst);
    }
  }

  const { nextPage, prevPage } = usePagination(data, page, setPage);

  if (loading) {
    return <Loading />;
  }
  if (errors === "404") {
    return <Data404 text="no hay competencias" />;
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
              selected={selected}
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
