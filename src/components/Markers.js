import { Marker } from "react-leaflet"
import L from "leaflet";

const Markers = (props) => {
    const {ubicaciones} = props;
   
    return <>
    {ubicaciones.map((ubicacion) =>{
       return <Marker 
                    key={ubicacion.clave}    
                    position={ubicacion.coordenadas} 
                    icon={L.icon({
                        iconUrl: ubicacion.logo,
                        iconRetinaUrl: ubicacion.logo,
                        iconAnchor: null,
                        shadowUrl: null,
                        shadowSize: null,
                        shadowAnchor: null,
                        iconSize: [60, 60],
                        className: "leaflet-venue-icon",
                    })}
                    eventHandlers={{ click: () => console.log(ubicacion.clave) }} />
    })}
    </>;
};

export default Markers