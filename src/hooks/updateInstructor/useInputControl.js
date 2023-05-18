import { useContext, useState } from "react";
import { updateInst } from "../../context/updateInst";

export function useInputControl() {
  const { dataUpdate, setUpdateData } = useContext(updateInst);
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);

  function handleChange(e) {
    if (e.target.value !== " ") {
      setInput(e.target.value);
    }
  }

  function onBlur() {
    const regexFullName = /^([a-zA-Z-ü]+\s){2}([a-zA-Z]+\s?)+$/;
    if (!regexFullName.test(input)) {
      setError(
        "El campo solo acepta letras y un espacio en blanco entre cada palabra, no acepta tildes ni puntos"
      );
      setUpdateData({ nombreCompleto: "" });
    } else {
      setError(null);
      setUpdateData({ nombreCompleto: input });
    }
  }

  return{
    error,
    input,
    setInput,
    handleChange,
    onBlur
  }
}
