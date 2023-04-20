export function ContentCards({children}) {
  return (
    <div>
      <div className="grid grid-cols-1 justify-items-center gap-[15px] md:grid-cols-2 lg:grid-cols-4">
        {children}
      </div>
    </div>
  );
}
