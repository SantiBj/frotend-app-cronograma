import { useState } from "react";
import { Modal } from "../share/Modal";
import { ContentModal } from "./ContentModal";

export function BtnSalir({ menuUser }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <>
      <Modal isVisible={isClicked} logout={true}>
        <ContentModal handleClick={handleClick} menuUser={menuUser} />
      </Modal>
      <button
        onClick={handleClick}
        className="py-[3px] px-[15px] font-medium bg-White border-[3px] text-Green rounded-md duration-300 hover:bg-Black hover:text-White"
      >
        Salir
      </button>
    </>
  );
}
