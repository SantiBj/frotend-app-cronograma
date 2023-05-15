import moment from "moment-timezone";
import { useState } from "react";

export function InputsReport({ children }) {
  const [error, setError] = useState();

  //al enviar validar que el campo fecha inicial sea menor a la fecha final
  function handleSubmit(e) {
    e.preventDefault();
    const { inicio, fin } = Object.fromEntries(new window.FormData(e.target));
    const format = "YYYY-MM-DD";
    //convirtiendo a milisegundos las fechas para compararlas
    const inicioMs = moment(inicio, format);
    const finMs = moment(fin, format);

    if (inicioMs > finMs) {
      setError("la fecha de inicio debe ser menor a la fecha fin");
    } else {
      setError(null);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center items-center md:flex-row gap-[15px] mb-[25px] mt-[15px]">
        
        <div className="space-y-[2px] w-full md:w-[35%]">
          <label className="font-medium pl-[10px]">Fecha Inicio</label>
          <input
            className="border-[2px] p-[7px] rounded-xl w-full"
            type="date"
            name="inicio"
          />
        </div>

        <div className="space-y-[2px] w-full md:w-[35%]">
          <label className="font-medium pl-[10px]" htmlFor="">
            Fecha Fin
          </label>
          <input
            className="border-[2px] p-[7px] rounded-xl w-full"
            type="date"
            name="fin"
          />
        </div>

        <div className="w-full md:w-[30%] md:mt-[22px]">{children}</div>
      </div>
      <div className="text-Red text-center font-medium w-full">{error}</div>
    </form>
  );
}
