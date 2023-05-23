import { FaCheckCircle,FaUserEdit } from "react-icons/fa";
import { MdCancel } from "react-icons/md";


export function Icon({ codeState }) {
  return (
    <>
      {!codeState && (
        <>
          <FaUserEdit size={45} />
        </>
      )}
      {codeState === "200" && (
        <div className="text-Green flex justify-center my-[20px]">
          <FaCheckCircle size={45} />
        </div>
      )}
      {codeState && codeState != "200" && (
        <div className="text-Red flex justify-center my-[20px]">
          <MdCancel size={45} />
        </div>
      )}
    </>
  );
}
