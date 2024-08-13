import { useRef } from "react"
import Texto from "../texto/texto";

export default function MenuTexto({primario, texto, secundario, hoja}){

    const editorRef = useRef(null);

    const menuSuperior = [ "Archivo", "Insertar", "Ver", "Herramientas", "Formato" ];

    const aplicarBold = (e)=>{
        const editor = editorRef.current;

        if(editor){
            const seleccion = window.getSelection();
            if(seleccion.rangeCount > 0 ){
                const rango = seleccion.getRangeAt(0);
                if (rango.startContainer.nodeType === Node.TEXT_NODE || rango.startContainer.nodeType === Node.ELEMENT_NODE){
                    const etiqueta = document.createElement(e);
                    // si la etiqueta ya está aplicada entoces se quita
                    rango.surroundContents(etiqueta); // encierro la selección en una etiqueta
                    if(etiqueta.parentElement.tagName == "B"){
                        // Deselecciono el texto luego de aplicar la etiqueta
                        seleccion.removeAllRanges();
                    } else {
                        rango.surroundContents("p");
                        seleccion.removeAllRanges();
                    }
                }
            }
        }
    }



    return(
        <div>
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