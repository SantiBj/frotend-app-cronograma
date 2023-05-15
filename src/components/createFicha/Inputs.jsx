import { useValidation } from "../../hooks/createFicha/useValidation";
import { Loading } from "../share/Loading";
import { BtnSubmit } from "./BtnSubmit";
import { InputText } from "./InputText";
import { Select } from "./Select";

export function Inputs({ data,validation }) {
  
  const {handleBlur, handleSubmit, errors, dataValid} = validation

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-center text-[20px] font-bold md:text-[23px] mb-[45px]">
        Crear Ficha
      </h3>
      <div className="w-full space-y-[30px]">
        <div className="flex flex-col">
          <label className="font-semibold mb-[5px]">
            Seleccione la titulada de la ficha :
          </label>
          <Select data={data} error={errors.titulada} handleBlur={handleBlur} />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold mb-[5px]">Numero de la ficha :</label>
          <InputText error={errors.ficha} handleBlur={handleBlur} />
        </div>
      </div>
      <div className="flex justify-center mt-[35px]">
        <BtnSubmit dataValid={dataValid} />
      </div>
    </form>
  );
}
