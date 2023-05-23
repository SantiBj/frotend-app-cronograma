import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";

export const auth = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
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
        const response = await fetch(API_URL + "get-token/", header);
        if (!response.ok) {
          throw new Error(response.status);
        }
        const data = await response.json();
        consultDataUser(data.token, dataUser.username);
        setErrors(null);
      } catch (error) {
        console.log(error);
        setErrors(error.message);
      }
    }
    consult();
  }

  function userBase(admin, data, token) {
    return {
      documento: data.documento,
      nombreCompleto: data.nombreCompleto,
      token: token,
      isAdmin: admin,
    };
  }

  function consultDataUser(token, docUser) {
    const header = {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: "token " + token,
      },
    };
    async function consult() {
      const response = await fetch(
        API_URL + "api/instructor/" + docUser + "/",
        header
      );
      const dataC = await response.json();
      const data = await dataC[0];
      if (data.is_staff) {
        setUser(userBase(true, data, token));
        navigate("/");
      } else {
        setUser(userBase(false, data, token));
        navigate("/");
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
        const response = await fetch(API_URL + "api/salir/", header);
        if (!response.ok) {
          throw new Error(response.status);
        }
      } catch (error) {
        setErrors({
          ...errors,
          [logout]: error.message,
        });
      }
    }

    consult();
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  }

  const Data = {
    user,
    loginUser,
    logoutUser,
    errors,
  };

  return <auth.Provider value={Data}>{children}</auth.Provider>;
}
