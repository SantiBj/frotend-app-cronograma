import { BiError } from "react-icons/bi";
import { FiRefreshCw } from "react-icons/fi";

export function ErrorGeneric() {
  function handleClick() {
    //refresca la pagina actual
    location.reload();
  }

  return (
    <div className="text-Gray6">
      <div className="flex justify-center">
        <BiError size={35} />
      </div>
      <div className="my-[20px] w-[400px] mx-auto">
        <p className="text-center">
          Se produjo error presione el boton para recargar la pagina si no
          funciona intente mas tarde.
        </p>
      </div>
      <div className="mt-[20px] flex justify-center">
        <button
          onClick={handleClick}
          className="text-White duration-[300ms] hover:bg-Black p-[5px] px-[20px] rounded-md bg-Green"
        >
          <FiRefreshCw size={20} />
        </button>
      </div>
    </div>
  );
}
