

export default function Descargar(){
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("id");

    console.log(id)
    
    return(
        <div>
            descargar
        </div>
    )
}