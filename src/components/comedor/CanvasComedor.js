import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'

import "./canvasGrafico.css";
import { crearPuntos,mousePosition,Punto} from './PuntosPlano';
import { pedirSensoresTratar,formatTimestamp } from './PeticionesComedor';
import { CanvasControllerComedor } from './ControllerGrafico';
import { getMetadataSensor,formatMetadataSensor } from './MetadaGrafico';
import { useState } from 'react';
import { Getip } from '../../server/Getip';



const styleContainer = {
  backgroundColor:'#fff5',
  border:'solid 2px black',
  height:400,
}
const stylePopper = {
  pointerEvents:'none',
  position:'absolute',
  display:'none'
}
const lineColors = ['#56a64b', '#e0b400', '#5794f2', '#fa6400', '#e02f44', '#3274d9', '#a352cc', '#890f02', '#0a437c', '#800080'];
const ncolors = lineColors.length;
const graficarRecta = (context,pos1,pos2,color="red",grosor = 2)=>{
  context.save();
  context.strokeStyle = color;
  context.lineWidth = grosor;
  context.beginPath();
  context.moveTo(pos1.x,pos1.y);
  context.lineTo(pos2.x,pos2.y);
  context.stroke();
  context.restore();

}
const plotPuntos = (context,puntos,color="red",grosor = 2) =>{
  if(puntos.length < 1) return;
  context.save();
  context.strokeStyle = color;
  context.lineWidth = grosor;
  context.beginPath();
  context.moveTo(puntos[0].x,puntos[0].y);
  for(let i = 0;i<puntos.length;i++){
    context.lineTo(puntos[i].x, puntos[i].y);
  }
  context.stroke();
  context.restore();
}
const compararObject = (a,b,atributo='x')=>{
  return a[atributo] - b[atributo];
};
const transformCords = ([min1,max1],[min2,max2], t) =>{
  return(t -min1 )/(max1 - min1)*(max2-min2)+ min2;
}
let timer;
let grafico = null;
export default function () {
  const graficoCanvas = useRef(null);
  const [type,setType] = useState("dioxido_de_carbono");
  let host = window.location.host;

  const divCanvas = useRef(null);
  //const [context1,setContext1] = useContext(null);
  const [graph,setGraph] = useState(null);
  const popperElement = useRef(null);
  const fetchData = async (context,dimx,dimy,type = "temperatura") => {
    try {
      const metadataSensor = getMetadataSensor(type);
      const rangoY = metadataSensor?.rangoY;
      const newData = await pedirSensoresTratar(type,Getip(host));
      grafico.setRangeY([0,2000]);
      grafico.setData(newData);
      
      
      const Puntos = grafico.puntos.flatMap(e => e);
      const canvas = graficoCanvas.current;
      
      canvas.onmousemove = (evt)=>{
        const pos = mousePosition(canvas,evt);
        let punto = -1;
        for(let i=0;i<Puntos.length;i++){
          if(Puntos[i].isTouch(pos,50)){
              punto = i;
              break;
          }
        }
        if(punto === -1) {
            popperElement.current.style.display = 'none';
            return;
        }
        Puntos[punto].showPopper(popperElement.current,dimx);
      } 
      
      
    } catch (error) {
      console.log('Error fetching data:', error);
    }
};
  useEffect(()=>{
    if(!graficoCanvas) return;
    const divCtn = divCanvas.current;
    const {width,height} = divCtn.getBoundingClientRect();
    const canvas = graficoCanvas.current;
    canvas.height = height;
    canvas.width = width;
    const context = canvas.getContext("2d");
    context.fillStyle = "#666666";
    setGraph(context);
    grafico = new CanvasControllerComedor({context:context,dim:{x:width,y:height},pad : {x:60,y:30}});
    fetchData(context,width,height,type);
    timer = setInterval(()=>{
      fetchData(context,width,height,type);

      console.log("Hola");
    },60*1000)
    return ()=>{
      clearInterval(timer);
    }
  },[]);
  
  return (
    <div className='ctn-grafico'>
      <div className='ctn-container-name-y txt-grafico'>{formatMetadataSensor(getMetadataSensor(type))}</div>
      <div className='ctn-container-grafico'  ref={divCanvas}>
          <canvas ref={graficoCanvas}></canvas>
          <div ref={popperElement} style={stylePopper}>hola</div>
      </div>
      <div className='ctn-container-name-x txt-grafico'>Tiempo</div>
    </div>
  )
}
/**
     //const Puntos = crearPuntos(width,height,20,3);
    //Puntos.sort(compararObject);
    //plotPuntos(context,Puntos, 'cyan',2);
    //const Puntos1 = crearPuntos(width,height,20,3);
    //Puntos1.sort(compararObject);
    
    //plotPuntos(context,Puntos1, 'green',2);
    //Puntos1.forEach((p)=>{
    //  p.graficarPunto(context,'yellow');
    //});
    //Puntos.forEach((p)=>{
    //  p.graficarPunto(context,'blue');
    //});
 */