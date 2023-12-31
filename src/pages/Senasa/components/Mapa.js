import { MapContainer, TileLayer, Marker } from "react-leaflet"
import { ubicaciones } from "../assets/ubicaciones"
import L from "leaflet"
import Popup from "./Popup"

const ubiCentro = ["-12.016565", "-77.049933"]

export default function Mapa({id, setId, data}){

    const handleMostrar = (e) => {
        setId(e)
    }

    return(
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
                <Popup id={id} d={data[id-1]}/>
            </div>
        </div>
    )
}