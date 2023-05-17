import { useContext } from "react";
import { Assign } from "../../../context/assign";

export function Text({ codeState }) {
  const { dataAssign } = useContext(Assign);

  return (
    <>
      {!codeState && (
        <p className="text-center text-[14px]">
          ¿ Desea Asignarle a la ficha
          <span className="font-medium text-Green">
            {" "}
            {dataAssign.ficha.numero}
          </span>{" "}
          el rap
          <span className="font-medium text-Green">
            {" "}
            {dataAssign.rap.nombre}
          </span>{" "}
          del
          <span className="font-medium text-Green">
            {" "}
            {dataAssign.fechaInicio}
          </span>{" "}
          al
          <span className="font-medium text-Green">
            {" "}
            {dataAssign.fechaFin}
          </span>{" "}
          con el instructor
          <span className="font-medium text-Green">
            {" "}
            {dataAssign.instructor.nombreCompleto}
          </span>
          ?
        </p>
      )}
      {codeState === "200" && (
        <p className="text-center text-[14px]">
          Se le asigno a la ficha
          <span className="font-medium text-Green">
            {" "}
            {dataAssign.ficha.numero}
          </span>{" "}
          el rap
          <span className="font-medium text-Green">
            {" "}
            {dataAssign.rap.nombre}
          </span>{" "}
          del
          <span className="font-medium text-Green">
            {" "}
            {dataAssign.fechaInicio}
          </span>{" "}
          al
          <span className="font-medium text-Green">
            {" "}
            {dataAssign.fechaFin}
          </span>{" "}
          con el instructor
          <span className="font-medium text-Green">
            {" "}
            {dataAssign.instructor.nombreCompleto}
          </span>
        </p>
      )}
      {codeState && codeState !== "200" && (
        <p className="text-center text-[14px]">
          No se pudo realizar la asignacion a la ficha
          <span className="font-medium text-Red">
            {" "}
            {dataAssign.ficha.numero}
          </span>{" "}
          del rap{" "}
          <span className="font-medium text-Red">{dataAssign.rap.nombre}</span>
        </p>
      )}
    </>
  );
}
