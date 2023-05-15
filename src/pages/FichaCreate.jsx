import { useConsult } from "../hooks/useConsult";
import { Loading } from "../components/share/Loading";
import { useContext, useState } from "react";
import { auth } from "../context/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { API_URL } from "../config";
import { header } from "../context/consult";

function setState(key = false, value = false) {
  const initialState = {
    titulada: "",
    numero: "",
  };

  return key && value
    ? {
        ...initialState,
        [key]: value,
      }
    : initialState;
}

export function FichaCreate() {
  //consultando tituladas disponibles
  const [errors, setErrors] = useState(setState());
  const { data, loading } = useConsult("api/programa/");
  const { user } = useContext(auth);

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    const { titulada, numero } = Object.fromEntries(
      new window.FormData(e.target)
    );
    if (titulada && numero && !errors.titulada && !errors.numero) {
      const dataTitulada = data.find((item) => item.id === parseInt(titulada));
      //crear la ficha
      async function consult() {
        const response = await fetch(
          API_URL + "api/ficha/crear/",
          header({
            numero,
            nombre: dataTitulada.nombre,
            titulada,
          })
        );

        if (response.ok) {
          navigate("/fichas")
        } else {
          console.log("no se creo");
        }
      }
      consult();
    }
  }

  function handleBlur(e) {
    if (e.target.name === "titulada") {
      const titulada = e.target.value;
      if (!titulada) {
        setErrors(setState("titulada", "La titulada es requerida"));
      } else {
        setErrors(setState("titulada", false));
      }
    } else {
      const regexNumero = /^\d{4,10}$/;
      const numero = e.target.value;
      if (!regexNumero.test(numero.trim())) {
        setErrors(
          setState(
            "numero",
            "El numero de ficha debe ser mayor de 4 digitos y menor de 10"
          )
        );
      } else {
        setErrors(setState("numero", false));
      }
    }
  }
  //capturar el valor de todos los inputs del formulario
  /* 
  Object.fromEntries(new window.FormData(e.target))
  */

  if (loading) {
    return <Loading />;
  }

  if (!user || (user && !user.isAdmin)) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="w-[80%] h-[80vh] mx-auto flex justify-center items-center">
      <div className="w-[70%] lg:w-[40%]">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center text-[20px] font-bold md:text-[23px] mb-[45px]">
            Crear Ficha
          </h3>
          <div className="w-full space-y-[30px]">
            <div className="flex flex-col">
              <label className="font-semibold mb-[5px]">
                Seleccione la titulada de la ficha :
              </label>
              <select
                onBlur={handleBlur}
                name="titulada"
                className="border-[2px] border-Gray3 rounded-lg px-[10px] py-[6px]"
              >
                <option className="text-Gray3" value="">
                  Ej: Analisis y Desarrollo de Software
                </option>
                {data.map((titulada) => (
                  <option value={titulada.id}>{titulada.nombre}</option>
                ))}
              </select>
              <div>
                {errors.titulada && (
                  <div className="text-Red">{errors.titulada}</div>
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold mb-[5px]">
                Numero de la ficha :
              </label>
              <input
                onBlur={handleBlur}
                name="numero"
                placeholder="Ej: 245639"
                type="number"
                className="border-[2px] border-Gray3 rounded-lg px-[10px] py-[6px]"
              />
              {errors.numero && <div className="text-Red">{errors.numero}</div>}
            </div>
          </div>
          <div className="flex justify-center mt-[35px]">
            <button
              className={`border-Green duration-[300ms] hover:bg-Green hover:text-White border-[2px] py-[5px] px-[50px] text-Green font-semibold rounded-lg`}
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
