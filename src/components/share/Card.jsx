import { BsFillCheckCircleFill } from "react-icons/bs";
import { FcFolder, FcOpenedFolder } from "react-icons/fc";


export function Card({ pk, optionSelect, handleClick, content, isCompetency }) {
  return (
    <label
      htmlFor={pk}
      className={
        optionSelect == pk
          ? "border-[3px] border-Green rounded-lg p-1 w-fit"
          : ""
      }
    >
      <div
        className={`w-[200px] h-[180px] md:w-[250px] md:h-[150px] ${
          optionSelect != pk &&
          "duration-[300ms] hover:shadow-2xl hover:scale-110 border-Gray3 hover:border-[2px]"
        } bg-Gray2 rounded-lg relative`}
      >
        {optionSelect == pk && (
          <div className="absolute right-1 top-1 text-Green">
            <BsFillCheckCircleFill />
          </div>
        )}
        <div className="flex h-full p-[15px] box-border">
          <div className="text-[13px] font-medium">{content}</div>
          <div className="flex items-end">
            {isCompetency ? (
              <FcFolder size={30} />
            ) : (
              <FcOpenedFolder size={30} />
            )}
          </div>
        </div>
      </div>
      <input
        className="hidden"
        type="radio"
        id={pk}
        value={pk}
        onClick={handleClick}
      />
    </label>
  );
}
