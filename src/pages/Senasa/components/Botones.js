import { BsGraphUp, BsDownload } from "react-icons/bs"
import { Link } from 'react-router-dom'


export default function Botones({ id }){


    return(
        <div className="container__btn__gd">
            <div className="container__boton__senasa">
                <Link to={`/senasa/grafica?id=Trampa ${id}`} className="link">
                    <BsGraphUp/> Gráfico
                </Link> 
            </div>
            <div className="container__boton__senasa">
                <Link to={`/senasa/descargar?id=Trampa ${id}`} className="link">
                    <BsDownload/> Descargar
                </Link>
            </div>
        </div>
    )
}