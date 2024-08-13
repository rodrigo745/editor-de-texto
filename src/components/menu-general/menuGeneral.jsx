export default function MenuGeneral({ secundario, cambiarEstilo }){

    return(
        <nav className="p-2 px-4 fixed right-0 top-0 mr-10 mt-10 rounded-md shadow-md cursor-pointer"
            onClick={cambiarEstilo}
            style={{background: secundario}}>
            <div className="rotate-90 font-bold text-lg text-white">
                <p>|||</p>
            </div>
        </nav>
    )
}