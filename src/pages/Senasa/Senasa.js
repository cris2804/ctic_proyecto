import "./Senasa.css"
import logo from "./img/logo_version_grafana.png"
import iconoMosca from "./img/icono-mosca.png";
import iconoBateria from "./img/icono-bateria-original.png"
import { cantidadMoscas, porcentajeBateria, colores } from "./components/data"
import Trampa from "./components/Trampa"
import Mapa from "./components/Mapa"


cantidadMoscas.sort((a, b) => b.cantidad - a.cantidad)
porcentajeBateria.sort((a, b) => a.porcentaje - b.porcentaje)

function Senasa(){

    return (
        <div className="container__all__senasa">
            {/*Mapa*/}
            <Mapa />
            
            <div className="container__right__senasa">
                <div className="container__icono__sc">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="container__cantidad__moscas">
                    <div className="container__orden__moscas">
                        <img src={iconoMosca} alt="icono-mosca"/>
                    </div>
                    <div className="container__trampa__cp">
                        {
                            cantidadMoscas.map((objeto, index) => {
                                return(
                                    <div key={index} className="container__vn">
                                        <Trampa nombre={objeto.nombre} cantidad={objeto.cantidad} color={colores[index].color}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="container__porcentaje__bateria">
                    <div className="container__orden__porcentaje">
                        <img src={iconoBateria} alt="icono bateria"/>
                    </div>
                    <div className="container__trampa__cp">
                        {
                            porcentajeBateria.map((objeto, index) => {
                                return (
                                    <div key={index} className="container__vn">
                                        <Trampa nombre={objeto.nombre} cantidad={objeto.porcentaje+"%"} color={colores[index].color}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Senasa;