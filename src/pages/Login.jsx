import { useContext } from "react";
import { InputsContainer } from "../components/login/InputsContainer";
import { auth } from "../context/auth";
import { Navigate } from "react-router-dom";

export function Login() {
  const { user } = useContext(auth);

  if (user) {
    return <Navigate to="/"/>
  }
  return (
    <div className="h-[90vh] flex justify-center items-center">
      <InputsContainer />
    </div>
  );
}
