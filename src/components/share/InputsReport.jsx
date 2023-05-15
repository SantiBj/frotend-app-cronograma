import { useState } from "react";
import { Loading } from "./Loading";
import { useReports } from "../../hooks/useReports";

export function InputsReport({ children,urlFetch }) {

  const {error,loading,submitForm} = useReports(urlFetch)

  return (
    <>
      {loading && (
        <div className="fixed bg-[#ffffffb9] top-0 left-0 right-0 z-10 bottom-0 flex justify-center items-center">
          <Loading />
        </div>
      )}
      <form onSubmit={submitForm}>
        <div className="flex flex-col justify-center items-center md:flex-row gap-[15px] mb-[25px] mt-[15px]">
          <div className="space-y-[2px] w-full md:w-[35%]">
            <label className="font-medium pl-[10px]">Fecha Inicio</label>
            <input
              className="border-[2px] p-[7px] rounded-xl w-full"
              type="date"
              name="inicio"
            />
          </div>

          <div className="space-y-[2px] w-full md:w-[35%]">
            <label className="font-medium pl-[10px]" htmlFor="">
              Fecha Fin
            </label>
            <input
              className="border-[2px] p-[7px] rounded-xl w-full"
              type="date"
              name="fin"
            />
          </div>

          <div className="w-full md:w-[30%] md:mt-[22px]">{children}</div>
        </div>
        <div className="text-Red text-center font-medium w-full">{error}</div>
      </form>
    </>
  );
}
