import { useState } from "react";

export function useValidation(setVisibleModal, dataTituladas) {
  const [errors, setErrors] = useState({
    titulada: null,
    ficha: null,
  });
  const [dataValid, setDataValid] = useState({
    titulada: null,
    ficha: null,
  });

  function handleSubmit(e) {
    //tiene que abrir el modal
    e.preventDefault();
    setVisibleModal();
  }

  function handleBlur(e) {
    if (e.target.name === "titulada") {
      const idTitulada = e.target.value;
      if (!idTitulada) {
        setErrors({
          ...errors,
          titulada: "La titulada es requerida",
        });

        //si ya habian datos validados se borran
        if (dataValid.titulada) {
          setDataValid({
            ...dataValid,
            titulada: null,
          });
        }
      } else {
        const dtaTitulada = dataTituladas.find(
          (titulada) => titulada.id === parseInt(idTitulada)
        );
        

        setDataValid({
          ...dataValid,
          titulada: {
            id: dtaTitulada.id,
            nombre: dtaTitulada.nombre,
          },
        });
        //borrando los errores
        setErrors({
          ...errors,
          titulada: null,
        });
      }
    } else {
      const regexNumero = /^\d{4,10}$/;
      const numero = e.target.value;
      if (!regexNumero.test(numero.trim())) {
        setErrors({
          ...errors,
          ficha: "El numero de ficha debe ser mayor de 4 digitos y menor de 10",
        });
        //si ya habia data validada se borra
        setDataValid({
          ...dataValid,
          ficha: null,
        });
      } else {
        setDataValid({
          ...dataValid,
          ficha: numero,
        });
        //se borran los errores
        setErrors({
          ...errors,
          ficha: null,
        });
      }
    }
  }

  return {
    handleBlur,
    handleSubmit,
    errors,
    dataValid,
  };
}
