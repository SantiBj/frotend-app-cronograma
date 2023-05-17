export function Text({ codeState , dataValid }) {
  return (
    <>
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
            Tenga en cuenta que la ficha solo se podra asignar a los resultados
            de aprendizaje que comprende la titulada.
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
    </>
  );
}
