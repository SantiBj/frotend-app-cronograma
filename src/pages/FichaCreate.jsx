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
  const validation = useValidation(setVisibleModal);
  //crear ficha
  const { codeState, consult } = useCreateFicha();

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
          dataTituladas = {data}
          dataFicha={validation.dataValid}
          codeState={codeState}
          consult={consult}
        />
      </Modal>
      <div className="w-[80%] h-[80vh] mx-auto flex justify-center items-center">
        <div className="w-[70%] lg:w-[40%]">
          <Inputs validation={validation} data={data} />
        </div>
      </div>
    </>
  );
}
