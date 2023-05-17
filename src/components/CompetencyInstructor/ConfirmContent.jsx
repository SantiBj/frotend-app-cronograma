import { useContext } from "react";
import { createInst } from "../../context/createInst";
import { useNavigate } from "react-router-dom";
import { useCreate } from "../../hooks/createInstructor/useCreate";
import { Text } from "./modalCreate/Text";
import { Icon } from "./modalCreate/Icon";
import { ContainBtns } from "../Modal/ContainBtns";

export function ConfirmContent({ changeVisible }) {
  const { resetContext } = useContext(createInst);
  const { consult, codeState, resetCodeState } = useCreate();

  const navigate = useNavigate();

  function createUser() {
    consult();
  }

  function closeModal() {
    changeVisible();
    resetCodeState();
  }

  function statusOk() {
    changeVisible();
    navigate("/instructores");
    resetContext();
    resetCodeState();
  }

  return (
    <div className="w-[80%] space-y-[5px]">
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
            create={createUser}
          />
        </div>
      </div>
    </div>
  );
}
