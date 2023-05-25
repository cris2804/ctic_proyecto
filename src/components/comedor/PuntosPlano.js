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
    constructor({x,y,radio,content}){
        this.x = x-radio;
        this.y = y-radio;
        this.radio = radio;
        this.content = content
    }
    graficarPunto(context,color){
        context.save();
        context.fillStyle = color;
        context.translate(this.x,this.y);
        context.beginPath();
        context.arc(this.radio,this.radio,this.radio,0,2*Math.PI);
        context.fill();
        context.lineWidth = 3;
        context.strokeStyle = 'black';
        context.beginPath();
        context.arc(this.radio,this.radio,this.radio/2,0,2*Math.PI);
        context.stroke();
        
        context.restore();
    }
    isTouch(pos){
        const xValid = (pos.x - this.x > 0 )&(pos.x - this.x < 2*this.radio);
        const yValid = (pos.y - this.y > 0 )&(pos.y - this.y < 2*this.radio);
        return xValid & yValid;
    }
    showPopper(popper,wc,content){
        popper.style.display = "block";
        popper.innerHTML = ReactDOMServer.renderToString(<Popper content={content}/>);
        const {width,height} = popper.getBoundingClientRect();
        let npxPopper = this.x-width/2 + this.radio;
        let npyPopper = this.y - height;
        if(npxPopper<0) npxPopper = 0;
        if(this.x +width/2>wc ) npxPopper =wc - width;
        if(npyPopper<0) npyPopper = this.y + this.radio*2;
        popper.style.background = "green";
        popper.style.left = `${npxPopper}px`;
        popper.style.top = `${npyPopper}px`;
    }

}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const crearPuntos = (width,heigth,cant)=>{
    const puntos = [];
    for(let i = 0;i<cant;i++){
        const x = getRandomInt(50,width-50);
        const y = getRandomInt(50,heigth-50);
        puntos.push(new Punto({x:x,y:y,radio:20,content:'punto' + i}));
    }
    return puntos;
}
export {crearPuntos,mousePosition};