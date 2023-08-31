import "./Main.css"
import Mapa from "../components/Mapa"
import Trampas from "../components/Trampas";
import { useState } from "react"
import { cantidadMoscas, colores } from "../components/data"


function Main(){
    const [id, setId] = useState(1);

    return (
        <div className="container__all__senasa">

            <Mapa id={id} setId={setId} data={cantidadMoscas}/>
            
            <Trampas setId={setId} data={cantidadMoscas} colores={colores}/>            

        </div>
    )
}

export default Main;