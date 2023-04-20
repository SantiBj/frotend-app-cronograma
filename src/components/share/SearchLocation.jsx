export function SearchLocation({ children, titleText }) {
  return (
    <div className="flex flex-col justify-center h-[55vh] md:h-[50vh]">
      <div className="w-[70%] max-w-[500px] mx-auto font-semibold mb-[25px]">
        <h2>{titleText}</h2>
      </div>
      <div className="flex justify-center">{children}</div>
    </div>
  );
}
