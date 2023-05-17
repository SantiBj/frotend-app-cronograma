import { useContext } from "react";
import { createInst } from "../../context/createInst";

export function useCountSelected() {
  const { instData } = useContext(createInst);

    const competencies = instData.competencias;
    let quantity = 0;
    const listIDCompetencies = [];

    for (let key in competencies) {
      if (competencies[key]) {
        listIDCompetencies.push(key);
        quantity++;
      }
    }

  return{
    quantity,
    listIDCompetencies
  }
}
