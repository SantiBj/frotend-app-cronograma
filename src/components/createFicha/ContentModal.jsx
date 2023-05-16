import { ImFileText } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { MdTaskAlt } from "react-icons/md";
import { RiFileExcel2Fill } from "react-icons/ri";

export function ContentModal({
  setIsVisible,
  dataValid,
  codeState,
  resetState,
  consult,
}) {
  //logica
  const navigate = useNavigate();

  function closeModal() {
    resetState();
    setIsVisible();
  }

  function createFicha() {
    consult(dataValid);
  }

  function statusOk() {
    navigate("/fichas");
  }

  return (
    <div className="flex flex-col items-center gap-2">
      {!codeState && <ImFileText size={45} />}
      {codeState === "200" && (
        <div className="text-Green w-fit">
          <MdTaskAlt size={45} />
        </div>
      )}
      {codeState && codeState !== "200" && (
        <div className="text-Red w-fit">
          <RiFileExcel2Fill size={45} />
        </div>
      )}

      <div className="w-[80%] mx-auto space-y-[5px]">
        {!codeState && (
          <>
            <p className="text-center font-medium text-[14px]">
              ¿Desea crear la ficha{" "}
              <span className="text-Green font-bold">{dataValid.ficha}</span> y
              asignarsela a la titulada{" "}
              <span className="font-bold text-Green">
                {dataValid.titulada?.nombre}
              </span>
              ?
            </p>
            <p className="text-Gray6 text-justify text-[14px]">
              Tenga en cuenta que la ficha solo se podra asignar a los
              resultados de aprendizaje que comprende la titulada.
            </p>
          </>
        )}
        
        {codeState === "200" && (
          <>
            <p className="text-center font-medium text-[14px]">
              La ficha{" "}
              <span className="font-bold text-Green">{dataValid.ficha}</span>{" "}
              perteneciente a la titulada{" "}
              <span className="font-bold text-Green">
                {dataValid.titulada?.nombre}
              </span>{" "}
              a sido creada con exito.
            </p>
          </>
        )}
        {codeState && codeState !== "200" && (
          <p className="text-center font-medium text-[14px]">
            La ficha <span className="text-Red">{dataValid.ficha} </span>no pudo
            ser creada por que ya exite o por un problema del servidor.
          </p>
        )}
      </div>
      <div className="space-x-[15px]">
        {(!codeState || codeState === "200") && (
          <button
            onClick={!codeState ? createFicha : statusOk}
            className="border-Green text-Green text-[14px] px-[8px] py-[4px] rounded-md  
         font-medium duration-300 hover:text-White hover:bg-Green border-[2px]"
          >
            Aceptar
          </button>
        )}

        {codeState !== "200" && (
          <button
            onClick={closeModal}
            className="border-Red text-Red text-[14px] px-[8px] py-[4px] rounded-md  
        font-medium duration-300 hover:text-White hover:bg-Red border-[2px]"
          >
            {!codeState ? "Cancelar" : "Aceptar"}
          </button>
        )}
      </div>
    </div>
  );
}
