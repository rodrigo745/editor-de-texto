"use client";
import { useState } from "react";

// Componentes
import MenuGeneral from "../components/menu-general/menuGeneral";
import MenuTexto from "../components/menu-texto/menuTexto";
import estilo from "./estilo.json";

export default function Home() {

  const [ estiloGeneral, setEstiloGeneral ] = useState();
  const { primario, secundario, fondo, texto, hoja } = estilo.light;
  const primarioo = `bg-[#${primario}]`;

  console.log(`bg-[#${primario}]`)

  return (
    <div className="px-5 flex justify-center pt-10"
      style={{background: fondo}}>
      <MenuGeneral/>
      <div className="w-[60%]">
        <MenuTexto estilo={estilo}/>
        <div className={`h-screen mt-10`} style={{
          background: primario
        }}>
          Texto: {estilo.dark.primario}
        </div>
      </div>
    </div>
  );
}
