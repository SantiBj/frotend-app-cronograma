import { useDelete } from "../../../hooks/listAssigns/useDelete";
import { ContainBtns } from "../../Modal/ContainBtns";
import { Icon } from "./Icon";
import { Text } from "./Text";
import { WaitProcess } from "../../share/WaitProcess"

export function ContentModal({ assign, closeModal, data, setData }) {
  const { loading,resetCodeState, codeState, deleteAssign,newState } = useDelete(
    assign?.id,
    data,
    setData
  );

  function cancelDelete() {
    closeModal();
    resetCodeState();
  }

  function statusOk() {
    newState(assign?.id)
    cancelDelete();
  }

  return (
    <div className="space-y-[20px]">
      <WaitProcess loading={loading}/>
      <div className="flex justify-center">
        <Icon codeState={codeState} />
      </div>
      <div className="w-[80%] mx-auto">
        <Text codeState={codeState} assign={assign} />
      </div>
      <div className="flex justify-center gap-[20px]">
        <ContainBtns
          codeState={codeState}
          closeModal={cancelDelete}
          statusOk={statusOk}
          create={deleteAssign}
        />
      </div>
    </div>
  );
}
