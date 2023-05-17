export function Btn({ text, onClick }) {
  const stylesBtnAccept =
    "border-Green text-Green text-[14px] px-[8px] py-[4px] rounded-md font-medium duration-300 hover:text-White hover:bg-Green border-[2px]";
  const stylesBtnCancel =
    "border-Red text-Red text-[14px] px-[8px] py-[4px] rounded-md font-medium duration-300 hover:text-White hover:bg-Red border-[2px]";

  return (
    <button
      onClick={onClick}
      className={`${text === "Aceptar" ? stylesBtnAccept : stylesBtnCancel}`}
    >
      {text}
    </button>
  );
}
