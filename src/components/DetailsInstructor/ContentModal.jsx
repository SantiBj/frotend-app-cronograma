import { useNavigate } from "react-router-dom";
import { useDelete } from "../../hooks/deleteInstructor/useDelete";
import { Text } from "./modal/Text";
import { Icon } from "./modal/Icon";
import { ContainBtns } from "../Modal/ContainBtns";
import { WaitProcess } from "../share/WaitProcess"

export function ContentModal({ id, nombre, handleClick }) {
  const { destroy, loading,codeState, resetState } = useDelete(id);

  const navigate = useNavigate();
  function closeModal() {
    handleClick();
    resetState();
  }

  function statusOk() {
    closeModal();
    navigate("/instructores");
  }

  return (
    <div className="space-y-[20px]">
      <WaitProcess loading={loading}/>
      <div className="flex justify-center">
        <Icon codeState={codeState} />
      </div>
      <div className="w-[80%] mx-auto">
        <Text codeState={codeState} id={id} name={nombre} />
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
