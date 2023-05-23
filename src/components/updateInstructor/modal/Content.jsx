import { useNavigate } from "react-router-dom";
import { ContainBtns } from "../../Modal/ContainBtns";
import { Text } from "./Text";
import { Icon } from "./Icon";

export function Content({ codeState, id, closeModal, update,resetContext }) {
  const navigate = useNavigate();

  function statusOk() {
    closeModal();
    resetContext()
    navigate("/instructor/"+id);
  }

  return (
    <div className="space-y-[20px]">
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
          create={update}
        />
      </div>
    </div>
  );
}
