import { useContext, useEffect } from "react";
import { updateInst } from "../../context/updateInst";
import { useConsult } from "../useConsult";

export function useFirstLoading(slog,setInput,input) {
  const { dataUpdate, setUpdateData } = useContext(updateInst);
  const { data, loading } = useConsult(`api/instructor/${slog}/`);

  useEffect(() => {
    if (data) {
      if (!input && !dataUpdate.nombreCompleto) {
        setInput(data[0].nombreCompleto);
      }else if(!input && dataUpdate.nombreCompleto){
        setInput(dataUpdate.nombreCompleto)
      }
      if (!dataUpdate.documento) {
        
        setUpdateData({
          documento: data[0].documento,
          nombreCompleto: data[0].nombreCompleto,
        });
      }
    }
  }, [data]);

  return {
    loading,
  };
}
