import { Punto } from "./PuntosPlano";
import { formatTimestamp } from "./PeticionesComedor";
const transformCords = ([min1,max1],[min2,max2]) =>{
    return (t)=>(t -min1 )/(max1 - min1)*(max2-min2)+ min2;
}
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
const lineColors = ['#56a64b', '#e0b400', '#5794f2', '#fa6400', '#e02f44', '#3274d9', '#a352cc', '#890f02', '#0a437c', '#800080'];
const ncolors = lineColors.length;
class CanvasControllerComedor{
    constructor({context,dim={x:0,y:0},pad={x:0,y:0},data=[]}){
        this.context = context;
        this.dim = dim; //dimension de la grafica incluye[los ejes]
        this.pad = pad; //Referido a los bordes
        this.data = data;
        this.radio = 5;
        this.defaultY = true;
        this.padTop = 0;
        this.transformX = (t)=>{return t};
        this.transformY = (t)=>{return t};
        this.sep = {x:100,y:100};
    }

    graficar(){
        const context = this.context;
        context.clearRect(0,0,this.dim.x,this.dim.y);
        this.getRangeX();
        this.getRangeY();
        this.obtainTransformX();
        this.obtainTransformY();
        this.obtainInvertX();
        this.obtainInvertY();
        this.getPuntos();
        this.graficarEjeX();
        this.graficarEjeY();
        this.puntos.forEach((sensorData,i)=>{
            plotPuntos(context,sensorData,lineColors[i%ncolors],1);
        })
        this.puntos.forEach((sensor,i)=>{
            sensor.forEach(sp => {
                sp.graficarPunto(context,lineColors[i%ncolors]);
            })
        });
    }
    graficarEjeY(){
        const context = this.context;
        const espaceY = this.dim.y - this.pad.y;
        const lx = this.pad.x - 5;
        const rx = this.dim.x - 30;
        const lpos = {x:lx, y: espaceY};
        const rpos = {x:rx, y : espaceY};
        const distX = this.dim.x - this.pad.x;
        const lh = (this.dim.y - this.padTop)/50;
        for(let i=0;i<lh;i++){
            graficarRecta(context,{x:this.pad.x,y:25+i*50},{x:this.dim.x-30, y: 25 + i*50},'#e5e7eb');
        }
        graficarRecta(context,lpos,rpos,'#7f7f7f',3);
        context.save();
        for(let i=0;i<lh-1;i++){
            const posy = 25 + i*50;
            const posx = this.pad.x/2;
            const valY = this.transformInvertY(posy).toFixed(2);
            context.font = '15px Arial';
            context.textAlign = 'center';
            context.textBaseline = 'center';
            context.fillText(valY,posx,posy+5);
        }
        context.restore();
    }
    graficarEjeX(){
        const context = this.context;
        const espaceX = this.pad.x;
        const ty = 0;
        const by = this.dim.y - 25;
        const tpos = {x:espaceX,y:ty};
        const bpos = {x:espaceX,y:by};
        
        const distY = this.dim.y - this.pad.y;
        const lw = (this.dim.x - this.pad.x)/150;
        console.log(lw,"asdfsdafasdf");
        
        for(let i = 0;i<lw-1;i++){
            graficarRecta(context,{x:this.pad.x + i*150 + 50,y:0},{x:this.pad.x + i*150 + 50,y:distY},'#e5e7eb');
        }
        graficarRecta(context,tpos,bpos,'#7f7f7f',2);
        context.save();
        for(let i = 0;i<lw-1;i++){
            const posx = this.pad.x + i*150 + 50;
            const valx = Math.floor(this.transformInvertX(posx));
            const pos = {x:posx, y: this.dim.y - this.pad.y +5};
            context.font = '15px Arial';
            context.textAlign = 'center';
            context.textBaseline = 'top';
            context.fillText(formatTimestamp(valx),pos.x,pos.y);
        }
        context.restore();
    }
    getRangeY(){
        if(!this.defaultY){
            return;
        }
        this.padTop= this.padTop===0?20:this.padTop;
        const datavalues = this.data.flatMap(e =>e.map(sv => sv.value));
        this.rangeY = [Math.min(...datavalues),Math.max(...datavalues)];
    }
    getRangeX(){
        const datatime = this.data.flatMap(e => e.map(s => s.timestamp));
        this.rangeX = [Math.min(...datatime),Math.max(...datatime)];
    }
    obtainTransformX(){
        const padX = this.pad.x ;
        const distX = this.dim.x - padX ;
        this.rangeCanvasX = [padX,distX];
        this.transformX = transformCords(this.rangeX,this.rangeCanvasX);
    }
    obtainInvertX(){
        const padX = this.pad.x ;
        const distX = this.dim.x - padX ;
        this.rangeCanvasX = [padX,distX];
        this.transformInvertX = transformCords(this.rangeCanvasX,this.rangeX);
    }
    obtainTransformY(){
        const padTop = this.padTop;
        const distY = this.dim.y - this.pad.y;
        this.rangeCanvasY = [padTop,distY];
        this.transformY  = transformCords(this.rangeY.reverse(),this.rangeCanvasY );
    }
    obtainInvertY(){
        const padTop = this.padTop;
        const distY = this.dim.y - this.pad.y;
        this.rangeCanvasY = [padTop,distY];
        this.transformInvertY  = transformCords(this.rangeCanvasY,this.rangeY);

    }
    getPuntos(){
        const type = 'dioxido_de_carbono';
        this.puntos =  this.data.map(sensorData =>{
            return sensorData.map(sd =>{
                const x = this.transformX(sd.timestamp);
                const y = this.transformY(sd.value );
                return new Punto({x:x,y:y,radio:this.radio,
                    content:{value:sd.value,time:sd.timestamp,type:type,idb:sd.idb}});
            })
        });
        return this.puntos;
    }
    setRangeY(range = [0,0]){
        this.defaultY = false;
        this.rangeY = range
    };
    setMinX(minx) {this.minx = minx}
    setMaxX(maxx) {this.maxx = maxx}
    setMinY(miny) {this.miny = miny}
    setMaxY(maxy) {this.maxy = maxy}
    setData(data) {
        this.data = data
        this.graficar();
    }
}
export  {CanvasControllerComedor}