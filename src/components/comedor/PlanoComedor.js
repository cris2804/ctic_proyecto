import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { crearPuntos,mousePosition } from './PuntosPlano';

const contenedorPlano = {
    width:'100%',
    height:'80vh',
    background: 'url(plano.png)',
    backgroundSize: '100% 100%',
    //backgroundRepeat:'no-repeat',
    position:'relative',
}
const stylePopper = {
  
    position:'absolute',
    display:'none'
}


function PlanoComedor() {
    
    const contenedorCanvas = useRef(null);
    

    const canvasElement = useRef(null);
    const popperElement = useRef(null);
    useEffect(()=>{
        if(!contenedorCanvas) return;
        const divRoot =  contenedorCanvas.current;
        const canvas = canvasElement.current;
        
        const {width,height} = divRoot.getBoundingClientRect();
        const Puntos = crearPuntos(width,height,10);
        console.log(Puntos);
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d");
        //context.fillStyle = 'black';
        //context.fillRect(0,0,width,height);

        Puntos.forEach((p)=>{
            p.graficarPunto(context,'red');
        });
        
        canvas.onmousemove= (evt) =>{
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
            Puntos[punto].showPopper(popperElement.current,width);
        }
        
        

        console.log(divRoot.getBoundingClientRect());
    },[])
  return (
    <div style={contenedorPlano} ref={contenedorCanvas}>
        
        <canvas ref = {canvasElement}></canvas>
        <div ref={popperElement} style={stylePopper}>hola</div>
        
    </div>
  )
}
export default PlanoComedor;
//<canvas style={canvasBackStyle} ref = {canvasBack}></canvas>
/**
 const image = new Image();
        const context1 = canvasBack.current.getContext("2d");
        image.onload = () =>{
            
            context1.drawImage(image,0,0,height,width);
        }
        image.src = 'plano.png';
 */