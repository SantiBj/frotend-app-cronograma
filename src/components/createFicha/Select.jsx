export function Select({ error, handleBlur, data }) {
  return (
    <>
      <select
        onBlur={handleBlur}
        name="titulada"
        className="border-[2px] border-Gray3 rounded-lg px-[10px] py-[6px]"
      >
        <option className="text-Gray3" value="">
          Ej: Analisis y Desarrollo de Software
        </option>
        {data.map((titulada) => (
          <option key={titulada.id} value={titulada.id}>
            {titulada.nombre}
          </option>
        ))}
      </select>
      <div>{error && <div className="text-Red">{error}</div>}</div>
    </>
  );
}
