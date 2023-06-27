import { Loading } from "./Loading";

export function WaitProcess({loading}) {
  return (
    <>
      {loading && (
        <div className="z-20 fixed top-0 bottom-0 left-0 right-0 bg-[#ffffffb9] flex justify-center items-center">
          <Loading />
        </div>
      )
      }
    </>
  );
}
