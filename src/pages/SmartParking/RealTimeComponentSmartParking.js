import React from 'react'
import "./SmartParking.css";
import { useRef } from 'react';
import { useEffect } from 'react';
import { ControllerSmartParking } from './ControllerSmartParking';
import io from "socket.io-client"
import { Getip } from "../../server/Getip"
export default function RealTimeComponentSmartParking() {
    const container = useRef(null);
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("id");
    let host = window.location.host; 

    useEffect(()=>{
        if(!container) return;
        const contenedor = container.current;
        const controllerSP1 = new ControllerSmartParking(
            {
                contenedor:contenedor,
                src :"./SmartParking/SmartParkingCTICFrontis.png" ,
            }
        )   
        let  i = 0;
        const socket = io(Getip(host), {
            transports: ["websocket"],
          });
          //fetchData();
          
          socket.on("smartparking_va/smartparking_va:ctic",async (data)=>{
            const controllerSP = new ControllerSmartParking(
                {
                    contenedor:contenedor,
                    src :"./SmartParking/SmartParkingCTICFrontis.png" ,
                    estado_inicial: data.estado.value
                }
            )       
            controllerSP.setArrayState(data.estado.value);
            console.log(data.estado.value)
            
          });
          return () =>{
            socket.disconnect();
          };
    },[])
    return (
    <div ref={container} className='cont-smart-parking-tr'>
        <div className='leyenda-popup-hilos'>
            <div className='item-legend color-disponible'></div>
            <div>Espacio libre</div>
            <div className='item-legend color-ocupado'></div>
            <div>Espacio ocupado</div>
        </div>
    </div>
  )
}
