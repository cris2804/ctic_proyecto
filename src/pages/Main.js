import './css/Main.css';
import MapView from '../components/MapView';
import { ubicaciones } from '../assets/ubicaciones';
import { ubicacionesCV } from '../assets/ubicacionesCV';
import { useState } from 'react';
import calidad from '../assets/calidad.png';
import carga from '../assets/carga.png';

const ubiCentro = ['-12.018323979405162','-77.04974594903862']

function Main() {
  const [ubi, setUbi] = useState(ubicaciones);

  return (
  <div className='container__main'>
    <div className='nav__main'>

    </div>
    <div className='cont container__map'>

      <MapView className='view__map' centro={ubiCentro} ubicaciones={ubi}/>

      <div className='calidad__del__aire__carga__viral'>
          <div className='calidad__del__aire' onClick={()=>setUbi(ubicaciones)}>
            <img src={calidad} alt="logo calidad del aire" />
            <span>Calidad del Aire</span>
          </div>
          <div className='carga__viral' onClick={()=>setUbi(ubicacionesCV)}>
            <img src={carga} alt="carga viral"/>
            <span>Carga Viral</span>
          </div>
      </div>

      <div className='container__ica'>
        <div className='container__ica__'>
          <span>Bueno</span>
          <span>Moderado</span>
          <span>Perjudicial para grupos sensibles</span>
          <span>Perjudicial</span>
          <span>Muy Perjudicial</span>
          <span>Peligroso</span>
        </div>
      </div>

    </div>
    
  </div>
  );
}

export default Main;