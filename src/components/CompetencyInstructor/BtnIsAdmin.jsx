export function BtnIsAdmin({isAdmin,handleIsAdmin}) {
    return (
      <div className="flex border-Gray2 border-[2px] shadow-lg w-fit px-[5px] py-[4px] gap-[10px] rounded-lg">
        <h3 className="font-semibold">Admin</h3>
        <div
          onClick={handleIsAdmin}
          className={`${
            isAdmin && "bg-Green"
          } w-[45px] h-[25px] border-[2px] border-Gray4 rounded-xl p-[3px] flex ${
            isAdmin && "justify-end"
          }`}
        >
          <div
            className={`${
              isAdmin ? "bg-White" : "bg-Gray4"
            }  w-[50%] h-full rounded-full`}
          ></div>
        </div>
      </div>
    );
  }
  