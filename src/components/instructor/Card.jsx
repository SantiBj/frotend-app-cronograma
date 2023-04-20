import { BsPersonSquare, BsFillCheckCircleFill } from "react-icons/bs";

export function Card({ handleClick, data, selectOption }) {
  return (
    <label htmlFor={data.documento}>
      <div
        className={
          data.documento === selectOption
            ? "border-[3px] border-Green rounded-xl p-1 w-fit"
            : ""
        }
      >
        <div
          className={`bg-Gray3 p-[8px] w-[140px] h-[135px] rounded-xl relative flex flex-col justify-center ${
            selectOption !== data.documento &&
            "duration-[200ms] hover:scale-90  hover:shadow-xl hover:border-[2px] border-Gray3"
          }`}
        >
          {data.documento === selectOption && (
            <div className="absolute right-1 top-1 text-Green ">
              <BsFillCheckCircleFill />
            </div>
          )}
          <div className="flex flex-col gap-[10px]">
            <div className="flex justify-center">
              <BsPersonSquare size={30} />
            </div>
            <div>
              <h3 className="text-[13px] text-center font-medium lowercase">
                {data.nombreCompleto}
              </h3>
              <h3 className="text-[12px] text-center font-medium">
                CC: {data.documento}
              </h3>
            </div>
          </div>
        </div>
        <input
          className="hidden"
          type="radio"
          id={data.documento}
          value={data.documento}
          onClick={handleClick}
        />
      </div>
    </label>
  );
}
