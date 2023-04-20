import { useState } from "react";

export function useCaptureInformation(initialInformation) {
    
    const [data, setData] = useState(initialInformation)

    function handleChange(e){
        //name y value del input
        const {name,value} = e.target 
        //si una key ya existe no se duplica sino se actualiza
        const newData = {
            ...data,
            [name]:value
        }
        setData(newData)
    }

    return {
        handleChange,
        data
    }
}