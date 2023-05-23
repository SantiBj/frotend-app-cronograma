import { FcDeleteDatabase } from "react-icons/fc";
import { MdOutlineTaskAlt, MdError } from "react-icons/md";

export function Icon({ codeState }) {
  return (
    <>
      {!codeState && <FcDeleteDatabase size={50} />}
      {codeState === "200" && (
        <div className="w-fit text-Green">
          <MdOutlineTaskAlt size={50} />
        </div>
      )}
      {codeState && codeState !== "200" && (
        <div className="text-Red w-fit">
          <MdError size={50} />
        </div>
      )}
    </>
  );
}
