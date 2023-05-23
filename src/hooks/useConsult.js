import { useEffect, useState } from "react";
import { API_URL } from "../config";

export function useConsult(url, bodyData, method, dependencie,dependencieSecond) {
  //usando el contexto para tener el token
  const user = JSON.parse(localStorage.getItem("user"));
  //almacenaran los datos de la consulta get
  const [data, setData] = useState(null);
  //para get por data no esta se muestra algo
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  const urlComplete = API_URL + url;

  const header = {
    method: !method ? "GET" : method,
    body: !bodyData ? null : JSON.stringify(bodyData),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: user ? "token " + user.token : null,
    },
  };

  useEffect(() => {
    async function consult() {
      try {
        setLoading(true);
        const response = await fetch(urlComplete, header);
        if (!response.ok) {
          throw new Error(response.status);
        }

        const data = await response.json();
        setLoading(false);
        setErrors(null);
        setData(data);
      } catch (error) {
        setLoading(false);
        setErrors(error.message);
      }
    }
    consult();
  }, [dependencie ? dependencie : null , dependencieSecond ? dependencieSecond : null]);

  return {
    data,
    setData,
    loading,
    errors,
  };
}
