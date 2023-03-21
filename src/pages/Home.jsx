export function Home(){

    //consulta al contexto para traer el nombre del instructor

    return(
        <div className="w-[85%] mx-auto">
            {/*si el user el admin si no saludo y calendario */}
            <div className="h-[80vh] flex flex-col justify-center">
                <h2 className="font-bold text-[25px]">Bienvenido xnombrex a Plán</h2>
                <p>calendario en el caso de que sea un instructor, bienvenido al modo admin</p>
            </div>
        </div>
    )
}