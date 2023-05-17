import { Search } from "../components/ficha/Search";
import { Title } from "../components/share/Title"
import { SearchLocation } from "../components/share/SearchLocation";
import { BtnCreate } from "../components/share/BtnCreate";
import { CardsGrid } from "../components/pageInstructor/CardsGrid";
import { auth } from "../context/auth";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

export function Instructores() {
  const { user }=useContext(auth)
  // aca va paginacion de instructores 
  //buscador
  //redireccion a pagina de o vista de asignacion instructor
  
  if (!user || user && !user.isAdmin){
    return <Navigate to="/login"/>
  }
  return (
    <div className="bg-no-repeat bg-cover bg-left md:bg-center bg-[url('https://i.postimg.cc/MZfwpFXp/fondo.jpg')]">
      <div className="w-[80%] pb-[50px] mx-auto">
      <div className="flex justify-between items-center">
        <Title text="Instructores"/>
      <BtnCreate to="/instructor/data" />
      </div>
      
      <SearchLocation titleText="Ingrese el nombre o documento del instructor que desea buscar">
        <Search
          to="/instructores"
          placeholder="Ej: 1072195136 o Alvaro Suarez"
          typeInput="text"
        />
      </SearchLocation>
      <CardsGrid/>
    
    </div>
    </div>
    
  );
}
