import { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useCaptureInformation } from "../../hooks/useCaptureInformation";
import { auth } from "../../context/auth";
import { ErrorGeneric } from '../share/ErrorGeneric'

const initialInformation = {
  username: "",
  password: "",
};

export function InputsContainer() {
  //informacion del formulario
  const { handleChange, data } = useCaptureInformation(initialInformation);

  //unir estos dos en uno solo
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [eyeInputVisible, setEyeInputVisible] = useState(false);

  const [error, setError] = useState(null);
  const { loginUser,errors } = useContext(auth);

  function handleSubmit(e) {
    e.preventDefault();
    loginUser(data)
  }

  if (errors && errors !== "400"){
    return <ErrorGeneric/>
  }
  return (
    <div
      className="w-[60%] md:w-[40%] lg:w-[500px]
             border-Gray2 border-[2px] p-[30px] md:p-[70px] shadow-lg rounded-lg
             flex-col justify-center items-center
             "
    >
      <h3 className="font-bold text-[20px] md:text-[25px] text-center mb-[15px]">
        Acceder
      </h3>
      {errors=== "400" && (
        <div
          className={` bg-Red w-full text-White p-[5px] rounded-lg mb-[15px]`}
        >
          <p className="text-center">contraseña incorrecta</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-[15px]">
        <div className="space-y-[15px]">
          <div className="space-y-[2px]">
            <label className="font-medium">Documento:</label>
            <input
              name="username"
              value={data.document}
              onChange={handleChange}
              className="border-Gray3 border-[2px] 
                                rounded-xl p-[8px] w-full px-[10px] focus:border-GreenOpacity
                                focus:border-[3px] outline-none"
              type="text"
              placeholder="Ingrese su documento"
            />
          </div>
          <div className="space-y-[2px]">
            <label className="font-medium">Contraseña:</label>
            <div className="relative">
              <input
                name="password"
                value={data.password}
                onChange={handleChange}
                onFocus={() => setEyeInputVisible(true)}
                className="border-Gray3 border-[2px] 
                                    rounded-xl p-[8px] w-full px-[10px] focus:border-GreenOpacity 
                                    focus:border-[3px] outline-none"
                type={passwordVisible ? "text" : "password"}
                placeholder="Ingrese su contraseña"
              />

              {eyeInputVisible && (
                <div
                  onMouseDown={() => {
                    setPasswordVisible(true);
                  }}
                  onMouseUp={() => {
                    setPasswordVisible(false);
                  }}
                  className="absolute top-[14px] right-4"
                >
                  {!passwordVisible ? (
                    <button>
                      <AiOutlineEyeInvisible />
                    </button>
                  ) : (
                    <button>
                      <AiOutlineEye />
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <button
            className="w-full bg-Green rounded-lg p-[5px] text-White font-semibold hover:opacity-60 duration-100"
            type="submit"
          >
            Iniciar
          </button>
        </div>
      </form>
    </div>
  );
}
