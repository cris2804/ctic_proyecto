import "./SmartParking.css"
import { MapContainer, TileLayer } from "react-leaflet"
import {ubi} from "./ubicaciones"
import { Marker } from "react-leaflet"
import L from "leaflet"
import { useEffect, useRef, useState } from "react"
import RealTimeComponentSmartParking from "./RealTimeComponentSmartParking"

//const ubiCentro = ["-12.020381", "-77.049178"];
const ubiCentro = [-12.016460,-77.049896]

function SmartParking(){
    const popup = useRef(null);
    useEffect(()=>{
        if(popup){
            popup.current.style.display = "none";
          
        }
    },[])
    const handleMostrar = (e, i) => {
        console.log("hola");
        popup.current.style.display = "flex";
      };
    const ocultarPopup =(evt) =>{
        
        if(evt.target === popup.current) popup.current.style.display = "none"; 
    }
    return (
        <div className="container__all__senasa flex-column">
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
                <div ref={popup} onClick={ocultarPopup} className="popup-smart-parking">
                    <RealTimeComponentSmartParking/>
                </div>
            </div>
            <div className="tittle-general">Smart Parking</div>
        </div>
    )
}

export default SmartParking