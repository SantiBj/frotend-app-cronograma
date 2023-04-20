import { IoCreateOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export function BtnCreate({to}){
    return (
        <div className="mt-[15px] flex justify-end">
        <Link
          to={to}
          className="flex gap-[3px] w-fit p-1 border-Black border-[2px] duration-300 hover:bg-Black hover:text-White rounded-md"
        >
          <IoCreateOutline size={20} />
          <div>Crear</div>
        </Link>
      </div>
    )
}