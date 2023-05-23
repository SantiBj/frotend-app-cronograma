import { useRef, useState } from "react";
import { Navigate, useParams, useSearchParams } from "react-router-dom";
import { TiDelete } from "react-icons/ti";
import { useConsult } from "../hooks/useConsult";
import { Loading } from "../components/share/Loading";
import { Data404 } from "../components/share/Data404";
import moment from "moment-timezone";
import { Modal } from "../components/share/Modal";

//instructor
export function ListAssigns() {
  //capturar queryparams para saber si es instructor o ficha
  const { slog } = useParams();

  //hook
  const isInstructor = useRef();
  const [searchParams] = useSearchParams();
  const queryparams = searchParams.get("instructor");
  if (queryparams === "true") {
    isInstructor.current = true;
  } else if (queryparams === "false") {
    isInstructor.current = false;
  } else {
    return <Navigate to={"/"} />;
  }
  //hook

  const url = isInstructor.current
    ? `api/asignaciones/activas/inst/${slog}/`
    : `api/asignaciones/activas/${slog}/`;

  const { data, errors, loading } = useConsult(url);

  console.log(data);

  function formatDate(date) {
    return moment(date).format("DD MMMM YYYY");
  }

  const [modal, setModal] = useState(false);
  const [assignDel, setAssignDel] = useState(null);

  function openModal(id) {
    const assign = data.find((assign) => assign.id === id);
    setAssignDel(assign)
    console.log(assign);
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  function deleteAssign(id) {
    console.log("eliminada")
  }

  if (loading) {
    return <Loading />;
  }
  if (errors === "404") {
    return <Data404 text={"No exiten Asignaciones Activas"} />;
  }
  return (
    <div>
      <Modal isVisible={modal} sizeMd>
        <p>Desea eliminar la asignacion {assignDel?.rap.nombre} del {assignDel?.fechaInicio} al {assignDel?.fechaFin} ficha {assignDel?.ficha.numero} al instructor {assignDel?.instructor.documento} </p>
        <button className="bg-Green" onClick={()=>deleteAssign(assignDel.id)}>delete</button>
      </Modal>

      <header>
        <h2>Asignaciones Activas</h2>
        <h3>
          <span className="font-semibold">
            {isInstructor
              ? `Nombre : ${data[0].instructor.nombreCompleto}`
              : `Titulada: ${data[0].ficha.nombre}`}
          </span>
        </h3>
        <h3>
          <span className="font-semibold">
            {isInstructor ? "Documento : " : "Numero : "}
            {slog}
          </span>
        </h3>
      </header>
      <main>
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="min-w-full inline-block align-middle">
              <div>
                <table className="w-[70%] mx-auto">
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
                        {isInstructor.current ? "Ficha" : "Instructor"}
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                      ></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {data.map((assign) => (
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-200">
                          {assign.rap.nombre}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-200">
                          {formatDate(assign.fechaInicio)}
                        </td>
                        <td className="px-6 py-4  text-sm text-gray-800 dark:text-gray-200">
                          {formatDate(assign.fechaFin)}
                        </td>
                        <td className="px-6 py-4  text-sm text-gray-800 dark:text-gray-200">
                          {isInstructor.current
                            ? assign.ficha.numero
                            : assign.instructor.nombreCompleto}
                        </td>
                        {assign.id}
                        <td className="px-6 py-4 text-right text-sm font-medium">
                          <button
                            name={assign.id}
                            onClick={() => openModal(assign.id)}
                            className="text-blue-500 hover:text-blue-700"
                          >
                            <TiDelete size={25} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
