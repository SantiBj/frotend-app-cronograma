import { Search } from "../components/ficha/Search";
import { LogicCards } from "../components/fichasPage/LogicCards";
import { SearchLocation } from "../components/share/SearchLocation";
import { BtnCreate } from "../components/share/BtnCreate";
import { Title } from "../components/share/Title";

export function Fichas() {
  return (
    <div className="w-[80%] mx-auto">
      <div className="flex justify-between items-center">
        <Title text="Fichas" />
        <BtnCreate to="/ficha/create" />
      </div>
      <SearchLocation titleText="Ingrese el numero de la ficha que desea buscar">
        <Search to="/fichas" placeholder="Ej: 2456683" />
      </SearchLocation>
      <LogicCards />
    </div>
  );
}
