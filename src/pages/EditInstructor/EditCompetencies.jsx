import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { CardsGrid } from "../../components/CompetencyInstructor/CardsGrid";
import { SearchLocation } from "../../components/share/SearchLocation";
import { Search } from "../../components/ficha/Search";

export function EditCompetencies() {
  const { slog } = useParams();

  //competencias iniciales antes de actualizar
  const initialCompetencies = useRef(null);

  //competencias seleccionadas
  const [selected, setSelected] = useState({
    competencias: {},
  });

  //consulta para ver las competencias seleccionadas
  //tendren que ir { id: true }
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "http://127.0.0.1:8000/api/competencias-instructor/" + slog + "/"
      );
      const data = await response.json();

      let competenciasSelected = {};
      for (const competencia of data) {
        competenciasSelected = {
          ...competenciasSelected,
          [competencia.pk]: true,
        };
      }
      setSelected({
        competencias: competenciasSelected,
      });

      initialCompetencies.current = data.map((competencia) => {
        return competencia.pk;
      });
    }
    getData();
  }, []);

  async function prueba() {
    for (const key in selected.competencias) {
      const isPresentLast = initialCompetencies.current.find(
        (id) => id === parseInt(key)
      );

      if (isPresentLast && !selected.competencias[key]) {
        console.log(`se borra ${key}`);
        const response = await fetch(
          `http://127.0.0.1:8000/api/DELInsCom/${slog}/${key}/`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          console.log("se eliminaron las competencias que ya no van");
        }
      } else if (!isPresentLast && selected.competencias[key]) {
        const response = await fetch(
          "http://127.0.0.1:8000/api/anadirinstructor/",
          {
            method: "POST",
            body: JSON.stringify({
              pkCompetencia: parseInt(key),
              docInstructor: parseInt(slog),
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );
        if (response.ok) {
          console.log("competencia añadidad");
        }
      }
    }
  }

  return (
    <div className="w-[85%] mx-auto">
      <SearchLocation
        titleText={"Seleccione o quite las competencias que desee:"}
      >
        <Search
          to={"/instructor/edit/5555"}
          placeholder={"Ej: analizar"}
          typeInput={"text"}
        />
      </SearchLocation>

      <CardsGrid
        context={selected}
        setContext={setSelected}
        searchUrl={"api/buscador/competencias/?page=1&search="}
        competenciesUrl={"api/competencias/?page="}
      />

      <button
        onClick={prueba}
        className="bg-Green p-[20px] fixed bottom-[100px] right-2"
      >
        actualizar
      </button>
    </div>
  );
}
