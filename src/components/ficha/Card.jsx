import { BsFillCheckCircleFill } from "react-icons/bs";

export function Card({ numberContent, selectedOption, handleClick }) {
  return (
    <label
      htmlFor={numberContent}
      className={
        (selectedOption == numberContent) ?
        "border-[3px] border-Green rounded-lg p-1" : ""
      }
    >
      <div className={`w-[180px] h-[100px] ${selectedOption != numberContent && "duration-[300ms] hover:scale-110 hover:shadow-xl"} bg-Gray2 rounded-lg relative`}>
        {selectedOption == numberContent && (
          <div className="absolute right-1 top-1 text-Green">
            <BsFillCheckCircleFill />
          </div>
        )}

        <div className="text-[16px] font-medium flex justify-center items-center h-full">
          {numberContent}
        </div>
      </div>
      <input className="hidden"
        type="radio"
        id={numberContent}
        value={numberContent}
        onClick={handleClick}
      />
    </label>
  );
}
