import { Search } from "../components/ficha/Search";
import { LogicCards } from "../components/fichasPage/LogicCards";
import { SearchLocation } from "../components/share/SearchLocation";
import { BtnCreate } from "../components/share/BtnCreate";
import { CardsGrid } from "../components/pageInstructor/CardsGrid";

export function Instructores() {
  // aca va paginacion de instructores 
  //buscador
  //redireccion a pagina de o vista de asignacion instructor
  return (
    <div className="w-[80%] mx-auto">
      <BtnCreate to="/instructor/data" />
      <SearchLocation titleText="Ingrese el nombre o documento del instructor que desea buscar">
        <Search
          to="/instructores"
          placeholder="Ej: 1072195136 o Alvaro Suarez"
          typeInput="text"
        />
      </SearchLocation>
      <CardsGrid/>
    
    </div>
  );
}
