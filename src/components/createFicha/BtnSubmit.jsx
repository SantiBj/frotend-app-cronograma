export function BtnSubmit({dataValid}){
    return(
        <button
          className={`${
            (!dataValid.titulada || !dataValid.ficha) &&
            "pointer-events-none opacity-50"
          } border-Green bg-Green text-White duration-[300ms] hover:bg-White hover:text-Green border-[2px] py-[5px] px-[50px] font-semibold rounded-lg`}
        >
          Crear
        </button>
    )
}