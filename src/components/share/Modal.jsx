export function Modal({ children, isVisible, logout, sizeMd }) {
  return (
    <div
      className={`${
        !isVisible && "hidden"
      } fixed z-10 top-0 bottom-0 left-0 right-0 bg-[#ffffffb9]  flex justify-center items-center`}
    >
      <div
        className={`${
          !logout && !sizeMd && "w-[60%] max-w-[510px] h-[50%] max-h-[400px]"
        }
        bg-White border-[2px] border-Gray2 
        ${
          logout &&
          "w-[70%] h-[30%] md:w-[30%] md:max-w-[400px] md:h-[40%] md:max-h-[250px]"
        }   
        ${
          sizeMd &&
          "w-[80%] h-[40%] md:w-[30%] md:max-w-[400px] md:h-[40%] md:max-h-[250px]"
        }
            shadow-2xl rounded-xl flex justify-center items-center`}
      >
        {children}
      </div>
    </div>
  );
}
