import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";

export const auth = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(false)
  const [errors, setErrors] = useState(null);

  //almacenando usuario en localstorages
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  //al actualizar pagina poniendo el user de localstorages en el estado user
  useEffect(() => {
    const dataLocalStorage = JSON.parse(localStorage.getItem("user"));
    if (dataLocalStorage && !user) {
      setUser(dataLocalStorage);
    }
  }, []);

  function loginUser(dataUser) {
    const header = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataUser), //pasando a json
    };

    async function consult() {
      try {
        setLoading(true)
        const response = await fetch(API_URL + "api/loggin/", header);
        if (!response.ok) {
          throw new Error(response.status);
        }
        const data = await response.json();
        setUser(data)
        navigate("/")
        setErrors(null);
      } catch (error) {
        setErrors(error.message);
      } finally{
        setLoading(false)
      }
    }
    consult();
  }

  
  function logoutUser() {
    const header = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: "token " + user.token,
      },
    };

    async function consult() {
      try {
        setLoading(true)
        const response = await fetch(API_URL + "api/logout/", header);
        if (!response.ok) {
          throw new Error(response.status);
        }
      } catch (error) {
        setErrors({
          ...errors,
          [logout]: error.message,
        });
      }finally{
        setLoading(false)
      }
    }

    consult();
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  }

  const Data = {
    user,
    loading,
    loginUser,
    logoutUser,
    errors,
  };

  return <auth.Provider value={Data}>{children}</auth.Provider>;
}
