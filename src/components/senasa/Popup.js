import "./Popup.css"
import { fechaFormato2 } from "../obtenerfecha"
import { obtenerhora } from "../obtenerhora"

import iconoMosca from "../../pages/images/icono-mosca.png"

function Popup(){

    return(
        <div className="container__component__popup">
            <div className="container__senasa__titulo">
                TRAMPA 1
            </div>
            <div className="container__depar__pais">
                Junín, Perú
            </div>
            <div className="container__fecha__hora">
                {fechaFormato2()}, {obtenerhora()}
            </div>
            <div className="container__img__cant__moscas__">
                <div className="container__img__cant__moscas__2">
                    <div className="container__imagen__popup__senasa"><img src={iconoMosca} alt="" /></div>
                    <div className="container__cantidad__moscas__popup">
                        <span>80</span>
                        <span>Moscas</span>
                    </div>
                </div>
            </div>
            <div className="container__temp__valor__senasa cthpv">
                <div>Temperatura:</div>
                <div>25°C</div>
            </div>
            <div className="container__humedad__valor__senasa cthpv">
                <div>Humedad:</div >
                <div>60%</div>
            </div>
            <div className="container__porcentaje__valor__senasa cthpv">
                <div>Porcentaje de carga:</div>
                <div>75%</div>
            </div>

            <div className="container__boton__senasa">
                Más detalles
            </div>
        </div>
    )
}

export default Popup