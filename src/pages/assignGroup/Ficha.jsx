import { ButtonsContainer } from "../../components/share/ButtonsContainer";
import { BtnNext } from "../../components/share/BtnNext";
import { BtnPrev } from "../../components/share/BtnPrev";
import { Search } from "../../components/ficha/Search";
import { useContext } from "react";
import { Assign } from "../../context/assign";
import { Navigate } from "react-router-dom";
import { LogicCards } from "../../components/ficha/LogicCards";
import { SearchLocation } from "../../components/share/SearchLocation";

export function Ficha() {
  //consulta al context o ficha para ver el programa
  const { dataAssign } = useContext(Assign);
  const ficha = dataAssign.ficha.numero;

  if (dataAssign.programa.id === "") {
    return <Navigate to={"/assign/program"} />;
  }
  return (
    <>
      <div className="mt-[15px] font-semibold p-[5px] px-[10px]  bg-Gray2 w-fit rounded-md">
        Titulada {dataAssign.programa.nombre}
      </div>
      <SearchLocation titleText="Busque y seleccione la ficha que desea">
        <Search to="/assign/ficha" placeholder="Ej: 2456683" />
      </SearchLocation>
      <div className="mb-[110px]">
        <LogicCards />
      </div>

      <ButtonsContainer>
        <BtnPrev prevPage={"/assign/program"} />
        <BtnNext
          nextPage="/assign/competency"
          desactivate={ficha === "" ? true : false}
        />
      </ButtonsContainer>
    </>
  );
}
