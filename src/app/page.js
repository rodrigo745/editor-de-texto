"use client";
import { useState } from "react";

// Componentes
import MenuGeneral from "../components/menu-general/menuGeneral";
import MenuTexto from "../components/menu-texto/menuTexto";
import estilo from "./estilo.json";

export default function Home() {

  const [ estiloGeneral, setEstiloGeneral ] = useState(estilo.light);
  const { id, primario, secundario, fondo, texto, hoja } = estiloGeneral;

  // Switch style
  const cambiarEstilo = (e)=>{
    e.preventDefault();
    id === 0 ? setEstiloGeneral(estilo.dark) : setEstiloGeneral(estilo.light); 
  }

  return (
    <div className="px-5 flex justify-center pt-10 pb-10"
      style={{background: fondo, color: texto}}>
      <MenuGeneral secundario={secundario} cambiarEstilo={cambiarEstilo}/>
      <div className="w-[60%]">
        <MenuTexto primario={primario}/>
        <div className="h-screen mt-10 rounded-md shadow-md p-2" style={{
          background: hoja
        }}>
          Texto: {estilo.dark.primario}
        </div>
      </div>
    </div>
  );
}
