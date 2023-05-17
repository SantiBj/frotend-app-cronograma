import { createContext, useState } from "react";

export const updateInst = createContext()

const initialState={
    nombre:"",
    competencias:{}
}


export function UpdateInstructor({ children }){
    const [dataUpdate,setDataUpdate] = useState(initialState)
    
    //solo pasa los datos
    function setUpdateData(data) {
        const template = {
            ...dataUpdate,
            ...data
        }
        setDataUpdate(template)
    }

    function resetContext() {
        setDataUpdate(initialState)
    }

    const value = {
        dataUpdate,
        setUpdateData,
        resetContext
    }

    return(
        <updateInst.Provider value={value}>
            {children}
        </updateInst.Provider>
    )
}