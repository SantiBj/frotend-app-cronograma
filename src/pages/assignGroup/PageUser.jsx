import { useContext } from "react";
import { PageHeader } from "../../components/share/PageHeader";
import { auth } from "../../context/auth";
import { Calendar } from "../../components/share/calendar/Calendar";
import { useConsult } from "../../hooks/useConsult";
import { Loading } from "../../components/share/Loading";
import { Data404 } from "../../components/share/Data404";
import { Error403 } from "../../components/share/Error403";
import { ErrorGeneric } from "../../components/share/ErrorGeneric";
import { Navigate } from "react-router-dom";

export function PageUser() {
  const userStorage = JSON.parse(localStorage.getItem("user"))
  const { user } = useContext(auth);
  const doc = user ? user.documento : 0
  const { data,loading,errors } = useConsult("api/asignaciones/instructor/"+doc+"/")

  if (!user) {
    return <Navigate to="/login"/>
  }
  if(user && user.isAdmin){
    return <Navigate to="/"/>
  }
  if (!user && userStorage) {
    return <Navigate to="/"/>
  }
  if (loading) {
    return <Loading/>
  }
  if (errors === "404") {
    return <Data404/>
  }
  if (errors === "403") {
    return <Error403/>
  }
  if (errors) {
    return <ErrorGeneric/>
  }
  return (
    <div className="w-[80%] mx-auto space-y-[60px] my-[50px]">
      <PageHeader name={user.nombreCompleto} id={user.documento} instructor />
      <Calendar events={data} />
    </div>
  );
}
