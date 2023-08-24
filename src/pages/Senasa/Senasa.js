import "./Senasa.css"
import { MapContainer, TileLayer } from "react-leaflet"
import logo from "./img/logo_version_grafana.png"
import iconoMosca from "./img/icono-mosca.png";
import iconoBateria from "./img/icono-bateria-original.png"
import { cantidadMoscas, porcentajeBateria, colores } from "./components/data"
import Trampa from "./components/Trampa"
import Popup from "./components/Popup"
import { ubicaciones } from "./components/ubicaciones"
import { Marker } from "react-leaflet";
import L from "leaflet";


const ubiCentro = ["-12.016565", "-77.049933"]
cantidadMoscas.sort((a, b) => b.cantidad - a.cantidad)
porcentajeBateria.sort((a, b) => a.porcentaje - b.porcentaje)

function Senasa(){

    const handleMostrar = (e) => {
        console.log(e)
    }
    
    return (
        <div className="container__all__senasa">
            <div className="container__mapa__senasa">
                <MapContainer center={ubiCentro} zoom={18}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {ubicaciones.map((ubicacion) => {
                    return (
                    <Marker
                        key={ubicacion.id}
                        position={ubicacion.coordenadas}
                        icon={L.icon({
                        iconUrl: ubicacion.logo,
                        iconRetinaUrl: ubicacion.logo,
                        iconSize: [40, 40],
                        className: "leaflet-venue-icon",
                        })}
                        eventHandlers={{
                        click: () => handleMostrar(ubicacion.id),
                        }}
                    />
                    );
                })}
                </MapContainer>
                <div className="container__popup__senasa">
                    <Popup/>
                </div>
            </div>
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