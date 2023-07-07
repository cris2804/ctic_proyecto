import "./Popup.css"

import iconoMosca from "../../pages/images/icono-mosca.png"

function Popup(){

    return(
        <div className="container__component__popup">
            <div className="container__senasa__titulo">
                Trampa 1
            </div>
            <div className="container__depar__pais">
                Junín, Perú
            </div>
            <div className="container__fecha__hora">
                06/06/2023 16:24
            </div>
            <div className="container__img__cant__moscas__">
                <div className="container__img__cant__moscas__2">
                    <div className="container__imagen__popup__senasa"><img src={iconoMosca} alt="" /></div>
                    <div className="container__cantidad__moscas__popup">
                        <div>80</div>
                        <div>moscas</div>
                    </div>
                </div>
            </div>
            <div>
                <div>Temperatura:</div>
                <div>25°C</div>
            </div>
            <div>
                <div>Humedad:</div>
                <div>60%</div>
            </div>
            <div>
                <div>Porcentaje de carga:</div>
                <div>75%</div>
            </div>

            <div>
                Más detalles
            </div>
        </div>
    )
}

export default Popup