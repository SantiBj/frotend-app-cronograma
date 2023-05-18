import { createContext, useState } from "react";

export const updateInst = createContext()

const initialState={
    documento:"",
    nombreCompleto:"",
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

    function convertToFalse(id){
        const template = {
            ...dataUpdate.competencias,
            [id]:false
        }
        setUpdateData({competencias:template})
    }

    const value = {
        dataUpdate,
        setUpdateData,
        resetContext,
        convertToFalse
    }

    return(
        <updateInst.Provider value={value}>
            {children}
        </updateInst.Provider>
    )
}