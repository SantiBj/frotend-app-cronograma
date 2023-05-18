import { PrevArrow } from "../share/PrevArrow";

export function Header({ prevUrl=false, documento, name = false }) {
  return (
    <header className="mt-[50px]">
      {prevUrl && (
        <div className="mb-[10px]">
          <PrevArrow to={prevUrl} />
        </div>
      )}

      <h3 className="text-[24px] font-semibold">Editar Instructor</h3>
      {name && (
        <h2>
          <span className="font-semibold">Nombre : </span>
          {name}
        </h2>
      )}
      <h2>
        <span className="font-semibold">Documento : </span>
        {documento}
      </h2>
    </header>
  );
}
