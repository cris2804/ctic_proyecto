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
import AyudaCAE from '../components/AyudaCAE';
/* import AyudaCAE from '../components/AyudaCAE';
import AyudaCAI from '../components/AyudaCAI'; */
import DetallesI from '../components/DetallesI';
//import NavBarText from '../components/NavBarText'

const ubiCentro = ['-12.020381', '-77.049178']

function changeOption(i, id){
  if(i === 0){
    return <Detalles id={id}/>
  }else if(i === 1){
    return <DetallesI id={id}/>
  }else if(i === 2){
    return <AyudaCAE id={id}/>
  }
}

function Main() {
  const [ubi, setUbi] = useState(ubicaciones);
  /*-- */
  const [estadoCA, setEstadoCA] = useState(true);
  const [estadoCV, setEstadoCV] = useState(false);
  /*--- */
  const [id, setId] = useState('');
  const [bol, setBol] = useState(false);

  /*--- */
  const [i, setI] = useState(0);

  /*-- */
  const handleCambiarCA = (i) => {
    setUbi(ubicaciones)

    if(estadoCA === false && estadoCV === true){
      setEstadoCA(true);
      setEstadoCV(false);
    }
    //se oculta el panel cuando pasamos de cae a cai
    if (i !== 2) setBol(false);
    setI(i);
  }
  const handleCambiarCV = (i) => {
    setUbi(ubicacionesCV)
    
    if(estadoCV === false && estadoCA === true){
      setEstadoCV(true);
      setEstadoCA(false);
    }
    //se oculta el panel cuando pasamos de cai a cae
    if(i!==2) setBol(false);
    setI(i);
  }

  /*--- */
  const handleCerrar = ( )=> {
    setBol(false);
  }
  const handleMostrar = (e,i) => {
    setId(e)
    setBol(true)
    setI(i)
  }

  return (
  <div className='container__main'>
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
              eventHandlers={{ click: ()=>handleMostrar(ubicacion.clave, ubicacion.i) }} />
            })}
      </MapContainer>

      <div className='calidad__del__aire__carga__viral'>
          <div className={estadoCA ? 'ca-cv-2':'ca-cv'} onClick={()=>handleCambiarCA(0)}>
            <img src={calidad} alt="logo calidad del aire" />
            <span>Calidad del Aire en Exteriores</span>
          </div>
          <div className={estadoCV ? 'ca-cv-2':'ca-cv'} onClick={()=>handleCambiarCV(1)}>
            <img src={carga} alt="carga viral"/>
            <span>Calidad del Aire en Interiores</span>
          </div>
      </div>

      <div className={estadoCA ? 'container__ica' : 'container__ica2'}>
        <div className='container__ica_body'>
          <div className='container__ica_legend_section'>
            <div className='map-legend-title'>
              <span class="type-subtitle-3 text-smoke-120"> INCA (µg/m³) </span>
              <span class="type-subtitle-3 text-smoke-60"> Mediciones más recientes</span>
            </div>
            <div className='map-legend-bar'>
              <div style={{ flex: "1 1 0%", backgroundColor: "#9AD64D" }}></div>
              <div style={{ flex: "1 1 0%", backgroundColor: "#F8CD38" }}></div>
              <div style={{ flex: "1 1 0%", backgroundColor: "#F88F48" }}></div>
              <div style={{ flex: "1 1 0%", backgroundColor: "#F55D5E" }}></div>
              <div style={{ flex: "1 1 0%", backgroundColor: "#A070B6" }}></div>
              <div style={{ flex: "1 1 0%", backgroundColor: "#A06A7B" }}></div>
              <div style={{ flex: "1 1 0%", backgroundColor: "#564f51" }}></div>
            </div>
            <div className='map-legend-bar-labels'>
              <span class="type-body-4" style={{flex: "1 1 0%"}}>0</span>
              <span class="type-body-4" style={{flex: "1 1 0%"}}>50</span>
              <span class="type-body-4" style={{flex: "1 1 0%"}}>100</span>
              <span class="type-body-4" style={{flex: "1 1 0%"}}>150</span>
              <span class="type-body-4" style={{flex: "1 1 0%"}}>200</span>
              <span class="type-body-4" style={{flex: "1 1 0%"}}>300</span>
              <span class="type-body-4" style={{flex: "1 1 0%"}}>500+</span>
            </div>
          </div>
          <div className='container__ica_help_section' onClick={()=>handleCambiarCA(2)}>
            <button class="button-reset">
              <span class="legend-help"><HelpOutlineIcon/></span>
              <span> Ayuda </span>
            </button>
          </div>
        </div>
      </div>

      <div className={bol || i === 2 ? 'container__datos__ca__cv':'container__datos__ca__cv2'}>
        <div className='container__logo__close'><img src={logoclose} alt="logo-close" onClick={handleCerrar}/></div>
        {changeOption(i, id)}
      </div>
    </div>
    
  </div>
  );
}

export default Main;