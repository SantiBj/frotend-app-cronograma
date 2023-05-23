export function Text({ codeState, id }) {
  return (
    <>
      {!codeState && (
        <div>
          <h3 className="text-center font-medium">
            ¿Desea Actualizar el Instructor con documento{" "}
            <span className="text-Red">{id}</span>?
          </h3>
          <p className="text-Gray6 text-justify text-[14px] mx-[5%]">
            Tenga en cuenta que al actualizar el instructor solo se podra
            asignar a las competencias seleccionadas o actualizadas.
          </p>
        </div>
      )}
      {codeState === "200" && (
        <div>
          <h3 className="text-center text-Gray6">
            El Instructor <span className="text-Green font-semibold">{id}</span>{" "}
            se actualizo con exito.
          </h3>
        </div>
      )}
      {codeState && codeState !== "200" && (
        <div>
          <h3 className="text-center text-Gray6">
            No se pudo actualizar el instructor{" "}
            <span className="text-Red font-semibold">{id}</span> intente mas
            tarde.
          </h3>
        </div>
      )}
    </>
  );
}
