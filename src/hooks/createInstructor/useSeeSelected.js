import { API_URL } from "../../config";
import { useState } from "react";

export function useSeeSelected( listSelected ) {
  const [data, setData] = useState([]);


  //informacion de las competencias seleccionadas
  
    function ConsultDataQuery(id) {
      const user = JSON.parse(localStorage.getItem("user"));
      const url = API_URL + "api/competencia/" + id + "/";
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

    function consultDtaSelected() {
      listSelected.map((competencia) => {
      ConsultDataQuery(competencia);
    });
    }
    


  //sacar una competencia del modal de seleccionadas
  function deleteCompetencySelected(id) {
    const templateData = data.filter((competency) => competency.pk !== id);
    setData(templateData);
  }

  function resetState() {
    setData([])
  }

  return{
    resetState,
    deleteCompetencySelected,
    data,
    consultDtaSelected
  }

}
