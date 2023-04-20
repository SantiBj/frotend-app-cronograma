import { useLocation } from "react-router-dom";

export function useQueryParams(){
    //retorna de la url el parametro search
    // ojo no la variable sino to ?algo= 145
    //se usa para luego con ayuda de otro metodo sacar el 145
    return new URLSearchParams(useLocation().search)
}