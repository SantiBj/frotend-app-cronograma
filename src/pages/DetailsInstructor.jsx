import { useState, useEffect, useContext } from "react";
import { useConsult } from "../hooks/useConsult";
import { useParams } from "react-router-dom";
import { Loading } from "../components/share/Loading";
import { Data404 } from "../components/share/Data404";
import { Error403 } from "../components/share/Error403";
import { ErrorGeneric } from "../components/share/ErrorGeneric";
import { PageHeader } from "../components/share/PageHeader";
import { BiUserX } from "react-icons/bi";
import { Calendar } from "../components/share/calendar/Calendar";
import { Modal } from "../components/share/Modal";
import { ContentModal } from "../components/DetailsInstructor/ContentModal";
import { API_URL } from "../config";
import { Navigate } from "react-router-dom";
import { auth } from "../context/auth";
import "../index.css";
import { InputsReport } from "../components/share/InputsReport";

export function DetailsInstructor() {
  const { user } = useContext(auth);
  const { slog } = useParams();
  const [visible, setVisible] = useState(false);
  const handleClick = () => setVisible(!visible);
  const { data, loading, errors } = useConsult(
    "api/asignaciones/instructor/" + slog + "/"
  );

  const [instructor, setInstructor] = useState(null);
  const [loadingIns, setLoadingIns] = useState(null);
  const userStorage = JSON.parse(localStorage.getItem("user"));

  const header = {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: userStorage ? "token " + userStorage.token : null,
    },
  };

  useEffect(() => {
    async function consult() {
      setLoadingIns(true);
      const response = await fetch(
        API_URL + "api/instructor/" + slog + "/",
        header
      );
      const data = await response.json();
      setInstructor(data[0]);
      setLoadingIns(false);
    }
    consult();
  }, []);

  if (!user || (user && !user.isAdmin)) {
    return <Navigate to="/login" />;
  }
  if (loading || loadingIns) {
    return <Loading />;
  }
  if (errors === "404") {
    return <Data404 />;
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
        <ContentModal
          id={slog}
          nombre={instructor.nombreCompleto}
          handleClick={handleClick}
        />
      </Modal>
      <div className="w-[80%] max-w-[1200px] mx-auto">
        <div className="my-[30px] flex justify-between items-start">
          <PageHeader
            name={instructor.nombreCompleto}
            id={slog}
            instructor={true}
          />
          {instructor.documento !== user.documento && (
            <div className="deleteInst rounded-full border-[2px] p-[2px] md:p-[5px] text-Red duration-300 hover:text-White hover:bg-Red cursor-pointer">
              <BiUserX onClick={handleClick} size={30} />
            </div>
          )}
        </div>
        <div className="my-[50px] w-[60%] ">
          <InputsReport>
            <button className="w-full hover:bg-Green hover:text-White py-[8px] px-[5px] rounded-md font-medium duration-[300ms] bg-White border-Green border-[2px] text-Green">
              Generar Reporte
            </button>
          </InputsReport>
        </div>
        <Calendar events={data} />
      </div>
    </>
  );
}
