import { useState,useEffect } from "react";
import { useConsult } from "../hooks/useConsult";
import { useParams } from "react-router-dom";
import { Loading } from "../components/share/Loading";
import { Data404 } from "../components/share/Data404";
import { Error403 } from "../components/share/Error403";
import { ErrorGeneric } from "../components/share/ErrorGeneric";
import { PageHeader } from "../components/share/PageHeader";
import { AiFillDelete } from "react-icons/ai"
import { Calendar } from "../components/share/calendar/Calendar";


export function DetailsInstructor() {
  const { slog } = useParams();
  const [visible, setVisible] = useState(false);
  const handleClick = () => setVisible(!visible);
  const { data, loading, errors } = useConsult(
    "api/asignaciones/instructor/" + slog + "/"
  );

  const [instructor, setInstructor] = useState(null);
  const [loadingIns, setLoadingIns] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));

  const header = {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: "token " + user.token,
    },
  };

  useEffect(() => {
    async function consult() {
      setLoadingIns(true);
      const response = await fetch(
        "http://127.0.0.1:8000/api/instructor/" + slog + "/",
        header
      );
      const data = await response.json();
      setInstructor(data[0]);
      setLoadingIns(false);
    }
    consult();
  }, []);

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
      {/* <Modal isVisible={visible} sizeMd={true}>
        <DelContentModal id={slog} handleClick={handleClick} />
      </Modal> */}
      <div className="w-[80%] max-w-[1200px] mx-auto">
        <div className="my-[30px] flex justify-between items-center">
          <PageHeader name={instructor.nombreCompleto} id={slog} instructor={true} />
          <div className="text-Red duration-300 hover:text-Black cursor-pointer">
            <AiFillDelete onClick={handleClick} size={25} />
          </div>
        </div>
        <Calendar events={data} />
      </div>
    </>
  );
}
