import { useContext } from "react";
import { createInst } from "../../context/createInst";
import { useNavigate } from "react-router-dom";
import { useCreate } from "../../hooks/createInstructor/useCreate";
import { Text } from "./modalCreate/Text";
import { Icon } from "./modalCreate/Icon";
import { ContainBtns } from "../Modal/ContainBtns";
import { WaitProcess } from "../share/WaitProcess";

export function ConfirmContent({ changeVisible }) {
  const { resetContext } = useContext(createInst);
  const { consult, loading ,codeState, resetCodeState } = useCreate();

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
      <WaitProcess loading={loading}/>
      <div className="flex flex-col justify-center items-center">
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
