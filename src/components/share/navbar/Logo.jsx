import logo from "../../../assets/Logo.png";
import { Link } from 'react-router-dom'

export function Logo(){
    return(
        <div>
          <div>
            <Link to={"/"}>
              <img className="w-[110px]" src={logo} alt="logo" />
            </Link>
          </div>
        </div>
    )
}