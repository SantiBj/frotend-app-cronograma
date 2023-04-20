import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useConsult } from "../../hooks/useConsult";
import { usePagination } from "../../hooks/usePaginationL";
import { ContentCards } from "../ficha/ContentCards";
import { Card } from "../instructor/Card";
import { Loading } from "../share/Loading";
import { Pagination } from "../share/Pagination";
import { useQueryParams } from "../../hooks/useQueyParams";
import { Data404 } from "../share/Data404";
import { Error403 } from "../share/Error403";
import { ErrorGeneric } from "../share/ErrorGeneric";

export function CardsGrid() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const queryParams = useQueryParams();
  const search = queryParams.get("search");

  const url = search
    ? "api/busqueda/instructores/?page=1&search=" + search
    : "api/instructores/?page=" + page;

  const { data, loading, errors } = useConsult(url, null, null, page, search);
  const { nextPage, prevPage } = usePagination(data, page, setPage);

  const handleClick = (e) => {
    console.log(e);
    const documento = e.target.value;
    navigate("/instructor/" + documento);
  };

  if (loading) {
    return <Loading />;
  }
  if (errors === "404") {
    return <Data404 text="no hay instructores" />;
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
        {data.results.map((instructor) => (
          <Card handleClick={handleClick} data={instructor} />
        ))}
      </ContentCards>
      <Pagination
        data={data}
        prevPage={prevPage}
        page={page}
        nextPage={nextPage}
        search={search}
      />
    </>
  );
}
