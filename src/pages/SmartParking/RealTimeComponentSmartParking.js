import React, { useState } from 'react'
import "./SmartParking.css";
import { useRef } from 'react';
import { useEffect } from 'react';
import { ControllerSmartParking } from './ControllerSmartParking';
import io from "socket.io-client"
import { Getip } from "../../server/Getip";
import { endpointTR } from '../../server/MetadataTR';



export default function RealTimeComponentSmartParking({visible}) {
    const container = useRef(null);
    const [hileras,setHileras] = useState({});
    const [controller,setController] = useState(null);
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("id");
    let host = window.location.host; 
    const fetchInicial = async() =>{
        //console.log(`${Getip()}/api/v1/smart-parking/smartparking_va:ctic?last=1`);
        const data = await fetch(`${Getip()}/api/v1/smart-parking/smartparking_va:ctic?last=1`);
        const dataJson = await data.json();
        console.log(dataJson);
        //console.log(dataJson,dataJson[0].estado.split("").map(e=> parseInt(e)))
        setHileras(dataJson[0].estado.split("").map(e=> parseInt(e)));
        
    }

    useEffect(()=>{
        fetchInicial();
        const socket = io(Getip(host), {
            transports: ["websocket"],
          });
          //fetchData();
        socket.on(endpointTR.SmartParking + "ctic",async (data)=>{
            
            //setHileras([0,1,1,0,0,0]);
            const h  = data.estado.value.split("");
            setHileras(h.map(e => parseInt(e)));
            
        });
        
        return () =>{
            socket.disconnect();
        };
        
    },[]);
    const actualizarHilera = async( array )=>{
        if(!controller) return;
        await controller.setArrayState(array);
    }
    const changeHilera = () =>{
        setHileras(Array.from({length:10}, () => (Math.random()>0.5?0:1)));
    }
    useEffect(()=>{
        //console.log(visible);
        if(!controller && visible){
            console.log("creando");
            const cont = new ControllerSmartParking({
                id:"parking-h1",
                contenedor:container.current,
                src: "./SmartParking/SmartParkingCTICFrontis.png",
                cantidad: 13
            });
            setController(cont)
            cont.setArrayState(hileras);
            return;
        }
        actualizarHilera(hileras);
        
    },[hileras,visible])
    return (
    <div ref={container} className='cont-smart-parking-tr'>
        <div className='leyenda-popup-hilos' onClick={changeHilera}>
            <div className='item-legend color-disponible'></div>
            <div>Espacio libre</div>
            <div className='item-legend color-ocupado'></div>
            <div>Espacio ocupado</div>
        </div>
    </div>
  )
}
