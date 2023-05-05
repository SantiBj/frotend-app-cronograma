import { useContext } from "react";
import { createInst } from "../../context/createInst";
import { FiUserPlus, FiUserCheck, FiUserX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export function ConfirmContent({ changeVisible }) {
  const navigate = useNavigate();
  const {
    instData,
    listCompetenciesSelected,
    createUser,
    codeState,
    codeStateEmpty,
    createOk,
  } = useContext(createInst);

  const fullName = instData.nombreCompleto;
  const documento = instData.documento;
  const { quantity } = listCompetenciesSelected;

  function confirmCreate() {
    changeVisible();
    createOk();
    navigate("/instructores");
  }

  function acceptedError() {
    changeVisible();
    //pasar el conexto otra vez a 0
    createOk();
    codeStateEmpty();
    //navigate("/instructores");
  }

  return (
    <div className="w-[80%] space-y-[5px]">
      {!codeState && (
        <>
          <div className="w-fit mx-auto">
            <FiUserPlus size={45} />
          </div>
          <div>
            <h3 className="text-center font-medium text-[14px]">
              ¿Desea crear el instructor{" "}
              <span className="text-Red"> {fullName}</span> con documento{" "}
              {documento}?
            </h3>
            <p className="text-Gray6 text-justify text-[13px] mx-[5%]">
              Tenga en cuenta que el instructor solo se podra ser asignado a las{" "}
              {quantity} competencias seleccionadas
            </p>
          </div>
        </>
      )}

      {codeState === "201" && (
        <>
          <div className="w-fit mx-auto">
            <FiUserCheck size={45} />
          </div>
          <div>
            <h3 className="text-center font-medium text-[14px]">
              El instructor
              <span className="text-Red"> {fullName}</span> con documento{" "}
              {documento} ha sido creado con exito
            </h3>
          </div>
        </>
      )}

      {codeState && codeState !== "201" && codeState !== "200" && (
        <>
          <div className="w-fit mx-auto text-Red">
            <FiUserX size={45} />
          </div>
          <div>
            <h3 className="text-center font-medium text-[14px]">
              El instructor
              <span className="text-Red"> {fullName} </span> con documento{" "}
              <span className="text-Red"> {documento} </span> no pudo ser creado
              por ya existe o por un error interno.
            </h3>
          </div>
        </>
      )}

      <div className="flex mx-auto gap-[10px] w-fit pt-[15px]">
        {(!codeState || codeState === "201") && (
          <button
            onClick={!codeState ? createUser : confirmCreate}
            className="border-Green text-[14px] px-[8px] py-[4px] rounded-md text-Green mx-auto
        font-medium duration-300 hover:text-Green hover:text-White border-[2px] hover:bg-Green"
          >
            Aceptar
          </button>
        )}

        {codeState !== "201" && (
          <button
            onClick={!codeState ? changeVisible : acceptedError}
            className="border-Red border-[2px] text-Red text-[14px] px-[8px] py-[4px] 
          rounded-md duration-300 hover:text-White hover:bg-Red font-medium mx-auto"
          >
            {!codeState ? "Cancelar" : "Aceptar"}
          </button>
        )}
      </div>
    </div>
  );
}
