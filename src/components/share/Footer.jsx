import moment from "moment-timezone";
import logo from "../../assets/Sena.png";

export function Footer() {
  return (
    <footer className="py-[50px] bg-Gray shadow-md">
      <h3 className="font-semibold text-center">Centro Agroecologico y Empresarial SENA Fusagasuga</h3>
      <div className="flex items-center justify-center my-[15px]">
        <img className="w-[60px]" src={logo} alt="" />
        <div>{moment().year()}</div>
      </div>
    </footer>
  );
}
