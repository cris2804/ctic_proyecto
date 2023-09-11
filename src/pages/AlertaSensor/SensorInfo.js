import React from 'react'
import SensorsIcon from '@mui/icons-material/Sensors';

import "./AlertaSensor.css";

const  defaultStyleIcon ={
    fontSize:'120px'
}
export default function SensorInfo({sensor,
    styleIcon = defaultStyleIcon}) {
  return (
    <>
        
        <SensorsIcon 
            sx= {styleIcon}
        />
        
        
        {Object.keys(sensor).map((k,i)=>{
            return <div key={"key"+i}>{k} : {sensor[k]}</div>
        })}
    </>
  )
}
