/*
props = {
    children :,
    another :,
}
*/
export function ButtonsContainer({ children }) {
    return (
        <div className='fixed  bottom-[50px] flex justify-between items-center w-[85%]'>
            {children}
        </div>
    )
}