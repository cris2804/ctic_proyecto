import "./css/Popup.css"
import {get_hora, get_fecha, diferenciaHoras} from "../../../components/convertirfechahora"
import iconoMosca from "../img/icono-mosca.png"
import iconoAdvertencia from "../img/icono-advertencia.png"
import { useEffect } from "react"
import Botones from "./Botones"

const aux = new Date();
const actual = aux.toISOString();

function Popup({id, d}){

    useEffect(() => {

        console.log(actual)

    }, [id])

    return(
        <div className="container__component__popup">
            <div className="container__senasa__titulo">
                {"Trampa "+id}
            </div>
            <div className="container__depar__pais">
                Junín, Perú
            </div>
            <div className="container__fecha__hora">
                {get_fecha(d.tiempo)}, {get_hora(d.tiempo)}
            </div>
            <div className="container__img__cant__moscas__">
                <div className="container__img__cant__moscas__2">
                    <div className="container__imagen__popup__senasa"><img src={diferenciaHoras(2, 15, actual, d.tiempo) ? iconoMosca : iconoAdvertencia} alt="" /></div>
                    <div className="container__cantidad__moscas__popup">
                        <span>{d.cantidad}</span>
                        <span>Moscas</span>
                    </div>
                </div>
            </div>
            <div className="container__temp__valor__senasa cthpv">
                <div>Temperatura:</div>
                <div>{d.temperatura}°C</div>
            </div>
            <div className="container__humedad__valor__senasa cthpv">
                <div>Humedad:</div >
                <div>{d.humedad}%</div>
            </div>
            <div className="container__porcentaje__valor__senasa cthpv">
                <div>Porcentaje de carga:</div>
                <div>{d.porcentaje}%</div>
            </div>

            <Botones id={id} />
            
        </div>
    )
}

export default Popup