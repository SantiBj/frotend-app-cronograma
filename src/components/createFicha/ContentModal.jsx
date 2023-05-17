import { useNavigate } from "react-router-dom";
import { Icon } from "./modal/Icon";
import { Text } from "./modal/Text";
import { ContainBtns } from "../Modal/ContainBtns";

export function ContentModal({
  setIsVisible,
  dataValid,
  codeState,
  resetState,
  consult,
}) {
  const navigate = useNavigate();
  
  function closeModal() {
    resetState();
    setIsVisible();
  }
  function createFicha() {
    consult(dataValid);
  }
  function statusOk() {
    navigate("/fichas");
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <Icon codeState={codeState} />

      <div className="w-[80%] mx-auto space-y-[5px]">
        <Text codeState={codeState} dataValid={dataValid} />
      </div>
      <div className="space-x-[15px]">
        <ContainBtns
          codeState={codeState}
          closeModal={closeModal}
          create={createFicha}
          statusOk={statusOk}
        />
      </div>
    </div>
  );
}
