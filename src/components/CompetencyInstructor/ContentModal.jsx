import { CardSelectedModal } from "./CardSelectedModal";
import { ImCancelCircle } from "react-icons/im";

export function ContentModal({ data, deleteSelected,closeModal }) {
  return (
    <div className="w-full h-full">
      <div>
        <div className="bg-Green flex justify-between items-center p-[10px] text-White rounded-t-xl">
          <div className="font-medium">Competencias Seleccionadas</div>
          <div
            onClick={closeModal}
            className="flex justify-end duration-200 hover:text-Red cursor-pointer"
          >
            <ImCancelCircle size={20} />
          </div>
        </div>
        <div className="h-[260px] mt-[8px] box-border overflow-y-auto flex flex-col">
          {data.length > 0 ? (
            data.map((competencia) => (
              <CardSelectedModal
              deleteSelected={deleteSelected}
                key={parseInt(competencia.pk)}
                content={competencia}
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
