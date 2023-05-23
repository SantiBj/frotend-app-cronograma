import { Row } from "./Row";

export function Table({ data,isInstructor,openModal }){
    return(
        <table className="w-full border-Gray3 border-[2px]">
                  <thead className="bg-Green">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        Resultado de aprendizaje
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        Fecha Inicio
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        Fecha Fin
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                      >
                        {isInstructor ? "Ficha" : "Instructor"}
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                      ></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {data.map((assign) => (
                      <Row openModal={openModal} assign={assign} isInstructor={isInstructor}/>
                    ))}
                  </tbody>
                </table>
    )
}