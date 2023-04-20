import { BsFillCheckCircleFill } from "react-icons/bs";
import { FcFolder } from "react-icons/fc";

export function Card({ selected, handleClick, content }) {
  const pk = content.pk;

  return (
    <label
      htmlFor={pk}
      className={
        pk in selected && selected[pk]
          ? "border-[3px] border-Green rounded-lg p-1 w-fit"
          : ""
      }
    >
      <div
        className={`w-[200px] h-[180px] md:w-[250px] md:h-[150px] ${
          !pk in selected ||
          (!selected[pk] &&
            "duration-[300ms] hover:shadow-2xl hover:scale-110 border-Gray3 hover:border-[2px]")
        } bg-Gray2 rounded-lg relative`}
      >
        {pk in selected && selected[pk] && (
          <div className="absolute right-1 top-1 text-Green">
            <BsFillCheckCircleFill />
          </div>
        )}
        <div className="flex h-full p-[15px] box-border">
          <div className="text-[13px] font-medium">{content.nombre}</div>
          <div className="flex items-end">
            <FcFolder size={30} />
          </div>
        </div>
      </div>
      <input
        className="hidden"
        id={pk}
        checked={pk in selected && selected[pk]}
        type="checkbox"
        name={pk}
        onChange={handleClick}
      />
    </label>
  );
}
