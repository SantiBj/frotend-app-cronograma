export function Input({name,value,handleChange,type,placeholder}){
    return(
        <input
            value={value}
            onChange={handleChange}
            name={name}
            className="border-[2px] border-Gray3 rounded-lg px-[10px] py-[6px]"
            type={type}
            placeholder={placeholder}
          />
    )
}