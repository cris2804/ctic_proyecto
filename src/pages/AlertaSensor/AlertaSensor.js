import React from 'react'
import { useContextAlert } from '../../components/PopupAlertas/AlertasContextProvider'
import { useState } from 'react';
import SensorInfo from './SensorInfo';
import "./AlertaSensor.css";

import ClearIcon from '@mui/icons-material/Clear';


const ArrayStates = ["Desabilitado","Activo","Inactivo"];
const ColorStates = ["yellow","white","red"];
const clasesStates = ["sensor-deshabilitado","sensor-activo","sensor-inactivo"];
const transformEstado = (estado) =>{
    if(estado<0 || estado> ArrayStates.length) return "Otro";
    return ArrayStates[estado];
}
const getClassEstado = (estado) =>{
    if(estado<0 || estado> ArrayStates.length) return "Otro";
    return clasesStates[estado];
}
export default function AlertaSensor() {
    const {sensores} = useContextAlert();
    const [sensorCheck,setSensorCheck] = useState({});
    const [infoVisible,setInfoVisible] = useState(false);
    const getBasicInfoSensor = (sensor) =>{
        return {
            "Nombre":sensor.nombre_sensor,
            "Proyecto":sensor.nombre_proyecto
        }
    }
    const showInfoSensor = (sensor) =>{
        return {
            "Nombre": sensor.nombre_sensor,
            "Proyecto": sensor.nombre_proyecto,
            "Lugar": sensor.nombre_lugar,
            "Estado":transformEstado(sensor.estado)
        }
    }
    const clickInfoSensor = (sensor) =>{
        console.log(sensor);
        if(sensor){
            setSensorCheck(sensor);
            setInfoVisible(true);
        }
    }
    const ocultarDetalled = () =>{
        setInfoVisible(false);
    }
    
  return (
    
    <div className='page-sensor-info'>
        <div className='container-info-sensors' >
        {sensores.sort((a,b)=>  b.estado - a.estado).map(e=>{
            return <div 
            onClick={()=>{clickInfoSensor(e)}} 
            className={"sensor-alert " + getClassEstado(e.estado)}
            key = {e.sensor_id}>
                <SensorInfo 
                    sensor={getBasicInfoSensor(e)}
                />
            </div>
        })}
        </div>
        
        {infoVisible && <div className='container-info-detailed'>
            <div className={"sensor-alert-info " +  getClassEstado(sensorCheck?.estado)}>
                <SensorInfo
                sensor={showInfoSensor(sensorCheck)}
                styleIcon={{
                    fontSize: '170px'
                }}
                />
                <div
                    onClick={ocultarDetalled} 
                    className={'ocultar-info-detalled ' + getClassEstado(sensorCheck?.estado)}>
                    <ClearIcon sx={{fontSize:'20px'}}/>
                </div>
            </div>
            
        </div>}
    </div>


    
    
  )
}
