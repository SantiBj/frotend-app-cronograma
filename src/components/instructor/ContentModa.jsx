import { useNavigate } from "react-router-dom";
import { useCreate } from "../../hooks/createAsignacion/useCreate";
import { Text } from "./modal/Text";
import { Icon } from "./modal/Icon";
import { ContainBtns } from "../Modal/ContainBtns";

export function ContentModal({ setIsVisible }) {
  const { codeState, consult, resetCodeState, resetContext } = useCreate();

  const navigate = useNavigate();
  function closeModal() {
    setIsVisible(false);
    resetCodeState();
  }
  function createAssign() {
    consult();
  }
  function statusOk() {
    setIsVisible(false);
    resetCodeState();
    navigate("/assign/program");
    resetContext();
  }

  return (
    <div className="space-y-[20px]">
      <div className="flex justify-center">
        <Icon codeState={codeState} />
      </div>
      <div className="w-[80%] mx-auto">
        <Text codeState={codeState} />
      </div>
      <div className="flex justify-center gap-[20px]">
        <ContainBtns
          codeState={codeState}
          closeModal={closeModal}
          statusOk={statusOk}
          create={createAssign}
        />
      </div>
    </div>
  );
}
