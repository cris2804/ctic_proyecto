import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'

import "./canvasGrafico.css";
import { getMetadataSensor,formatMetadataSensor } from './MetadaGrafico';


const stylePopper = {
  pointerEvents:'none',
  position:'absolute',
  display:'none'
}

const compararObject = (a,b,atributo='x')=>{
  return a[atributo] - b[atributo];
};

let grafico = null;
export default function CanvasComedor({data,Clase,type}) {
  const graficoCanvas = useRef(null);
  const divCanvas = useRef(null);
  const popperElement = useRef(null);
  useEffect(()=>{
    if(!graficoCanvas || !popperElement) return;
    const divCtn = divCanvas.current;
    const {width,height} = divCtn.getBoundingClientRect();
    const canvas = graficoCanvas.current;
    canvas.height = height;
    canvas.width = width;
    const context = canvas.getContext("2d");
    context.fillStyle = "#666666";
    grafico = new Clase({context:context,canvas:graficoCanvas.current,
                  popper:popperElement.current,
                  dim:{x:width,y:height},pad : {x:60,y:30}});
    grafico.setRangeY([0,2000]);
    grafico.setData(data);
  },[data]);
  
  return (
    <div className='ctn-grafico'>
      <div className='ctn-container-name-y txt-grafico'>{formatMetadataSensor(getMetadataSensor(type||"temperatura"))}</div>
      <div className='ctn-container-grafico'  ref={divCanvas}>
          <canvas ref={graficoCanvas}></canvas>
          <div ref={popperElement} style={stylePopper}>hola</div>
      </div>
      <div className='ctn-container-name-x txt-grafico'>Tiempo</div>
    </div>
  )
}
