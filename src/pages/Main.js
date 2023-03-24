import './css/Main.css';
import { ubicaciones } from '../assets/ubicaciones';
import { ubicacionesCV } from '../assets/ubicacionesCV';
import { useState } from 'react';
import calidad from '../assets/calidad.png';
import carga from '../assets/carga.png';
import {MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Marker } from "react-leaflet"
import L from "leaflet";
import logoclose from './images/logoclose.png';
import Detalles from '../components/Detalles';
import DetallesI from '../components/DetallesI';
import NavBarText from '../components/NavBarText'

const ubiCentro = ['-12.020381', '-77.049178']

function Main() {
  const [ubi, setUbi] = useState(ubicaciones);
  /*-- */
  const [estadoCA, setEstadoCA] = useState(true);
  const [estadoCV, setEstadoCV] = useState(false);
  /*--- */
  const [id, setId] = useState('');
  const [bol, setBol] = useState(false);

  /*-- */
  const handleCambiarCA = () => {
    setUbi(ubicaciones)

    if(estadoCA === false && estadoCV === true){
      setEstadoCA(true);
      setEstadoCV(false);
    }
  }
  const handleCambiarCV = () => {
    setUbi(ubicacionesCV)
    
    if(estadoCV === false && estadoCA === true){
      setEstadoCV(true);
      setEstadoCA(false);
    }
  }

  /*--- */
  const handleCerrar = ( )=> {
    setBol(false);
  }
  const handleMostrar = (e) => {
    setId(e)
    setBol(true)
  }

  return (
  <div className='container__main'>
    <div className='nav__main'>
      <NavBarText/>
    </div>
    <div className='cont container__map'>
      <MapContainer center={ubiCentro} zoom={16}>
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
          />
          {ubi.map((ubicacion) =>{
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
              eventHandlers={{ click: ()=>handleMostrar(ubicacion.clave) }} />
            })}
      </MapContainer>

      <div className='calidad__del__aire__carga__viral'>
          <div className={estadoCA ? 'ca-cv-2':'ca-cv'} onClick={handleCambiarCA}>
            <img src={calidad} alt="logo calidad del aire" />
            <span>Calidad del Aire en Exteriores</span>
          </div>
          <div className={estadoCV ? 'ca-cv-2':'ca-cv'} onClick={handleCambiarCV}>
            <img src={carga} alt="carga viral"/>
            <span>Calidad del Aire en Interiores</span>
          </div>
      </div>

      <div className={estadoCA ? 'container__ica' : 'container__ica2'}>
        <div className='container__ica__'>
          <span>Bueno</span>
          <span>Moderado</span>
          <span>Perjudicial para grupos sensibles</span>
          <span>Perjudicial</span>
          <span>Muy Perjudicial</span>
          <span>Peligroso</span>
        </div>
      </div>

      <div className={bol ? 'container__datos__ca__cv':'container__datos__ca__cv2'}>
        <div className='container__logo__close'><img src={logoclose} alt="logo-close" onClick={handleCerrar}/></div>
        {estadoCA ? <Detalles id= {id}/> : <DetallesI id={id}/>}
      </div>
    
    </div>
    
  </div>
  );
}

export default Main;