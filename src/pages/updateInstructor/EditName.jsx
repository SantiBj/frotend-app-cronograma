import { useParams } from "react-router-dom";
import { Loading } from "../../components/share/Loading";
import { ButtonsContainer } from "../../components/share/ButtonsContainer";
import { BtnNext } from "../../components/share/BtnNext";
import { PrevArrow } from "../../components/share/PrevArrow";
import { useFirstLoading } from "../../hooks/updateInstructor/useFirstLoading";
import { useInputControl } from "../../hooks/updateInstructor/useInputControl";
import { useContext } from "react";
import { updateInst } from "../../context/updateInst";
import { Header } from "../../components/updateInstructor/Header";

export function EditName() {
  const { slog } = useParams();
  const { dataUpdate, convertToFalse } = useContext(updateInst);
  const { error, input, setInput, handleChange, onBlur } = useInputControl();
  const { loading } = useFirstLoading(slog, setInput,input);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="w-[80%] mx-auto">
      <Header
        prevUrl={"/instructor/" + slog}
        documento={dataUpdate.documento}
      />
      <main className="h-[30vh] mt-[40px] mb-[90px] flex items-center justify-center">
        <div className="w-[70%] md:w-[40%] mx-auto ">
          <p className="font-semibold mb-[10px]">Nombre completo :</p>
          <input
            placeholder="Ej: Luis Jose Gomez"
            onChange={handleChange}
            onBlur={onBlur}
            value={input}
            type="text"
            className="w-full border-[2px] border-Gray3 rounded-lg px-[10px] py-[6px]"
          />
          {error && <p className="text-[12px] text-Red">{error}</p>}
        </div>
      </main>
      <ButtonsContainer>
        <div></div>
        <BtnNext
          nextPage={"/instructor/edit/" + slog}
          desactivate={!dataUpdate.nombreCompleto}
        />
      </ButtonsContainer>
    </div>
  );
}
