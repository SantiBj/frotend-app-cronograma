import { useState } from "react"
import { NavLink } from "react-router-dom"

export function Navegacion() {

    const [isVisible, setIsVisible] = useState(false)

    return (
        <nav className="lg:px-[100px] flex items-center justify-between flex-wrap bg-Green p-[20px] gap-[20px]">
            <div className="flex items-center flex-shrink-0 text-White mr-6">
                <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
            </div>
            <div className="block lg:hidden">
                <button onClick={() => { setIsVisible(!isVisible) }} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-White hover:border-White">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>

            <div className={`${!isVisible && "hidden "} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
                <div className="lg:flex gap-[30px]">
                    <h1>Asignar</h1>
                    <h1>Instructores</h1>
                    <h1>Fichas</h1>
                </div>
                <div>
                    <button className="border border-2px border-White py-[4px] px-[8px] text-White font-medium rounded-md">Salir</button>
                </div>
            </div>
        </nav>
    )
}