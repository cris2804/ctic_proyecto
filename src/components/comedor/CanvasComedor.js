import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'

import "./canvasGrafico.css";
import { crearPuntos,mousePosition,Punto} from './PuntosPlano';
import { pedirSensoresTratar,formatTimestamp } from './PeticionesComedor';
import { CanvasControllerComedor } from './ControllerGrafico';
import { getMetadataSensor,formatMetadataSensor } from './MetadaGrafico';
import { useState } from 'react';



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

  const divCanvas = useRef(null);
  //const [context1,setContext1] = useContext(null);
  const [graph,setGraph] = useState(null);
  const popperElement = useRef(null);
  const fetchData = async (context,dimx,dimy,type = "temperatura") => {
    try {
      const metadataSensor = getMetadataSensor(type);
      const rangoY = metadataSensor?.rangoY;
      const padX = 60;
      const padY = 30;
      const newData = await pedirSensoresTratar(type);
      const datatime = newData.flatMap(e => e.map(s => s.timestamp));
      const datavalues = newData.flatMap(e =>e.map(sv => sv.value));
      
      
      const minx = Math.min(...datatime);
      const maxx = Math.max(...datatime);
      
      //const miny = Math.min(...datavalues);
      //const maxy = Math.max(...datavalues);
      let miny;
      let maxy;
      let padTop = 0;
      if(rangoY){
        miny = rangoY[0];
        maxy = rangoY[1];
      }else{
        miny = Math.min(...datavalues);
        maxy = Math.max(...datavalues);
        padTop = 50;
      }
      
      console.log("MM :",minx,maxx, maxx-minx);
      const distX = dimx - padX;
      const distY = dimy - padY;
      
      const transData = newData.map(sensorData =>{
        return sensorData.map(sd =>{
          const x = transformCords([minx,maxx],[padX+10,distX+10],sd.timestamp);
          const y = transformCords([maxy,miny],[padTop,distY-padTop],sd.value );
          return new Punto({x:x,y:y,radio:5,content:{value:sd.value,time:sd.timestamp,type:type,idb:sd.idb}});
        })
      });
      context.clearRect(0,0,dimx,dimy);
      graficarRecta(context,{x:padX-5,y:dimy-padY},{x:dimx-30,y:dimy-padY},'#7f7f7f',3);
      graficarRecta(context,{x:padX,y:0},{x:padX,y:dimy-25},'#7f7f7f',2);
      const lw = dimx/150;
      for(let i=0;i<lw-1;i++){
        graficarRecta(context,{x:padX + i*150 + 50,y:0},{x:padX + i*150 + 50,y:dimy-padY},'#e5e7eb');
      }
      const lh = dimy/50;
      for(let i=0;i<lh-1;i++){
        graficarRecta(context,{x:padX,y:25 + i*50 },{x:dimx-30,y:25+i*50},'#e5e7eb');
      }


      transData.forEach((sensorData,i)=>{
        //lineColors[i%ncolors]
        plotPuntos(context,sensorData,lineColors[i%ncolors],1);
      });
      transData.forEach((sensorData,i)=>{
        const colorSen = lineColors[i%ncolors]
        sensorData.forEach(sp =>{
          sp.graficarPunto(context,colorSen);
        });
      });
      
      const dx = (maxx - minx)/lw;
      context.save();
      for(let i=0;i<lw-1;i++){
        const posx = padX + i*150 +50;
        const valx = Math.floor(transformCords([padX+10,distX+10],[minx,maxx],posx));
        const pos = {x:posx,y:dimy-padY+5};
        context.font = '15px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'top';
        context.fillText(formatTimestamp(valx),pos.x,pos.y);
        
      }
      context.restore();
     
      context.save();
      for(let i=0;i<lh-1;i++){
        const posy = 25 + i*50;
        const posx = padX/2;
        const valY = transformCords([padTop,distY-padTop],[maxy,miny],posy ).toFixed(2);
        context.font = '15px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'center';
        context.fillText(valY,posx,posy+5);
      }
      context.restore();
      
      const Puntos = transData.flatMap(e => e);
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
      //console.log(allPoints); 
      
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
    //context.fillRect(0,0,width,height);
    
    setGraph(context);
    grafico = new CanvasControllerComedor({context:context,dim:{x:width,y:height},pad : {x:60,y:30}});
    console.log(grafico);
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