import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'; //Legend,
import { pedirSensores,comedirIds } from './PeticionesComedor';
import { useState } from 'react';
import { useEffect } from 'react';

const styleContainer = {
    width:'90%',
    height:'50vh',
    position:'relative'
}
/*const styleFondo = {
    //background: "rgb(245,255,0)",
    //background: "linear-gradient(0deg, rgba(245,255,0,0.6) 0%, rgba(245,255,0,0.6) 20%, rgba(29,201,26,0.6) 50%, rgba(134,66,66,0.6) 70%, rgba(255,0,0,0.6) 100%)",
    width:'calc(100% - 110px)',height:'calc(100% - 40px)',position:'absolute',
    top:5,right:30
}*/
const lineColors = ['#8884d8', '#82ca9d', '#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#00ffff', '#ffff00', '#ffa500', '#800080'];
let timer;
export default function GraficoComedor() {
    const [data, setData] = useState([]);
    const [type, setType] = useState("humedad");
    const fetchData = async (type = "humedad") => {
        try {
            const newData = await pedirSensores(type);
            
            setData(newData);
            
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };
    useEffect(()=>{
        console.log("Hola");
        fetchData(type);
        timer = setInterval(async()=>{
            fetchData(type);
        },600000);
        return () =>{clearInterval(timer)};
    },[type]);
    
    
  return (
    <>
    <div>
        <button onClick={()=>{setType("humedad")}}>Humedad</button>
        <button onClick={()=>{setType("dioxido_de_carbono")}}>C02</button>
        <button onClick={()=>{setType("temperatura")}} >Temperatura</button>
    </div>
    <div style={styleContainer}>
        <ResponsiveContainer width="100%" height="100%" >
        <LineChart
          width={'100%'}
          height={'100%'}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          
          {comedirIds.map((e,index) =>{
            return <Line type="monotone" key={"line " + index} dataKey={e.toString()} stroke={lineColors[index % lineColors.length]} strokeWidth={2}/>
          })}
          
        </LineChart>
      </ResponsiveContainer>
    </div>
    </>
  )
}
//<div style={styleFondo}></div>

