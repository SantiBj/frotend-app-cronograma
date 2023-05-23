export function Text({ codeState, assign }) {
  return (
    <>
      {!codeState && (
        <p className="text-center text-Gray6 text-[14px]">
          ¿Desea eliminar la asignacion <span className="font-semibold text-Black lowercase">{assign?.rap.nombre}</span> del{" "}
          <span className="font-semibold text-Green">{assign?.fechaInicio}</span> al <span className="font-semibold text-Green">{assign?.fechaFin}</span> ficha{" "}
          <span className="font-bold text-Green">{assign?.ficha.numero}</span> instructor <span className="font-bold text-Green">{assign?.instructor.documento}</span>{" "}?
        </p>
      )}
      {codeState === "200" && (
        <p className="text-center text-[14px] font-semibold">
          La asignacion fue eliminada con exito
        </p>
      )}
      {codeState && codeState !== "200" && (
        <p className="text-center text-[14px] font-semibold">
          La Asignacion no pudo ser eliminada, intente mas tarde.
        </p>
      )}
    </>
  );
}
