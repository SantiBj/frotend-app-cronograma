import { CardSelectedModal } from "./CardSelectedModal";
import { ImCancelCircle } from "react-icons/im";
import { GoListUnordered } from "react-icons/go";

export function ContentModal({ data, setVisibleModal, changeStatetoEmpty,deleteCompetencySelected }) {
  function handleCloseModal() {
    setVisibleModal();
    //borrando el contenido del modal
    changeStatetoEmpty();
  }

  return (
    <div className="w-full">
      <div>
        <div className="bg-Green flex justify-between items-center p-[10px] text-White rounded-t-xl">
          <div className="font-medium">Competencias Seleccionadas</div>
          <div
            onClick={handleCloseModal}
            className="flex justify-end duration-200 hover:text-Red cursor-pointer"
          >
            <ImCancelCircle size={20} />
          </div>
        </div>
        <div className="h-[170px] md:h-[160px] lg:h-[180px] mt-[8px] box-border overflow-y-auto flex flex-col">
          {data.length > 0 ? (
            data.map((competencia) => (
              <CardSelectedModal
                deleteCompetencySelected={deleteCompetencySelected}
                key={competencia.pk}
                content={competencia}
                setVisibleModal={setVisibleModal}
                changeStatetoEmpty={changeStatetoEmpty}
              />
            ))
          ) : (
            <div className="text-center">No hay competencias seleccionadas</div>
          )}
        </div>
      </div>
    </div>
  );
}
