import { useContext, useState } from "react";
import { Assign } from "../../context/assign";
import { Data404 } from "../share/Data404";
import { ErrorGeneric } from "../share/ErrorGeneric";
import { Loading } from "../share/Loading";
import { useConsult } from "../../hooks/useConsult";
import { Error403 } from "../share/Error403";



export function Select() {
  const { dataAssign, setData } = useContext(Assign);
  const { data, loading, errors } = useConsult("api/programa/");
  const [programaSelected, setProgramaSelected] = useState(dataAssign.programa);

  function handleChange(e) {
    const valueSelected = e.target.value;
    if (valueSelected !== "") {
      const programaSelectedInfo = data.find(
        (programa) => programa.id === parseInt(valueSelected)
      );

      setProgramaSelected({
        id: valueSelected,
        nombre: programaSelectedInfo.nombre,
      });

      setData(
        {
          id: valueSelected,
          nombre: programaSelectedInfo.nombre,
        },
        "programa"
      );
    } else {
      setProgramaSelected({
        id: "",
      });
      setData(
        {
          id: "",
        },
        "programa"
      );
    }
  }

  if (loading) {
    return <Loading />;
  }
  if (errors === "404") {
    return <Data404 text={"No se encontraron tituladas"} />;
  }
  if (errors === "403") {
    return <Error403/>
  }
  if (errors) {
    return <ErrorGeneric />;
  }
  return (
    <select
      name="programa"
      className="focus:border-Green focus:shadow-xl border-[2px] border-Gray6 w-[70%] max-w-[500px] p-[8px] rounded-lg text-Gray6 outline-none"
      onChange={handleChange}
      value={programaSelected.id}
    >
      <option value="">Ej: cocina, contabilidad</option>
      {data.map((programa) => (
        <option key={programa.id} value={programa.id}>
          {programa.nombre}
        </option>
      ))}
    </select>
  );
}
