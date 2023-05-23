import { useState } from "react";
import moment from "moment-timezone";
import { API_URL } from "../config";
import { useParams } from "react-router-dom";

async function consultPDF(url, setState) {
  setState(true);
  const user = JSON.parse(localStorage.getItem("user"));
  const response = await fetch(API_URL + url, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: "token " + user.token,
    },
  });
  //pasando la respuesta a blob para poder convertir luego a url
  const pdf = await response.blob();
  //creando una url para mostrar el archivo en formato blob
  const urlPdf = URL.createObjectURL(pdf);
  //abriendo la url en una nueva ventana

  window.open(urlPdf, "_blank");
  setState(false);
}

export function useReports(url) {
  const { slog } = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function submitForm(e) {
    e.preventDefault();
    const { inicio, fin } = Object.fromEntries(new window.FormData(e.target));
    const format = "YYYY-MM-DD";

    if (inicio && fin) {
      //convirtiendo a milisegundos las fechas para compararlas
      const inicioMs = moment(inicio, format);
      const finMs = moment(fin, format);

      if (inicioMs > finMs) {
        setError("¡la fecha de inicio debe ser menor a la fecha fin!");
      } else {
        //consulta
        const path = url + `?id=${slog}&inicio=${inicio}&fin=${fin}`;
        consultPDF(path, setLoading);
        if (error) {
          setError(null);
        }
      }
    } else {
      setError("¡complete los campos para generar el reporte!");
    }
  }

  return {
    error,
    loading,
    submitForm,
  };
}
