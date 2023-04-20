import { InputDate } from "./inputDate";

export function ContainerInputs() {
  return (
    <div className="bg-Gray3 box-border rounded-[10px] w-[70%] max-w-[400px] mx-auto ">
      <div className="w-[85%] mx-auto py-[20px]">
        <h3 className="text-center mt-[5px] mb-[10px] text-[18px] font-medium">
          Seleccione la fecha:
        </h3>
        <div className="flex flex-col gap-[15px]">
            <InputDate label="Fecha Inicio" name="fechaInicio"/>
            <InputDate label="Fecha Fin" name="fechaFin"/>
        </div>
      </div>
    </div>
  );
}
