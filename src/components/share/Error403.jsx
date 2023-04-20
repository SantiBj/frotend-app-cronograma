import { RiForbid2Fill } from "react-icons/ri";

export function Error403() {
  return (
    <div className="space-y-[20px]">
      <div className="rotate-45 text-Red opacity-60 flex justify-center">
        <RiForbid2Fill size={40} />
      </div>
      <div>
        <h2 className="text-Gray4 text-center font-medium text-[19px]">No estas Authorizado para acceder ACA !</h2>
      </div>
    </div>
  );
}
