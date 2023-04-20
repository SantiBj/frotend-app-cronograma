import { useContext, useEffect, useState } from "react";
import { createInst } from "../../context/createInst";

//problema es que los datos los mete pero si lo quita quedan hay en dtaActive
export function CompetenciesSelected() {
  const { instData } = useContext(createInst);
  const competencies = instData.competencias;
  const [dtaActive, setDtaActive] = useState({});
  let countComActive = 0;

  function ConsultDataQuery(id) {
    const user = JSON.parse(localStorage.getItem("user"));
    const url = "http://127.0.0.1:8000/api/competencia/2/";
    const header = {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: "token " + user.token,
      },
    };
    //useEffect solo se usa al cargar o al cambiar algo
    //cuando la consulta se da por la interatividad del usuario no se usa
    async function consult() {
      try {
        const response = await fetch(url, header);
        if (!response.ok) {
          throw new Error(response.status);
        }
        const data = await response.json();
        
      } catch (error) {
        console.log(error);
      }
    }
    consult();
  }

  //se ejecutara al cargar y cuando cambien las competencias
  useEffect(() => {
    let template = [];
    //alamacena las competencias activas

    //key recorrer las keys del objeto
    for (let key in competencies) {
      if (competencies[key]) {
        template.push(key);
      }
    }

    template.map((idCompetencia) => {
      ConsultDataQuery(idCompetencia);
    });
  }, [competencies]);

  //map

  return <div></div>;
}
