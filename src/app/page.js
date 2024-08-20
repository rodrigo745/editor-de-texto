"use client";
import { useState } from "react";

// Componentes
import MenuGeneral from "../components/menu-general/menuGeneral";
import MenuTexto from "../components/menu-texto/menuTexto";
import Texto from "@/components/texto/texto";
import estilo from "./estilo.json";

export default function Home() {

  const [ estiloGeneral, setEstiloGeneral ] = useState(estilo.light);
  const [ luzNocturna, setLuzNocturna ] = useState(false);
  const { id, primario, secundario, fondo, texto, textoBajo, hoja } = estiloGeneral;

  // Switch style
  const cambiarEstilo = (e)=>{
    id === 0 ? setEstiloGeneral(estilo.dark) : setEstiloGeneral(estilo.light); 
  }
  const addLuzNocturna = ()=> {
    setLuzNocturna(!luzNocturna);
  }

  return (
    <div className="px-5 flex justify-center pt-10 pb-10"
      style={{background: fondo, color: texto}}>
      <MenuGeneral secundario={secundario} cambiarEstilo={cambiarEstilo} addLuzNocturna={addLuzNocturna}/>
      <div className="w-[60%]">
        <MenuTexto primario={primario} secundario={textoBajo} hoja={hoja}/>
      </div>

      {/* Luz nocturna */}
      {
        luzNocturna &&
        <div className="w-screen h-screen fixed top-0 left-0 bg-[#FFB07C] opacity-25 pointer-events-none"></div>
      }
    </div>
  );
}
