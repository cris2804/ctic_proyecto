import "./SmartParking.css"
import { MapContainer, TileLayer } from "react-leaflet"
import {ubi} from "./ubicaciones"
import { Marker } from "react-leaflet"
import L from "leaflet"

//const ubiCentro = ["-12.020381", "-77.049178"];
const ubiCentro = [-12.016460,-77.049896]

function SmartParking(){

    const handleMostrar = (e, i) => {
        console.log(e,i)
      };

    return (
        <div className="container__all__senasa">
            <div className="container__mapa__sp">
                <MapContainer center={ubiCentro} zoom={18}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {ubi.map((ubicacion) => {
                    return (
                    <Marker
                        key={ubicacion.clave}
                        position={ubicacion.coordenadas}
                        icon={L.icon({
                        iconUrl: ubicacion.logo,
                        iconRetinaUrl: ubicacion.logo,
                        iconSize: [40, 40],
                        className: "leaflet-venue-icon",
                        })}
                        eventHandlers={{
                        click: () => handleMostrar(ubicacion.clave, ubicacion.i),
                        }}
                    />
                    );
                })}
                </MapContainer>
            </div>
        </div>
    )
}

export default SmartParking