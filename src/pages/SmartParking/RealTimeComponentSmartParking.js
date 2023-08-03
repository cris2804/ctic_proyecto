import React from 'react'
import "./SmartParking.css";
import { useRef } from 'react';
import { useEffect } from 'react';
import { ControllerSmartParking } from './ControllerSmartParking';
export default function RealTimeComponentSmartParking() {
    const container = useRef(null);
    useEffect(()=>{
        if(!container) return;
        const contenedor = container.current;
        const controllerSP = new ControllerSmartParking(
            {
                contenedor:contenedor,
                src :"./SmartParking/SmartParkingCTICFrontis.png" ,
            }
        )
    },[])
    return (
    <div ref={container} className='cont-smart-parking-tr'>
        
    </div>
  )
}
