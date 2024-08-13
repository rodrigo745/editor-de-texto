// Componentes
import MenuGeneral from "../components/menu-general/menuGeneral";
import MenuTexto from "../components/menu-texto/menuTexto";
import estilo from "./estilo.json";

export default function Home() {

  console.log(estilo);

  return (
    <div className="px-5 flex justify-center pt-10">
      <MenuGeneral/>
      <div className="w-[60%]">
        <MenuTexto/>
        <div className="bg-slate-400  h-screen mt-10">
          Texto
        </div>
      </div>
    </div>
  );
}
