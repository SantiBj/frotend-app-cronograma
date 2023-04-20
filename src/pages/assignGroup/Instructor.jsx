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
      <Modal isVisible={isVisible}>
        <ContentModal isVisible={isVisible} setIsVisible={setIsVisible}/>
      </Modal>
      <Title text="Elige el instructor Disponible:" />
      {dataAssign.instructor.documento && (
        <div>
          {" "}
          <span className="font-medium">Seleccionaste a:</span>{" "}
          {dataAssign.instructor.nombreCompleto}
        </div>
      )}
      <Carousel />
      <ButtonsContainer>
        <BtnPrev prevPage="/assign/date" />
        <button
          onClick={()=>{setIsVisible(true)}}
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
