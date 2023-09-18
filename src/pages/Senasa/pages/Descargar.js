import "./Descargar.css"
import Botones from "../components/Botones";
import { useParams } from 'react-router-dom'
import { useState } from "react";

export default function Descargar(){
    const { numero } = useParams();
    const [seleccionado, setSeleccionado] = useState(0)

    console.log(numero)
    
    return(
        <div>
            descargar

            <Botones id={numero}/>

        </div>
    )
}