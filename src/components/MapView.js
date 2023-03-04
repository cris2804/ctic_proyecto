import {MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Markers from './Markers'

//-12.018323979405162, -77.04974594903862 ubicación UNI

const MapView = (props) => {
    return (
        <MapContainer center={props.centro} zoom={16}>
            <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
            />
            <Markers ubicaciones={props.ubicaciones}/>
        </MapContainer>
    );
};

export default MapView