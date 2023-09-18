import { BsGraphUp, BsDownload } from "react-icons/bs"
import { Link } from 'react-router-dom'

export default function Botones({ id }){

    return(
        <div className="container__btn__gd">
            <div className="container__boton__senasa">
                <Link to={`/senasa/grafica/trampa/${id}`} className="link">
                    <BsGraphUp className="gd__senasa"/> Gráfico
                </Link> 
            </div>
            <div className="container__boton__senasa">
                <Link to={`/senasa/descargar/trampa/${id}`} className="link">
                    <BsDownload className="gd__senasa"/> Descargar
                </Link>
            </div>
        </div>
    )
}