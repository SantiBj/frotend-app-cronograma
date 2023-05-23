import { useEffect, useState } from "react";
import { PrevArrow } from "../share/PrevArrow";

export function Header({ isInstructor, data, slog }) {
  const [entity, setEntity] = useState(null);

  useEffect(() => {
    if (!entity && data) {
      const template = isInstructor
        ? data[0]?.instructor.nombreCompleto
        : data[0]?.ficha.nombre;
      setEntity(template);
    }
  }, [data]);
  return (
    <header>
      <PrevArrow to={`${isInstructor ? "/instructor/" : "/ficha/"}${slog}`} />
      <h2 className="font-semibold text-[21px]">Asignaciones Activas</h2>
      <h3>
        <span className="font-semibold">Nombre : </span>
        {entity}
      </h3>
      <h3>
        <span className="font-semibold">
          {isInstructor ? "Documento : " : "Numero : "}
        </span>
        {slog}
      </h3>
    </header>
  );
}
