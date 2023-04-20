import { GrFormPreviousLink } from "react-icons/gr";
import { Link } from "react-router-dom";

export function PrevArrow({to}) {
  return (
    <Link to={to ? to :-1} className="flex items-center duration-200 opacity-70 hover:text-Green">
      <div>
        <GrFormPreviousLink  size={25} />
      </div>
      <p className="text-[18px]">volver</p>
    </Link>
  );
}
