import { NavLink } from "react-router-dom";

export function OptionMenu({to,setVisibleMenu,text}) {
  return (
    <div>
      <NavLink
        to={to}
        style={({ isActive }) => (isActive ? { borderBottomWidth: "3px" } : {})}
        onClick={() => setVisibleMenu(false)}
        className="text-Black pb-[10px] lg:text-White duration-150 hover:border-b-[3px] hover:border-White"
      >
        {text}
      </NavLink>
    </div>
  );
}
