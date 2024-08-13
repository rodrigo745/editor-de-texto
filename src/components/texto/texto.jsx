export default function Texto({editorRef}){
    return(
        <div ref={editorRef} className="w-full outline-none h-full bg-transparent" contentEditable="true">
        </div>
    )
}