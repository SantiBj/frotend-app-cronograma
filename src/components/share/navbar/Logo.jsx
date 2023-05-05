import logo from "../../../assets/Logo.png";
import { Link } from 'react-router-dom'

export function Logo(){
    return(
        <div>
          <div>
            <Link to={"/"}>
              <div className="flex items-center gap-[10px]">
                <img className="w-[60px] object-contain" src={logo} alt="logo" />
                <div className="text-[15px] font-bold text-White ">
                  P L A N
                </div>
              </div>
            </Link>
          </div>
        </div>
    )
}