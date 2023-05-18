import { MdCancel } from "react-icons/md";

export function CardSelectedModal({ content, deleteSelected }) {
  function deleteComp() {
    deleteSelected(content.pk);
  }

  return (
    <div className=" p-[4px] bg-Gray2 border-[1px] border-Gray4">
      <div className="flex items-center justify-between px-[15px]">
        <div className="w-[90%]">{content.nombre}</div>
        <div onClick={deleteComp} className="text-Red cursor-pointer">
          <MdCancel />
        </div>
      </div>
    </div>
  );
}
