import { useContext, useState } from "react";
import { auth } from "../context/auth";
import { Navigate } from "react-router-dom";
import { Inputs } from "../components/createFicha/Inputs";
import { Modal } from "../components/share/Modal";
import { ContentModal } from "../components/createFicha/ContentModal";
import { useConsult } from "../hooks/useConsult";
import { useValidation } from "../hooks/createFicha/useValidation";
import { useCreateFicha } from "../hooks/createFicha/useCreateFicha";
import { Loading } from "../components/share/Loading";
import { PrevArrow } from "../components/share/PrevArrow"

export function FichaCreate() {
  //consulta de las tituladas disponibles
  const { data, loading } = useConsult("api/programa/");
  //datos user
  const { user } = useContext(auth);
  const [isVisible, setIsVisible] = useState(false);
  function setVisibleModal() {
    setIsVisible(!isVisible);
  }
  //data inputs
  const validation = useValidation(setVisibleModal,data);
  //crear ficha
  const { codeState, consult,resetState } = useCreateFicha();

  if (!user || (user && !user.isAdmin)) {
    return <Navigate to="/login" />;
  }

  if (loading) {
    return <Loading/>
  }
  return (
    <>
      <Modal isVisible={isVisible} sizeMd={true}>
        <ContentModal
          setIsVisible={setVisibleModal}
          dataValid={validation.dataValid}
          codeState={codeState}
          resetState={resetState}
          consult={consult}
        />
      </Modal>
      <div className="mt-[40px] w-[80%] mx-auto ">
        <PrevArrow to={"/fichas"} />
      <div className="flex justify-center h-[75vh] items-center">
        <div className="w-[70%] lg:w-[40%]">
          <Inputs validation={validation} data={data} />
        </div>
      </div> 
      </div>
    </>
  );
}
