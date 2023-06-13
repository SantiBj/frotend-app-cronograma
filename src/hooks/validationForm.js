export function validateInput(e) {
  const { value, name } = e.target;
  let errors = false;
  const regexFullName = /^([a-zA-Z-ñ-ü]+\s){2}([a-zA-Z-ñ-ü]+\s?)+$/;
  const regexDoc = /^\d{6,10}$/;

  if (!value.trim()) {
    errors = "El campo es requerido";
  } else if (name === "nombreCompleto" && !regexFullName.test(value.trim())) {
    errors =
      "El campo solo acepta letras y un espacio en blanco entre cada palabra, no acepta tildes ni puntos";
  }

  if (name === "documento" && !regexDoc.test(value.trim())) {
    errors =
      "El documento debe ser mayor de 5 digitos y menor de 11, solo se aceptan numeros";
  }

  return errors;
}
