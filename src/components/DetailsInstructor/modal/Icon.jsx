import { RiUserUnfollowLine } from "react-icons/ri";
import { FaCheckCircle, FaUserSlash } from "react-icons/fa";

export function Icon({ codeState }) {
  return (
    <>
      {!codeState && (
        <div className="w-fit mx-auto">
          <RiUserUnfollowLine size={45} />
        </div>
      )}
      {codeState === "200" && (
        <div className="text-Green flex justify-center my-[20px]">
          <FaCheckCircle size={45} />
        </div>
      )}
      {codeState && codeState !== "200" && (
        <div className="text-Red flex justify-center my-[20px]">
          <FaUserSlash size={45} />
        </div>
      )}
    </>
  );
}
