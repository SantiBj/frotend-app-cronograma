export function InputText({ error, handleBlur }) {
  return (
    <>
      <input
        onBlur={handleBlur}
        name="numero"
        placeholder="Ej: 245639"
        type="number"
        className="border-[2px] border-Gray3 rounded-lg px-[10px] py-[6px]"
      />
      {error && <div className="text-Red">{error}</div>}
    </>
  );
}
