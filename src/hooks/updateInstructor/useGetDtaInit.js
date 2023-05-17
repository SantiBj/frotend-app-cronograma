import { useContext, useRef,useEffect } from "react";
import { updateInst } from "../../context/updateInst";
import { API_URL } from "../../config";

export function useGetDtaInit( idInst ) {
  const initialCompetencies = useRef(null);
  const { setUpdateData } = useContext(updateInst);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        API_URL + "api/competencias-instructor/" + idInst + "/"
      );
      const data = await response.json();

      let competenciasSelected = {};
      for (const competencia of data) {
        competenciasSelected = {
          ...competenciasSelected,
          [competencia.pk]: true,
        };
      }
      //ejecutar funcion para cambiar el contexto
      setUpdateData({
        competencias: competenciasSelected,
      });

      initialCompetencies.current = data.map((competencia) => {
        return competencia.pk;
      });
    }
    getData();
  }, []);

  return{
    initDta:initialCompetencies,
  }
}
