import { Search } from "../components/ficha/Search";
import { LogicCards } from "../components/fichasPage/LogicCards";
import { SearchLocation } from "../components/share/SearchLocation";
import { BtnCreate } from "../components/share/BtnCreate";
import { Title } from "../components/share/Title";
import { auth } from "../context/auth";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

export function Fichas() {
  const { user }=useContext(auth)

  if(!user || user && !user.isAdmin){
    return <Navigate to="/login"/>
  }

  return (
    <div className="bg-no-repeat bg-cover bg-[url('https://i.postimg.cc/MZfwpFXp/fondo.jpg')]">
      <div className="w-[80%] pb-[50px] mx-auto">
      <div className="flex justify-between items-center">
        <Title text="Fichas" />
        <BtnCreate to="/ficha/create" />
      </div>
      <SearchLocation titleText="Ingrese el numero de la ficha que desea buscar">
        <Search to="/fichas" placeholder="Ej: 2456683" />
      </SearchLocation>
      <LogicCards />
    </div>
    </div>
    
  );
}
