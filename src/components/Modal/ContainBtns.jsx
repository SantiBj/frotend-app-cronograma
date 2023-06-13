import { Btn } from "../createFicha/modal/Btn";


export function ContainBtns({ codeState, closeModal, create, statusOk }) {
  return (
    <>
      {(!codeState || codeState === "200") && (
        <Btn text={"Aceptar"} onClick={!codeState ? create : statusOk} />
      )}

      {codeState !== "200" && (
        <Btn text={!codeState ? "Cancelar" : "Aceptar"} onClick={closeModal} />
      )}
    </>
  );
}
