import { useContext } from "react";
import { createInst } from "../../../context/createInst";
import { useCountSelected } from "../../../hooks/createInstructor/useCountSelected";

export function Text({ codeState }) {
  const { instData } = useContext(createInst);

  const fullName = instData.nombreCompleto;
  const documento = instData.documento;
  const { quantity } = useCountSelected();

  return (
    <>
      {!codeState && (
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
      )}
      {codeState === "200" && (
        <div>
          <h3 className="text-center font-medium text-[14px]">
            El instructor
            <span className="text-Red"> {fullName}</span> con documento{" "}
            {documento} ha sido creado con exito
          </h3>
        </div>
      )}
      {codeState && codeState !== "200" && (
        <div>
          <h3 className="text-center font-medium text-[14px]">
            El instructor
            <span className="text-Red"> {fullName} </span> con documento{" "}
            <span className="text-Red"> {documento} </span> no pudo ser creado
            por ya existe o por un error interno.
          </h3>
        </div>
      )}
    </>
  );
}
