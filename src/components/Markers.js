import { Marker } from "react-leaflet"
import L from "leaflet";

const Markers = (props) => {
    const {ubicaciones} = props;
   
    return <>
    {ubicaciones.map((ubicacion, i) =>{
       return <Marker 
                    key={ubicacion.nombre}    
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
                    eventHandlers={{ click: () => console.log(ubicacion.nombre) }} />
    })}
    </>;
};

export default Markers