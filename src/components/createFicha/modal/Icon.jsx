import { MdTaskAlt } from "react-icons/md";
import { RiFileExcel2Fill } from "react-icons/ri";
import { ImFileText } from "react-icons/im";

export function Icon({ codeState }) {
  return (
    <>
      {!codeState && <ImFileText size={45} />}
      {codeState === "200" && (
        <div className="text-Green w-fit">
          <MdTaskAlt size={45} />
        </div>
      )}
      {codeState && codeState !== "200" && (
        <div className="text-Red w-fit">
          <RiFileExcel2Fill size={45} />
        </div>
      )}
    </>
  );
}
