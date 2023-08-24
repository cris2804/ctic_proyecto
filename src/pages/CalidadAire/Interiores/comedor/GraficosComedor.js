import React from 'react'
import CanvasComedor from './CanvasComedor'
import { pedirSensoresTratar } from './PeticionesComedor'
import { useState } from 'react'
import { CanvasControllerComedor, CanvasControllerComedorPromedio } from './ControllerGrafico';
import { useEffect } from 'react';
let timer = null;
export default function GraficosComedor({host}) {
    const [newData,setNewData] = useState([]);
    const [type,setType] = useState("dioxido_de_carbono");
    const fetchData = async(type="temperatura") =>{
        const newData1 = await pedirSensoresTratar(type, host);
        setNewData(newData1);
    }
    useEffect(()=>{
        fetchData(type);
        timer = setInterval(()=>{
            fetchData(type);
        },60*1000);
    },[]);   
  return (
    <>
    <div className="container__grafico">
        <CanvasComedor data = {newData} 
            Clase={CanvasControllerComedorPromedio}
            type = {type}/>
    </div>
    <div className="container__grafico">
        <CanvasComedor data={newData} 
            Clase={CanvasControllerComedor}
            type = {type}/> 
            {/*Aqui va gráfica del promedio */}
    </div>
    </>
  )
}
