import { useContext, useState } from "react";
import { MdAssignmentAdd } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Assign } from "../../context/assign";
import { useNavigate } from "react-router-dom";

export function ContentModal({ setIsVisible }) {
  const user  = JSON.parse(localStorage.getItem('user'))
  const { dataAssign, returningInitialState } = useContext(Assign);
  const [isAssign, setIsAssign] = useState(false);
  const [complete, setComplete] = useState(null);

  function handleBtnAssign() {
    const dataPost = {
      ficha: dataAssign.ficha.numero,
      rap: dataAssign.rap.id,
      instructor: dataAssign.instructor.documento,
      fechaInicio: dataAssign.fechaInicio,
      fechaFin: dataAssign.fechaFin,
    };

    fetch("http://127.0.0.1:8000/api/crear/asignacion/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "token " + user.token,
      },
      body: JSON.stringify(dataPost),
    })
      .then((response) => response.json())
      .then((data) => {
        setComplete(true);
      })
      .catch((error) => {
        complete(false);
      });

    setIsAssign(true);
  }

  const navigate = useNavigate();

  function handleBtnAccept() {
    setIsVisible(false);
    //usar el hook navigate para ir al inicio
    navigate("/assign/program");
    returningInitialState();
  }

  return (
    <div className=" space-y-[20px]">
      <div className="text-Green flex justify-center">
        {isAssign ? (
          <AiOutlineCheckCircle size={50} />
        ) : (
          <MdAssignmentAdd size={50} />
        )}
      </div>
      <div className="w-[80%] mx-auto">
        <p className="text-center text-[14px]">
          {isAssign ? "Fue Asignado" : "¿ Desea Asignarle"} a la ficha{" "}
          <span className="font-medium">{dataAssign.ficha.numero}</span> el rap{" "}
          <span className="font-medium">{dataAssign.rap.nombre}</span> del{" "}
          <span className="font-medium">{dataAssign.fechaInicio}</span> al{" "}
          <span className="font-medium">{dataAssign.fechaFin}</span> con el
          instructor{" "}
          <span className="font-medium">
            {dataAssign.instructor.nombreCompleto}
          </span>{" "}
          {isAssign ? "." : "?"}
        </p>
      </div>
      <div className="flex justify-center gap-[20px]">
        <button
          onClick={isAssign ? handleBtnAccept : handleBtnAssign}
          className="text-White bg-Green px-[8px] py-[3px] rounded-md duration-300 hover:brightness-125 hover:scale-105"
        >
          {isAssign ? "Aceptar" : "Asignar"}
        </button>

        {!isAssign && (
          <button
            onClick={() => setIsVisible(false)}
            className="border-[2px] border-Green px-[5px] py-[3px] rounded-md text-Green duration-300 hover:bg-Black"
          >
            Cancelar
          </button>
        )}
      </div>
    </div>
  );
}
