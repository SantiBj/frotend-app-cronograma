import { Calendar } from "../components/share/calendar/Calendar";
import { useParams } from "react-router-dom";
import { useConsult } from "../hooks/useConsult";
import { useEffect, useState } from "react";
import { Loading } from "../components/share/Loading";
import { AiFillDelete } from "react-icons/ai";
import { PageHeader } from "../components/share/PageHeader";
import { Modal } from "../components/share/Modal";
import { DelContentModal } from "../components/DetailsFicha/DelContentModal";
import { Data404 } from "../components/share/Data404";
import { Error403 } from "../components/share/Error403";
import { ErrorGeneric } from "../components/share/ErrorGeneric";

export function DetailsFicha() {
  const [visible, setVisible] = useState(false);
  const handleClick = () => setVisible(!visible);
  const { slog } = useParams();
  const { data, loading, errors } = useConsult(
    "api/asignaciones/ficha/" + slog + "/"
  );
  const [ficha, setFicha] = useState(null);
  const [dataLoading, setDataLoading] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));

  const header = {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: "token " + user.token,
    },
  };

  useEffect(() => {
    async function consult() {
      setDataLoading(true);
      const response = await fetch(
        "http://127.0.0.1:8000/api/ficha/" + slog + "/",
        header
      );
      const data = await response.json();
      setFicha(data[0]);
      setDataLoading(false);
    }
    consult();
  }, []);

  if (loading || dataLoading) {
    return <Loading />;
  }
  if (errors === "404") {
    return <Data404 text="No hay informacion de la ficha" />;
  }
  if (errors === "403") {
    return <Error403 />;
  }
  if (errors) {
    return <ErrorGeneric />;
  }
  return (
    <>
      <Modal isVisible={visible} sizeMd={true}>
        <DelContentModal id={slog} handleClick={handleClick} />
      </Modal>
      <div className="w-[80%] max-w-[1200px] mx-auto">
        <div className="my-[30px] flex justify-between items-center">
          <PageHeader name={ficha.nombre} id={slog} />
          <div className="text-Red duration-300 hover:text-Black cursor-pointer">
            <AiFillDelete onClick={handleClick} size={25} />
          </div>
        </div>
        <Calendar events={data} />
      </div>
    </>
  );
}
