import { PrevArrow } from "./PrevArrow";

export function PageHeader({ name, id, instructor }) {
  return (
    <div>
      <PrevArrow />
      <h2 className="font-semibold text-[23px]">
        {instructor ? "Detalles del Instructor" : "Detalles de la ficha"}
      </h2>

      <h3>
        <span className="text-[20px] font-semibold">
          {instructor ? "Nombre :" : "Titulada"}
        </span>{" "}
        <span className="text-[17px]">{name}</span>
      </h3>
      <h4>
        <span className="text-[18px] font-semibold">
          {instructor ? "Documento :" : "Ficha"}
        </span>{" "}
        <span>{id}</span>
      </h4>
    </div>
  );
}
