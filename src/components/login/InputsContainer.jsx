import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useCaptureInformation } from '../../hooks/useCaptureInformation'


const initialInformation = {
    document: "",
    password:""
}


export function InputsContainer() {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [eyeInputVisible, setEyeInputVisible] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        //en enviar esto a un funcion login o algo haci
    }

    const {handleChange,data} = useCaptureInformation(initialInformation)

    return (
        <div
            className="w-[60%] md:w-[40%] lg:w-[500px]
             border-Gray2 border-[2px] p-[30px] md:p-[70px] shadow-lg rounded-lg
             flex-col justify-center items-center
             "
        >
            <h3 className="font-bold text-[20px] md:text-[25px] text-center mb-[15px]">Acceder</h3>
            <form onSubmit={handleSubmit} className="space-y-[15px]">
                <div className="space-y-[15px]">
                    <div className="space-y-[2px]">
                        <label className="font-medium">Documento:</label>
                        <input
                            name="document"
                            value={data.document}
                            onChange={handleChange}
                            className="border border-Gray3 border-[2px] 
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
                                onFocus={()=>setEyeInputVisible(true)}
                                className="border border-Gray3 border-[2px] 
                                    rounded-xl p-[8px] w-full px-[10px] focus:border-GreenOpacity 
                                    focus:border-[3px] outline-none"
                                type={passwordVisible ? "text" : "password"}
                                placeholder="Ingrese su contraseña"
                            />

                            {eyeInputVisible &&
                                <div
                                    onMouseDown={() => {
                                        setPasswordVisible(true);
                                    }}
                                    onMouseUp={() => {
                                        setPasswordVisible(false);
                                    }}
                                    className="absolute top-[14px] right-4"
                                >
                                    {
                                        !passwordVisible ? (
                                            <button><AiOutlineEyeInvisible /></button>
                                        ) : (
                                            <button><AiOutlineEye /></button>
                                        )
                                    }
                                </div>
                            }
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
