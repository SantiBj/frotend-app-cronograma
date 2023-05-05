import { useConsult } from "../hooks/useConsult";
import { Loading } from '../components/share/Loading'
import { useContext } from "react";
import { auth } from "../context/auth";
import { Navigate } from "react-router-dom";

export function FichaCreate() {
  const { data, loading, errors } = useConsult("api/programa/");
  const { user }= useContext(auth)
  if (loading) {
    return <Loading/>
  }

  if (!user || user && !user.isAdmin){
    return <Navigate to="/login"/>
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
