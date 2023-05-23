import { Title } from "../../components/share/Title";
import { Carousel } from "../../components/instructor/Carousel";
import { BtnPrev } from "../../components/share/BtnPrev";
import { Assign } from "../../context/assign";
import { useContext,useState } from "react";
import { ButtonsContainer } from "../../components/share/ButtonsContainer";
import { Navigate } from "react-router-dom";
import { Modal } from "../../components/share/Modal";
import { ContentModal } from "../../components/instructor/ContentModa";


export function Instructor() {
  const { dataAssign } = useContext(Assign);
  const [isVisible,setIsVisible] = useState(false)

	if (!dataAssign.fechaInicio || !dataAssign.fechaFin){
		return <Navigate to="/assign/date"/>
	}
  return (
    <div>
      <Modal isVisible={isVisible} sizeMd>
        <ContentModal isVisible={isVisible} setIsVisible={setIsVisible} />
      </Modal>
      <div className={`${dataAssign.instructor.documento && "flex flex-row justify-center md:justify-between items-center"}`}>
        <div className="mb-[70px] w-[60%] max-w-[400px]">
          <Title text="Elige el instructor Disponible:" />
          <h2 className="lowercase">
            <span className="font-medium">ficha: </span>
            {dataAssign.ficha.numero}
          </h2>
          <h2 className="lowercase">
            <span className="font-medium">Fecha: </span>
            {dataAssign.fechaInicio} al {dataAssign.fechaFin}
          </h2>
          <h2 className="lowercase">
            <span className="font-medium">Competencia: </span>
            {dataAssign.competencia.nombre}
          </h2>
          <h2 className="lowercase">
            <span className="font-medium">Rap: </span>
            {dataAssign.rap.nombre}
          </h2>
        </div>
        {dataAssign.instructor.documento && (
          <div className="hidden md:flex">
            {" "}
            <span className="font-medium">Seleccionaste a:</span>{" "}
            {dataAssign.instructor.nombreCompleto}
          </div>
        )}
      </div>

      <Carousel />
      <ButtonsContainer>
        <BtnPrev prevPage="/assign/date" />
        <button
          onClick={() => {
            setIsVisible(true);
          }}
          className={`bg-Green py-[5px] px-[10px] rounded-lg font-medium duration-300 hover:scale-110 hover:brightness-125 ${
            !dataAssign.instructor.documento && "pointer-events-none opacity-30"
          }`}
        >
          confirmar
        </button>
      </ButtonsContainer>
    </div>
  );
}
