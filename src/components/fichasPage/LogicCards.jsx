import { useState } from "react";
import { useConsult } from "../../hooks/useConsult";
import { useQueryParams } from "../../hooks/useQueyParams";
import { ContentCards } from "../ficha/ContentCards";
import { Card } from "../ficha/Card";
import { Loading } from "../share/Loading";
import { ErrorGeneric } from "../share/ErrorGeneric";
import { Data404 } from "../share/Data404";
import { Pagination } from "../share/Pagination";
import { usePagination } from "../../hooks/usePaginationL";
import { Error403 } from "../share/Error403";
import { useNavigate } from "react-router-dom";

export function LogicCards() {

  const navigate = useNavigate()
  //navigate al dar click sobre la card
  function handleClik(e){
    const cardId = e.target.value
    navigate("/ficha/"+cardId)
  }

  //capturando consulta del queryparams de la url
  const queryParams = useQueryParams();
  const search = queryParams.get("search");
  const [page, setPage] = useState(1);

  const url = search
    ? "api/fichaSearch/??page=1&search=" + search
    : "api/fichas/?page=" + page;

  const { data, loading, errors } = useConsult(url, null, null, page, search);
  const { nextPage, prevPage } = usePagination(data, page, setPage);

  if (loading) {
    return <Loading />;
  }
  if (errors === "404") {
    return <Data404 text="no hay coincidencias" small={true}/>;
  }
  if (errors === "403") {
    return <Error403 />;
  }
  if (errors) {
    return <ErrorGeneric />;
  }
  return (
    <div>
      <ContentCards>
        {data.results.map((ficha) => (
          <Card
            key={ficha.numero}
            numberContent={ficha.numero}
            selectedOption={null}
            handleClick={handleClik}
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
    </div>
  );
}
