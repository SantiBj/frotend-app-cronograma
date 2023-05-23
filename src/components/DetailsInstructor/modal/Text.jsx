export function Text({ codeState, id, name }) {
  return (
    <>
      {!codeState && (
        <div className="space-y-[5px]">
          <h3 className="text-center font-medium text-[14px]">
            ¿Desea eliminar al instructor{" "}
            <span className="text-Red">{name} </span>con numero de documento{" "}
            <span className="text-Red">{id}</span> ?
          </h3>

          <p className="text-Gray6 text-justify text-[14px] mx-[5%]">
            Tenga en cuenta que al eliminar el instructor se borrar todas las
            asignaciones de este.
          </p>
        </div>
      )}
      {codeState === "200" && (
        <div>
          <h3 className="text-center font-medium text-[14px]">
            El instructor {name} se elimino con exito.
          </h3>
        </div>
      )}
      {codeState && codeState !== "200" && (
        <div>
          <h3 className="text-center font-medium text-[14px]">
            El instructor {name} no se pudo elimino intente mas tarde.
          </h3>
        </div>
      )}
    </>
  );
}
