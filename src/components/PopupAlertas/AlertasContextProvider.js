import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { Getip, GetipTR } from '../../server/Getip';
import { io } from 'socket.io-client';
import { data } from '../../pages/Senasa/test/data';

const ContextAlerta = createContext();

export const AlertaProvider = ({children}) =>{
    const [sensores,setSensores] = useState([]);
    const [sensor,setSensor] = useState({});
    const addSensores = (new_sensor) =>{
        setSensores(prev =>[
            ...sensores,new_sensor
        ])
    }
    const fecthIncial =  async () =>{
        const data = await fetch(Getip() + '/api/v1/sensores');
        const dataJson = await data.json()
        //const alertasFetch = dataJson.filter(sensor =>{
        //    return sensor.estado == 2;
        //})
        console.log(dataJson)
        setSensores(dataJson);
    }
    const actualizarSensorEvent = (data) =>{
        const copySensores = [...sensores];
        console.log(copySensores,sensores,"xDDDD");
        const indexSensor = copySensores.findIndex((sen)=> sen.sensor_id === data.sensor_id);
        if(indexSensor !== -1){
            console.log(copySensores[indexSensor],data)
            copySensores[indexSensor].estado = data.estado;
        }else{
            console.log(data);
            console.log("Se recibio un sensor extraño");
        }
        console.log(copySensores);
        setSensores(copySensores);
    }
    useEffect(()=>{
        fecthIncial();
        const socket = io(GetipTR(),{
            transports: ["websocket"],
        })
        socket.on("sensor-change-state-alert",  (data)=>{
            //console.log(data);
            setSensor(data);

        })
        return () =>{
            socket.disconnect();
        };
    },[])
    useEffect(()=>{
        if(sensor?.sensor_id){
            console.log(sensor)
            actualizarSensorEvent(sensor);
        }
    },[sensor])
    return (
        <ContextAlerta.Provider value = {{sensores}}>
            {children}
        </ContextAlerta.Provider>
    )
}

export const useContextAlert = () =>{
    return useContext(ContextAlerta);
}

