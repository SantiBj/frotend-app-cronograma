import { Search } from "../components/ficha/Search";
import { LogicCards } from "../components/fichasPage/LogicCards";
import { SearchLocation } from "../components/share/SearchLocation";
import { BtnCreate } from "../components/share/BtnCreate";

export function Fichas() {
  return (
    <div className="w-[80%] mx-auto">
      <BtnCreate to="/ficha/create"/>
      <SearchLocation titleText="Ingrese el numero de la ficha que desea buscar">
        <Search to="/fichas" placeholder="Ej: 2456683" />
      </SearchLocation>
      <LogicCards />
    </div>
  );
}
