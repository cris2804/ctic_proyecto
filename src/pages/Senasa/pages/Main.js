import "./Main.css"
import Mapa from "../components/Mapa"
import Trampas from "../components/Trampas";
import { useState } from "react"


function Main(){
    const [id, setId] = useState("Trampa 1");

    return (
        <div className="container__all__senasa">

            <Mapa id={id} setId={setId}/>
            
            <Trampas setId={setId}/>            

        </div>
    )
}

export default Main;