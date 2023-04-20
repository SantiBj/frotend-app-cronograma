import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

// esto es para filtrar no va para el context
export function Search({ to, placeholder, typeInput }) {
  const [searchText, setSearchText] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  //sirve tambien para cambiar al usuario de url igual que <navigate/>
  const navigate = useNavigate();
  // navigate("/") -> reidreccionando

  function handleChange(e) {
    const valueInput = e.target.value;
    setSearchText(valueInput);
    navigate(to + "/?search=" + valueInput);
  }

  
  return (
    <div className="relative w-[70%] max-w-[500px]">
      <input
        type={typeInput ? typeInput : "number"}
        value={searchText}
        onChange={handleChange}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        className={`p-[8px] w-full 
                            rounded-lg pr-[40px] pl-[10px] outline-none ${
                              isFocus
                                ? "border-Green border-[3px] shadow-lg"
                                : "border-Gray6 border-[2px]"
                            }`}
        placeholder={placeholder}
      />
      <div
        className={`absolute right-2 top-2 ${
          isFocus ? "text-Green" : "text-Gray6"
        }`}
      >
        <BiSearchAlt size={25} />
      </div>
    </div>
  );
}
