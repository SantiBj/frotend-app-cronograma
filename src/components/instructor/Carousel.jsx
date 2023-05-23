import { useContext, useState } from "react";
import { Assign } from "../../context/assign";
import { Card } from "./Card";
import { Loading } from "../share/Loading";
import "./carousel.css";
import { Data404 } from "../share/Data404";
import { ErrorGeneric } from "../share/ErrorGeneric";
import { useConsult } from "../../hooks/useConsult";
import { Error403 } from "../share/Error403";
import { usePagination } from "../../hooks/usePaginationL";
import { Pagination } from "../share/Pagination";

//paginar instructores disponibles
export function Carousel() {
  //para cambiarlo una vez cambie la seleccion
  const { dataAssign, setData } = useContext(Assign);
  const [selectOption, setSelectOption] = useState(dataAssign.instructor);

  //paginacion
  const [pagination, setPagination] = useState(1);

  //consulta de los instructores disponibles
  const dataPost = {
    fechaInicial: dataAssign.fechaInicio,
    idCompetencia: dataAssign.competencia.pk,
    fechaFin: dataAssign.fechaFin,
  };
  const { data, loading, errors } = useConsult(
    `api/instructoresdisponibles/?page=${pagination}`,
    dataPost,
    "POST",
    pagination
  );

  const { nextPage, prevPage } = usePagination(data,pagination,setPagination);

  function handleClick(e) {
    const cardSelect = parseInt(e.target.value);
    const dataCardSelect = data.results.find(
      (instructor) => instructor.documento === cardSelect
    );
    setData(dataCardSelect, "instructor");
    setSelectOption(dataCardSelect);
  }

  if (loading) {
    return <Loading />;
  }
  if (errors === "404") {
    return (
      <Data404
        text={`No hay instructores disponibles en la fecha ${dataAssign.fechaInicio} al ${dataAssign.fechaFin} para el rap ${dataAssign.rap.nombre} de la ficha ${dataAssign.ficha.numero}.`}
      />
    );
  }
  if (errors === "403") {
    return <Error403 />;
  }
  if (errors) {
    return <ErrorGeneric />;
  }
  return (
    <div className="w-[80%] mx-auto my-[50px]">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] justify-items-center gap-[15px]">
        {data.results.map((instructor) => (
        <Card
          key={instructor.documento}
          data={instructor}
          handleClick={handleClick}
          selectOption={selectOption.documento}
        />
      ))}
      </div>
      
      <Pagination
        data={data}
        prevPage={prevPage}
        page={pagination}
        nextPage={nextPage}
      />
    </div>
  );
}
