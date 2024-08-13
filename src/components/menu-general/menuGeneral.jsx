import { useState } from "react"


export default function MenuGeneral({ secundario, cambiarEstilo }){

    const [ menuActive, setMenuActive ] = useState(false);

    return(
        <nav className="p-2 px-4 fixed right-0 top-0 mr-10 mt-10 rounded-md shadow-md cursor-pointer"
            onClick={()=>{ setMenuActive(!menuActive) }}
            style={{background: secundario, width: menuActive && "270px", height: menuActive && "400px"}}>
            <div className="rotate-90 font-bold text-lg text-white">
                <p>|||</p>
            </div>
            <div className="text-white">
                sd
            </div>
        </nav>
    )
}