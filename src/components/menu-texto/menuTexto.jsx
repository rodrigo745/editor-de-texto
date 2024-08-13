export default function MenuTexto(props){

    const { primario } = props.estilo.light;

    return(
        <div className="h-[20vh] w-full rounded-md shadow-sm p-2" 
            style={{background: primario}}>
            Editor de texto
        </div>
    )
}