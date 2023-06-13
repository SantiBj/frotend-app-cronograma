import { useNavigate } from "react-router-dom";
import { useDelete } from "../../hooks/DeleteFicha/useDelete";
import { Icon } from "./Icon";
import { Text } from "./Text";
import { ContainBtns } from "../Modal/ContainBtns";
import { WaitProcess } from "../share/WaitProcess"

export function DelContentModal({ id, handleClick }) {
  const { loading,codeState, consult, resetCodeState } = useDelete(id);

  const navigate = useNavigate();
  function destroy() {
    consult();
  }
  function closeModal() {
    handleClick();
    resetCodeState();
  }
  function statusOk() {
    handleClick();
    resetCodeState();
    navigate("/fichas");
  }

  return (
    <div className="space-y-[20px]">
      <WaitProcess loading={loading}/>
      <div className="flex justify-center">
        <Icon codeState={codeState} />
      </div>
      <div className="w-[80%] mx-auto">
        <Text codeState={codeState} id={id} />
      </div>
      <div className="flex justify-center gap-[20px]">
        <ContainBtns
          codeState={codeState}
          closeModal={closeModal}
          statusOk={statusOk}
          create={destroy}
        />
      </div>
    </div>
  );
}
