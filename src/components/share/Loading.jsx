import { AiOutlineLoading } from 'react-icons/ai'

export function Loading({small}){
    return(
        <div className={`${small && "h-[25vh]"} h-[55vh] flex justify-center items-center text-Gray6 animate-spin`}>
            <AiOutlineLoading size={35}/>
        </div>
    )
}