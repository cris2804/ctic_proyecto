import { Punto } from "./PuntosPlano";
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
        this.getRangeX();
        this.getRangeY();
        this.obtainTransformX();
        this.obtainTransformY();
        this.getPuntos();
        this.graficarEjeX();
        this.graficarEjeY();
        this.puntos.forEach((sensor,i)=>{
            sensor.forEach(sp => {
                sp.graficarPunto(context,lineColors[i%ncolors]);
            })
        });
        //console.log(this.rangeX);
        //const x = this.transformX(this.rangeX[0]);
        //const y = this.transformY(this.rangeY[0]);
        //const point = new Punto({x:x,y:100+y});
        //console.log(x,y)
        //point.graficarPunto(context,'blue');
        //console.log(point);
    }
    graficarEjeY(){
        const context = this.context;
        const espaceY = this.dim.y - this.pad.y;
        const lx = this.pad.x - 5;
        const rx = this.dim.x - 30;
        const lpos = {x:lx, y: espaceY};
        const rpos = {x:rx, y : espaceY};
        graficarRecta(context,lpos,rpos,'#7f7f7f',3);
        
    }
    graficarEjeX(){
        const context = this.context;
        const espaceX = this.pad.x;
        const ty = 0;
        const by = this.dim.y - 25;
        const tpos = {x:espaceX,y:ty};
        const bpos = {x:espaceX,y:by};
        graficarRecta(context,tpos,bpos,'#7f7f7f',2);
        const lw = (this.dim.y - this.pad.y)/100;
        
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
    obtainTransformY(){
        const padTop = this.padTop;
        const distY = this.dim.y - this.pad.x;
        this.rangeCanvasY = [padTop,distY];
        this.transformY  = transformCords(this.rangeY.reverse(),this.rangeCanvasY );
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