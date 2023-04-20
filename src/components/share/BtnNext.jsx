import { Link } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";

export function BtnNext({ nextPage, desactivate }) {

  //guardar en local strorange cada contexto
  return (
    <Link
      className={`p-[8px] rounded-full border-[3px] border-Green bg-Green hover:scale-110 hover:brightness-125 ${desactivate && "pointer-events-none opacity-30"}`}
      to={nextPage}
    >
      <GrFormNextLink size={20} />
    </Link>
  );
}
