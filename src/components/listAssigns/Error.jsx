import { PrevArrow } from "../share/PrevArrow";
import { Data404 } from "../share/Data404";

export function Error({ slog,isInstructor }) {
    return (
        <div className="w-[80%] mx-auto">
          <div className="my-[50px]">
            <PrevArrow to={`${isInstructor ? "/instructor/" : "/ficha/"}${slog}`} />
          </div>
          <div className="mb-[5%]">
            <Data404
              text={`No existen Asignaciones Activas para ${
                isInstructor ? "el Instructor " : "la Ficha "
              } ${slog}`}
            />
          </div>
        </div>
      );
}