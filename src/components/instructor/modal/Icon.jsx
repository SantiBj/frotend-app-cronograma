import { MdAssignmentAdd } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FcCancel } from "react-icons/fc"

export function Icon({ codeState }) {
  return (
    <>
      {!codeState && <AiOutlineCheckCircle size={50} />}
      {codeState === "200" && <div className="text-Green"><MdAssignmentAdd size={50} /></div>}
      {codeState && codeState !== "200" && <FcCancel size={50}/>}
    </>
  );
}
