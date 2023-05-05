import { useContext } from "react";
import { MdCancel } from "react-icons/md";
import { createInst } from "../../context/createInst";

export function CardSelectedModal({
  content,
  setVisibleModal,
  changeStatetoEmpty,
  deleteCompetencySelected
}) {
  const { convertCompetencieToFalse } = useContext(createInst);

  const handleClick = () => {
    //funcion para cerrar modal
    //pasar la key seleccionada a false
    //cerrar modal pasar el estado a 0->length
    convertCompetencieToFalse(content.pk);
    deleteCompetencySelected(content.pk)
  };

  return (
    <div className=" p-[4px] bg-Gray2 border-[1px] border-Gray4">
      <div className="flex items-center justify-between px-[15px]">
        <div className="w-[90%]">{content.nombre}</div>
        <div onClick={handleClick} className="text-Red">
          <MdCancel />
        </div>
      </div>
    </div>
  );
}
