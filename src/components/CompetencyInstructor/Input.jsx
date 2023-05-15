import { validateInput } from "../../hooks/validationForm";
import { useContext, useState } from "react";
import { createInst } from "../../context/createInst";

//validando
export function Input({
  name,
  value,
  handleChange,
  type,
  placeholder,
  label
}) {
  const { instData,setInstructorData } = useContext(createInst);
  const [errorValue, setErrorValue] = useState(false);

  function handleBlur(e) {
    const nameInput = e.target.name;
    const error = validateInput(e);
    console.log(error)
    if (!error) {
      setInstructorData({
        [nameInput]: e.target.value,
      });
      setErrorValue(false)
    } else {
      setErrorValue(error);
      if (instData[nameInput]) {
        setInstructorData({
            [nameInput]: "",
          });
      }
    }
  }

  return (
    <div className="flex flex-col ">
      <label className="font-semibold mb-[5px]">{label}</label>
        <input
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      name={name}
      className="border-[2px] border-Gray3 rounded-lg px-[10px] py-[6px]"
      type={type}
      placeholder={placeholder}
    />
    <div>
        {errorValue && <div className="text-Red">{errorValue}</div>}
    </div>
    </div>
    
  );
}
