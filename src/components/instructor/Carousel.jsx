import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { useContext, useState } from "react";
import { Assign } from "../../context/assign";
import { Card } from "./Card";
import { Loading } from "../share/Loading";
import "./carousel.css";
import { Data404 } from "../share/Data404";
import { ErrorGeneric } from "../share/ErrorGeneric";
import { useConsult } from "../../hooks/useConsult";
import { Error403 } from "../share/Error403";

export function Carousel() {
  //para cambiarlo una vez cambie la seleccion
  const { dataAssign, setData } = useContext(Assign);
  const [selectOption, setSelectOption] = useState(dataAssign.instructor);

  //consulta de los instructores disponibles
  const dataPost = {
    fechaInicial: dataAssign.fechaInicio,
    idCompetencia: dataAssign.competencia.pk,
    fechaFin: dataAssign.fechaFin,
  };

  //get disfrazado de post
  const { data, loading, errors } = useConsult(
    "api/instructoresdisponibles/",
    dataPost,
    "POST"
  );

  function handleClick(e) {
    const cardSelect = parseInt(e.target.value);
    const dataCardSelect = data.find(
      (instructor) => instructor.documento === cardSelect
    );
    setData(dataCardSelect, "instructor");
    setSelectOption(dataCardSelect);
  }

  if (loading) {
    return <Loading />;
  }
  if (errors === "404") {
    return <Data404  text={`No hay instructores disponibles en la fecha ${dataAssign.fechaInicio} al ${dataAssign.fechaFin} para el rap ${dataAssign.rap.nombre} de la ficha ${dataAssign.ficha.numero}.`} />;
  }
  if (errors === "403") {
    return <Error403/>
  }
  if (errors) {
    return <ErrorGeneric />;
  }
  return (
    <div className="h-[60vh] w-[80%] max-w-[700px] mx-auto flex items-center">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        //cantidad de imagenes en la pantalla
        slidesPerView={3}
        navigation
        //para cambiar de imagen desde la paginacion
        pagination={{ clickable: true }}
        //para poder volver a la imagen de inicio
        loop={false}
      >
        {data.map((instructor) => (
          <SwiperSlide key={instructor.documento}>
            <Card
              data={instructor}
              handleClick={handleClick}
              selectOption={selectOption.documento}
            />
          </SwiperSlide>
        ))}
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  );
}
