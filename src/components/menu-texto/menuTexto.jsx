export default function MenuTexto({primario, texto, secundario}){

    const menuSuperior = [ "Archivo", "Insertar", "Ver", "Herramientas", "Formato" ]

    return(
        <div className="h-[20vh] w-full rounded-md shadow-sm p-2" 
            style={{background: primario}}>
            {/* Opciones de menu superior*/}
            <div className="flex space-x-8 px-2">
                {
                    menuSuperior.map((e, index)=> (
                        <p key={index} style={{color: `${index !== 0 && secundario }`}} > {e} </p>
                    ) )
                }
            </div>
            {/* opciones de menu inferior
            
                Cambiar los estilos de las letras y colores
            */}
            <div className="bg-slate-600 rounded-sm shadow-sm">
                <div className="px-4 mt-4 p-2 flex space-x-2">
                    <p className="font-bold rounded-md cursor-pointer px-3 py-1 border-2 border-slate-500 w-fit">B</p>
                    <p className="font-bold cursor-pointer px-3 py-1 border-b-2 border-slate-500 w-fit">U</p>

                </div>
            </div>
        </div>
    )
}