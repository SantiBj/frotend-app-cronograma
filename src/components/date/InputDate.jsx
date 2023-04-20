import { useContext, useState } from "react";
import { Assign } from "../../context/assign";
import moment from "moment-timezone";
import { useConsult } from "../../hooks/useConsult";

export function InputDate({ label, name }) {
  const { dataAssign, setData } = useContext(Assign);
  const ficha = dataAssign.ficha.numero;

  //consulta para traer el array de fechas de las asignaciones
  const { data } = useConsult(
    "api/fechas-ocupadas-ficha/" + ficha + "/"
  );

  const valueInitial =
    name === "fechaInicio" ? dataAssign.fechaInicio : dataAssign.fechaFin;

  //valor input text
  const [valueInput, setValueInput] = useState(valueInitial);

  //control errores segun el valor ingresado
  const [errors, setErrors] = useState({
    lastDate: false,
    dateAssign: false,
  });

  function handleChange(e) {
    const dateUser = e.target.value;
    const isFound = data.fechasOcupadas.find((date) => date === dateUser);
    //obteniendo fecha actual en string
    const format = "YYYY-MM-DD";
    const dateToday = moment().tz("America/Bogota").format(format);
    //fechas en milisegundos para validar cual es mayor o menor
    const dateFormatUser = moment(dateUser, format);
    const dateFormatToday = moment(dateToday, format);

    //si la fecha del usuario es menor a hoy saldra error
    if (dateFormatUser < dateFormatToday) {
      const template = {
        lastDate: true,
        dateAssign: false,
      };
      setValueInput(dateUser);
      if (valueInitial) {
        setData("", name === "fechaInicio" ? "fechaInicio" : "fechaFin");
      }
      setErrors(template);
    } else if (isFound) {
      const template = {
        lastDate: false,
        dateAssign: true,
      };
      setValueInput(dateUser);
      if (valueInitial) {
        setData("", name === "fechaInicio" ? "fechaInicio" : "fechaFin");
      }
      setErrors(template);
    } else {
      const template = {
        lastDate: false,
        dateAssign: false,
      };
      setErrors(template);
      setData(dateUser, name === "fechaInicio" ? "fechaInicio" : "fechaFin");
      setValueInput(dateUser);
      //se añade la fecha a estado y al contexto
    }
  }

  return (
    <div className="flex flex-col">
      <label className="text-[16px]">{label}</label>
      <input
        className="px-[10px] py-[6px] rounded-[8px]"
        type="date"
        name={name}
        onChange={handleChange}
        value={valueInput}
      />
      {errors.lastDate && (
        <div className="text-[12px] text-Red ml-[5px]">
          La fecha seleccionada ya paso
        </div>
      )}
      {errors.dateAssign && (
        <div className="text-[12px] text-Red ml-[5px]">
          La fecha seleccionada ya esta asignada a la ficha
        </div>
      )}
    </div>
  );
}
