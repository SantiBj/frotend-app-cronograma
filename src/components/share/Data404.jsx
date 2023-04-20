import { MdSearchOff } from "react-icons/md";

export function Data404({ text , small }) {
  return (
    <div className={`${small ? "h-[28vh]" : "h-[55vh]"}  flex justify-center items-center`}>
      <div className="mt-[50px] flex flex-col justify-center items-center text-Gray4">
        <div className="flex justify-center">
          <MdSearchOff size={70} />
        </div>
        <div className="my-[20px] w-[300px] md:w-[400px] mx-auto text-center">{text}</div>
      </div>
    </div>
  );
}
