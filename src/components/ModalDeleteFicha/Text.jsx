export function Text({ codeState, id }) {
  return (
    <>
      {!codeState && (
        <>
          <div>
            <h3 className="text-center font-medium">
              ¿Desea eliminar la ficha <span className="text-Red">{id}</span>?
            </h3>
            <p className="text-Gray6 text-justify text-[14px] mx-[5%]">
              Tenga en cuenta que al eliminar la ficha{" "}
              <span className="text-Green font-semibold">{id}</span> se borrar
              todas las asignaciones de esta.
            </p>
          </div>
        </>
      )}
      {codeState === "200" && (
        <div>
          <h3 className="text-center text-Gray6">
            La ficha <span className="text-Green font-semibold">{id}</span> se
            elimino con exito.
          </h3>
        </div>
      )}
      {codeState && codeState != "200" && (
        <div>
          <h3 className="text-center text-Gray6">
            No se pudo eliminar la ficha{" "}
            <span className="text-Red font-semibold">{id}</span> intente mas
            tarde.
          </h3>
        </div>
      )}
    </>
  );
}
