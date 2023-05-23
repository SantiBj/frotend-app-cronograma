import { useState, useEffect, useContext } from "react";
import { useConsult } from "../hooks/useConsult";
import { Link, useParams } from "react-router-dom";
import { Loading } from "../components/share/Loading";
import { Data404 } from "../components/share/Data404";
import { Error403 } from "../components/share/Error403";
import { ErrorGeneric } from "../components/share/ErrorGeneric";
import { PageHeader } from "../components/share/PageHeader";
import { BiUserX } from "react-icons/bi";
import { TbClipboardList } from "react-icons/tb"
import { Calendar } from "../components/share/calendar/Calendar";
import { Modal } from "../components/share/Modal";
import { ContentModal } from "../components/DetailsInstructor/ContentModal";
import { API_URL } from "../config";
import { Navigate } from "react-router-dom";
import { auth } from "../context/auth";
import "../index.css";
import { FaUserEdit } from "react-icons/fa";
import { Reports } from "../components/share/Reports";

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

  if (!user) {
    return <Navigate to="/login" />;
  }
  if (user && !user.isAdmin){
    return <Navigate to={"/"}/>
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
      <div className="w-[80%] pb-[50px] max-w-[1200px] mx-auto">
        <div className="my-[30px] flex justify-between items-center">
          <PageHeader
            name={instructor.nombreCompleto}
            id={slog}
            instructor={true}
            prev={"/instructores"}
          />
          <div className="contentBtns flex flex-col md:flex-row gap-3">
            <Link 
            to={`/lista/asignaciones/${slog}/?instructor=true`}
            className="scale-90 listAssign text-[#0ea5e9] border-[2px] border-[#0ea5e9] p-[4px] rounded-full">
            <TbClipboardList size={30}/>
            </Link>
            <Link
              to={"/edit/name/" + slog}
              className="scale-90 editInst text-Green border-[2px] border-Green p-[4px] rounded-full"
            >
              <FaUserEdit size={27} />
            </Link>
            {instructor.documento !== user.documento && (
              <div className="scale-90 deleteInst rounded-full border-[2px] p-[2px] md:p-[3px] text-Red duration-300 hover:text-White hover:bg-Red cursor-pointer">
                <BiUserX onClick={handleClick} size={30} />
              </div>
            )}
          </div>
        </div>
        <Reports urlFetch={"api/reporte/"} />
        <Calendar events={data} />
      </div>
    </>
  );
}
