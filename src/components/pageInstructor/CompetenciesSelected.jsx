import { useContext, useEffect, useState } from "react";
import { createInst } from "../../context/createInst";
import { MdAssignmentAdd } from "react-icons/md";
import { Modal } from "../share/Modal";
import { ContentModal } from "../CompetencyInstructor/ContentModal";
import { API_URL } from "../../config";

//problema es que los datos los mete pero si lo quita quedan hay en dtaActive
export function CompetenciesSelected() {
  const { listCompetenciesSelected } = useContext(createInst);
  const [data, setData] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);

  function ConsultDataQuery(id) {
    const user = JSON.parse(localStorage.getItem("user"));
    const url = API_URL+"api/competencia/" + id + "/";
    const header = {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: "token " + user.token,
      },
    };
    async function consult() {
      try {
        const response = await fetch(url, header);
        if (!response.ok) {
          throw new Error(response.status);
        }
        const dataQuery = await response.json();
        setData((data) => [...data, dataQuery]);
      } catch (error) {
        console.log(error);
      }
    }
    consult();
  }

  function deleteCompetencySelected(id) {
    const templateData = data.filter((competency)=>(
      competency.pk !== id
    ))
    setData(templateData)
  }

  const changeVisible = () => setVisibleModal(!visibleModal);
  const changeStatetoEmpty = () => setData([]);

  //al abrir el modal
  function handleClick() {
    const { listIDCompetencies } = listCompetenciesSelected();
    listIDCompetencies.map((competencia) => {
      ConsultDataQuery(competencia);
    });
    changeVisible();
  }

  const { quantity } = listCompetenciesSelected();

  return (
    <div>
      <div
        onClick={handleClick}
        className={`flex border-Green border-[2px] w-fit p-[5px] rounded-md gap-[5px]
                  duration-300 text-Green bg-White hover:text-White hover:bg-Green hover:scale-110 hover:animate-none cursor-pointer ${quantity > 0 && "animate-bounce"}`}
      >
        <MdAssignmentAdd size={25} />
        <div>{quantity}</div>
      </div>
      <Modal isVisible={visibleModal} sizeMd={true} notStyle={true}>
        <ContentModal
          deleteCompetencySelected={deleteCompetencySelected}
          data={data}
          changeStatetoEmpty={changeStatetoEmpty}
          setVisibleModal={changeVisible}
        />
      </Modal>
    </div>
  );
}
