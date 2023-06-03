import Popper from "./Popper";
import ReactDOMServer from 'react-dom/server';
function mousePosition(element,evt){
    const clientRect = element.getBoundingClientRect();
    return{
        x: Math.round(evt.clientX - clientRect.left),
        y: Math.round(evt.clientY- clientRect.top)
    }
}
class Punto{
    constructor({x,y,radio=5,content=''}){
        this.x = x;
        this.y = y;
        this.radio = radio;
        this.content = content
    }
    graficarPunto(context,color){
        context.save();
        context.fillStyle = color;
        context.translate(this.x,this.y);
        context.beginPath();
        context.arc(0,0,this.radio,0,2*Math.PI);
        context.fill();
        //context.lineWidth = 1;
        //context.strokeStyle = 'black';
        //context.beginPath();
        //context.arc(0,0,this.radio,0,2*Math.PI);
        //context.stroke();
        
        context.restore();
    }
    isTouch(pos){
        const xValid = (pos.x - (this.x-this.radio)  > 0 )&(pos.x - (this.x-this.radio) < 2*this.radio +5);
        const yValid = (pos.y - (this.y - this.radio) > 0 )&(pos.y - (this.y - this.radio) < 2*this.radio +5);
        return xValid & yValid;
    }
    showPopper(popper,wc,content){
        popper.style.display = "block";
        popper.innerHTML = ReactDOMServer.renderToString(
                            <Popper type={this.content.type}
                            time = {this.content.time}
                            value= {this.content.value}
                            idb= {this.content.idb}
                            />);
        const {width,height} = popper.getBoundingClientRect();
        let npxPopper = this.x;
        let npyPopper = this.y - height;
        if(npxPopper<0) npxPopper = 0;
        if(this.x +width/2>wc ) npxPopper =wc - width;
        if(npyPopper<0) npyPopper = this.y + this.radio*1;
        popper.style.background = "green";
        popper.style.left = `${npxPopper}px`;
        popper.style.top = `${npyPopper}px`;
    }

}
class GraficadorLineas{
    constructor(context){
        this.context = context;
    }
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const crearPuntos = (width,heigth,cant,radio=20)=>{
    const puntos = [];
    for(let i = 0;i<cant;i++){
        const x = getRandomInt(50,width-50);
        const y = getRandomInt(50,heigth-50);
        puntos.push(new Punto({x:x,y:y,radio:radio,content:'punto' + i}));
    }
    return puntos;
}
export {crearPuntos,mousePosition,Punto};