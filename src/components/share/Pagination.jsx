import { GrLinkPrevious } from "react-icons/gr";

export function Pagination({ data, prevPage, page, nextPage, search }) {
  //solo se carga cuando hayan mas paginas que consulten el brekpoint principal
  //es decir que cuando haya consulta no se cargara ya que solo mostrare 8 coincidencias
  if ((!data.previous && !data.next) || search) {
    return null;
  }
  return (
    <div className="w-[80%] flex justify-between mx-auto mt-[35px]">
      <button
        className={`${!data.previous && "opacity-20 pointer-events-none"}`}
        onClick={prevPage}
      >
        <div className="text-Black flex gap-[4px] items-center">
          <GrLinkPrevious />
          <p>Anterior</p>
        </div>
      </button>

      <div>{page}</div>

      <button
        className={`${!data.next && "opacity-20 pointer-events-none"}`}
        onClick={nextPage}
      >
        <div className="text-Black flex gap-[4px] items-center">
          <p>Siguiente</p>
          <div className=" rotate-180">
            <GrLinkPrevious />
          </div>
        </div>
      </button>
    </div>
  );
}
