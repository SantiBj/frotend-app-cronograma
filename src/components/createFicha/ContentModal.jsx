import { ImFileText } from "react-icons/im";
import { useNavigate } from "react-router-dom";

export function ContentModal({
  setIsVisible,
  dataFicha,
  dataTituladas,
  codeState,
  consult,
}) {
  //logica
  const navigate = useNavigate();

  function closeModal() {}

  function createFicha() {
    consult(dataTituladas, dataFicha);
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

      <div className="w-[80%] mx-auto space-y-[5px]">
        {!codeState && (
          <>
            <p className="text-center font-medium text-[14px]">
              ¿Desea crear la ficha {dataFicha.ficha} y asignarsela a la
              titulada {dataFicha.titulada}?
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
              La ficha {dataFicha.ficha} perteneciente a la titulada{" "}
              {dataFicha.titulada} a sido creada con exito.
            </p>
          </>
        )}
        {codeState && codeState !== "200" && (
          <p className="text-center text-Red font-medium text-[14px]">
            La ficha {dataFicha.ficha} no pudo ser creada
            {dataFicha.titulada} por que ya exite o por un problema del
            servidor.
          </p>
        )}
      </div>
      <div className="space-x-[15px]">
        {codeState}
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
            onClick={setIsVisible}
            className="border-Red text-Red text-[14px] px-[8px] py-[4px] rounded-md  
        font-medium duration-300 hover:text-White hover:bg-Red border-[2px]"
          >
            {
                !codeState ? "Cancelar" : "Aceptar"
            }
          
          </button>
        )}
      </div>
    </div>
  );
}
