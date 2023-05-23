import { useContext, useState } from "react";
import { useConsult } from "../hooks/useConsult";
import { Loading } from "../components/share/Loading";
import { Modal } from "../components/share/Modal";
import { useWhatEntity } from "../hooks/listAssigns/useWhatEntity";
import { Header } from "../components/listAssigns/Header";
import { Table } from "../components/listAssigns/Table";
import { ContentModal } from "../components/listAssigns/modal/ContentModal";
import { Error403 } from "../components/share/Error403";
import { ErrorGeneric } from "../components/share/ErrorGeneric";
import { Error } from "../components/listAssigns/Error";
import { auth } from "../context/auth";
import { Navigate } from "react-router-dom";

//instructor
export function ListAssigns() {
  const { user } = useContext(auth)
  const { url, slog, isInstructor } = useWhatEntity();
  const { data, setData, errors, loading } = useConsult(url);
  const [modal, setModal] = useState(false);
  const [assignDel, setAssignDel] = useState(null);

  function openModal(id) {
    const assign = data.find((assign) => assign.id === id);
    setAssignDel(assign);
    setModal(true);
  }

  function closeModal() {
    setModal(false);
    setAssignDel(null);
  }

  if (!user) {
    return <Navigate to={"/login"}/>
  }
  if (user && !user.isAdmin){
    return <Navigate to={"/"}/>
  }

  if (loading) {
    return <Loading />;
  }
  if (errors === "404" || (!loading && data.length == 0)) {
    return <Error slog={slog} isInstructor={isInstructor} />;
  }
  if (errors === "403") {
    return <Error403 />;
  }
  if (errors) {
    return <ErrorGeneric />;
  }
  return (
    <div className="w-[80%] mx-auto mb-[60px]">
      <Modal isVisible={modal} sizeMd>
        <ContentModal
          data={data}
          assign={assignDel}
          closeModal={closeModal}
          setData={setData}
        />
      </Modal>
      <div className="my-[50px]">
        <Header data={data} isInstructor={isInstructor} slog={slog} />
      </div>
      <main>
        <div className="w-[70%] mx-auto overflow-auto">
          <Table
            openModal={openModal}
            data={data}
            isInstructor={isInstructor}
          />
        </div>
      </main>
    </div>
  );
}
