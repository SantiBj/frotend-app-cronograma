import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../../context/auth";

export function AssignConnect() {
  const { user } = useContext(auth);

  if (!user) {
    return <Navigate to="/login" />;
  } else if (user && !user.isAdmin) {
    return <Navigate to="/" />;
  }
  return (
      <div className="w-[85%] mx-auto">
        <Outlet />
      </div>
  );
}
