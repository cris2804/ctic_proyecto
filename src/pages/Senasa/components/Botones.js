import { BsGraphUp, BsDownload } from "react-icons/bs"
import { Link } from 'react-router-dom'

export default function Botones({ id,page }){

    return(
        <div className="container__btn__gd">
            {page !== "grafica" && <div className="container__boton__senasa">
                <Link to={`/senasa/grafica?id=Trampa ${id}`} className="link">
                    <BsGraphUp className="gd__senasa"/> Gráfico
                </Link> 
            </div>}
            {page !=="descarga" && <div className="container__boton__senasa">
                <Link to={`/senasa/descargar?id=Trampa ${id}`} className="link">
                    <BsDownload className="gd__senasa"/> Descargar
                </Link>
            </div>}
        </div>
    )
}