import { useContext } from "react";
import { auth } from "../context/auth";
import { Navigate } from "react-router-dom";
import { ValidationsPage } from "../components/share/ValidationsPage";

export function Home() {
  const { user } = useContext(auth);

  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="w-[85%] mx-auto">
      <div className="h-[80vh] flex flex-col justify-center">
        <h2 className="font-bold text-[25px]">
          Bienvenido {user.nombreCompleto} a Plán
        </h2>
        {user.isAdmin ? (
          <p>Tu app para programar tus instructores.</p>
        ) : (
          <p>Tu app para ver tu cronograma.</p>
        )}
      </div>
    </div>
  );
}
