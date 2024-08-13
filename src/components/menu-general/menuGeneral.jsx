import { useState } from "react"


export default function MenuGeneral({ secundario, cambiarEstilo, addLuzNocturna }){

    const [ menuActive, setMenuActive ] = useState(false);
 
    return(
        <nav className="p-2 px-4 fixed right-0 top-0 mr-10 mt-10 rounded-md shadow-md  overflow-hidden"
            style={{background: secundario, width: menuActive ? "270px" : "50px", height: menuActive ? "400px" : "45px"}}>
            <div onClick={()=> {setMenuActive(true)}} 
                className="rotate-90 font-bold text-lg text-white cursor-pointer">
                <p>|||</p>
            </div>
            {
                menuActive && 
                <div className="text-white space-y-3 pt-1 absolute top-0 mt-5 w-full pr-10">
                    <div className="flex justify-between mb-6">
                        <p>Configuración</p>
                        <button onClick={()=> {setMenuActive(false)}} className="bg-red-400 px-3 rounded-sm">x</button>
                    </div>
                    <div className="flex justify-between">
                        <p>Modo oscuro</p>
                        <input onClick={cambiarEstilo} type="checkbox" class="theme-checkbox"/>
                    </div>
                    <div className="flex justify-between">
                        <p>Luz nocturna</p>
                        <input onClick={addLuzNocturna} type="checkbox" class="theme-checkbox"/>

                    </div>
                </div>
            }                
        </nav>
    )
}