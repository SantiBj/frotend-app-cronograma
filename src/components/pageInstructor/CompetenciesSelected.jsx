import { useState } from "react";
import { MdAssignmentAdd } from "react-icons/md";
import { Modal } from "../share/Modal";
import { ContentModal } from "../CompetencyInstructor/ContentModal";
import { useSeeSelected } from "../../hooks/createInstructor/useSeeSelected";

//problema es que los datos los mete pero si lo quita quedan hay en dtaActive
export function CompetenciesSelected({ quantitySelected, listIDCompetencies }) {
  const [visibleModal, setVisibleModal] = useState(false);
  const { resetState, deleteCompetencySelected, data, consultDtaSelected } =
    useSeeSelected(listIDCompetencies);

  function closeModal() {
    resetState()
    setVisibleModal(false);
  }

  function OpenModal() {
    consultDtaSelected();
    setVisibleModal(true);
  }

  return (
    <div>
      <div
        onClick={OpenModal}
        className={`flex border-Green border-[2px] w-fit p-[5px] rounded-md gap-[5px]
                  duration-300 text-Green bg-White hover:text-White hover:bg-Green hover:scale-110 hover:animate-none cursor-pointer ${
                    quantitySelected > 0 && "animate-bounce"
                  }`}
      >
        <MdAssignmentAdd size={25} />
        <div>{quantitySelected}</div>
      </div>
      <Modal isVisible={visibleModal} sizeMd={true} notStyle={true}>
        <ContentModal
          closeModal={closeModal}
          deleteCompetencySelected={deleteCompetencySelected}
          data={data}
        />
      </Modal>
    </div>
  );
}
