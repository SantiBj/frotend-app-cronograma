import { Link } from 'react-router-dom'
import { BtnSalir } from "../../logout/BtnSalir";
import { useContext } from 'react';
import { auth } from '../../../context/auth';

export function ContentMenuProfile({handleClickOut}) {

	const { user } = useContext(auth)

  return (
    <div className="bg-Gray border-Gray2 border-[2px] w-[90px] fixed right-[30px] md:right-[50px] box-border p-[10px] flex flex-col gap-3 rounded-md">
      {user && !user.isAdmin && (
        <div className="flex justify-center">
          <Link
            className="font-semibold text-Black duration-200 hover:text-[19px]"
            to="/profile"
          >
            Perfil
          </Link>
        </div>
      )}
      <div className="w-full h-[2px] bg-Gray3"></div>
      <div className="flex justify-end">
        <BtnSalir menuUser={handleClickOut} />
      </div>
    </div>
  );
}
