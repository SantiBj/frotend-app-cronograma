import { Link } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";

export function BtnPrev({ prevPage }) {
  return (
    <Link
      className="p-[8px] rounded-full border-[3px] border-Green text-Green bg-Green rotate-180 hover:scale-110 hover:brightness-125"
      to={prevPage}
    >
      <GrFormNextLink size={20} />
    </Link>
  );
}
