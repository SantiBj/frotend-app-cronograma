import { FiUserPlus, FiUserCheck, FiUserX } from "react-icons/fi";

export function Icon({ codeState }) {
  return (
    <>
      {!codeState && <FiUserPlus size={45} />}

      {codeState === "200" && <div className="text-Green mx-auto"><FiUserCheck size={45} />
        </div>}

      {codeState && codeState !== "200" && (
        <div className="w-fit mx-auto text-Red">
          <FiUserX size={45} />
        </div>
      )}
    </>
  );
}
