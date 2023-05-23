import { useRef } from "react";
import { Navigate, useParams, useSearchParams } from "react-router-dom";

export function useWhatEntity() {
  //capturar queryparams para saber si es instructor o ficha
  const { slog } = useParams();
  const isInstructor = useRef();
  const [searchParams] = useSearchParams();

  //capturando los queryparams y indicando si es instructor o ficha
  const queryparams = searchParams.get("instructor");
  if (queryparams === "true") {
    isInstructor.current = true;
  } else if (queryparams === "false") {
    isInstructor.current = false;
  } else {
    return <Navigate to={"/"} />;
  }
  

  const url = isInstructor.current
    ? `api/asignaciones/activas/inst/${slog}/`
    : `api/asignaciones/activas/${slog}/`;

  return {
    url,
    slog,
    isInstructor: isInstructor.current,
  };
}
