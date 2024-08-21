import { useRef } from "react"
import Texto from "../texto/texto";

export default function MenuTexto({primario, texto, secundario, hoja}){

    const editorRef = useRef(null);

    const menuSuperior = [ "Archivo", "Insertar", "Ver", "Herramientas", "Formato" ];

    const aplicarBold = (e)=>{
        const editor = editorRef.current;
        const seleccion = window.getSelection();
        
        if(editor && seleccion.rangeCount > 0 ){
            const rango = seleccion.getRangeAt(0);
            const contenidoExtraido = rango.extractContents();
            
            if(contenidoExtraido.querySelector("b")){
                const textSave = contenidoExtraido.textContent;
                rango.insertNode(document.createTextNode(textSave));
            } else {
                const tagBold = document.createElement("b");
                tagBold.appendChild(contenidoExtraido);
                rango.insertNode(tagBold);
            }
        }
    }


    return(
        <div>
            <div className="h-[20vh] w-full rounded-md shadow-sm p-2" 
                style={{background: primario}}>
                <style>{`.place::placeholder { color: ${secundario};}`}</style>
                <input type="text" className={`w-[40%] mb-2 p-1 px-2 text-lg bg-transparent outline-none place`} placeholder="Documento sin título"/>
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
                <div className="rounded-sm shadow-sm" style={{background: secundario, color: texto}}>
                    <div className="px-4 mt-4 p-2 flex space-x-2">
                        <button className="font-bold rounded-md cursor-pointer px-3 py-1 border-2 border-slate-500 w-fit" onClick={()=> aplicarBold("b")}>B</button>
                        <p className="font-bold cursor-pointer px-3 py-1 border-b-2 border-slate-500 w-fit">U</p>
                    </div>
                </div>
            </div>

            {/* Texto editable */}
            <div className="h-screen mt-10 rounded-md shadow-md p-2" style={{
              background: hoja
            }}>
              <Texto editorRef={editorRef}/>
            </div>
        </div>
    )
}