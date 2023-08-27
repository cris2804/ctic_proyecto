import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Marker } from "react-leaflet"
import L from "leaflet"

const ubiCentro = ["-12.020381", "-77.049178"]

export default function Mapa({ubi, handleMostrar}){


    return(
        <MapContainer center={ubiCentro} zoom={16}>
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
    )
}