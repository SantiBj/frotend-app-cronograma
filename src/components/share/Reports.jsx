import { InputsReport } from "./InputsReport"

export function Reports({urlFetch}){
    return(
        <div className="my-[70px] w-[80%] md:[60%] mx-auto">
          <div className="mb-[40px]">
            <p className="text-[20px] font-semibold md:text-[23px] text-Green text-center">
              Ingresa las Fechas para Crear un Reporte de las Asignaciones.
            </p>
          </div>
          <InputsReport urlFetch={urlFetch}>
            <button className="w-full hover:bg-Green hover:text-White py-[8px] px-[5px] rounded-md font-semibold duration-[300ms] bg-White border-Green border-[2px] text-Green">
              Generar
            </button>
          </InputsReport>
        </div>
    )
}