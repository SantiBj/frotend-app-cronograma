import { useConsult } from "../hooks/useConsult";
import { Loading } from '../components/share/Loading'

export function FichaCreate() {
  const { data, loading, errors } = useConsult("api/programa/");

  if (loading) {
    return <Loading/>
  }
  return (
    <div>
      <form action="">
        <select name="" id="">
          {data.map((titulada) => (
            <option value="">{titulada.nombre}</option>
          ))}
        </select>
        <label htmlFor="">
          <input type="number" className="border-[2px]" />
        </label>
      </form>
    </div>
  );
}
