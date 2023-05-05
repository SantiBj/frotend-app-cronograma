import { TbSquareRoundedArrowLeft } from "react-icons/tb";
import { Link } from "react-router-dom";

export function PrevArrow({ to }) {
  return (
    <Link
      to={to ? to : -1}
      
    >
      <div className="flex items-center gap-[10px] duration-200  hover:text-Green">
        <div className="text-Green">
          <TbSquareRoundedArrowLeft size={30} />
        </div>
        <p className="text-[20px]">volver</p>
      </div>
    </Link>
  );
}
