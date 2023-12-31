import { Punto, mousePosition } from "./PuntosPlano";
import { formatTimestamp } from "./PeticionesComedor";
import { findOptimalK } from "./Kmeans";
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
const colorsRange = ['#cce6cb','#fff3cc','#fecccb'];
//const colorsRange = ['red','blue','green'];
const rangos = [800,1000,2000];
const ncrange = colorsRange.length;
class CanvasControllerComedor{
    constructor({context,canvas,popper,dim={x:0,y:0},pad={x:0,y:0},data=[]}){
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
        this.canvas = canvas;
        this.popper = popper;
    }
    
    graficar(){
        const context = this.context;
        context.clearRect(0,0,this.dim.x,this.dim.y);
        this.getRangeX();
        this.getRangeY();
        this.obtainTransformX();
        this.obtainTransformY();
        //context.save();
        //context.fillStyle = "#fecccb";
        //context.fillRect(this.rangeCanvasX[0],0,this.rangeCanvasX[1],100);
        //context.restore();
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
        this.puntosFlat = this.puntos.flatMap(e=>e);
        this.addAbovePoint();
    }
    addAbovePoint(){
        const canvas = this.canvas;
        const Puntos = this.puntosFlat;
        const popperElement = this.popper;
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
                popperElement.style.display = 'none';
                return;
            }
            Puntos[punto].showPopper(popperElement,this.dim.x);
        }
        
    }
    graficarEjeY(colorLine = '#e5e7eb'){
        const context = this.context;
        const espaceY = this.dim.y - this.pad.y;
        const lx = this.pad.x - 5;
        const rx = this.dim.x - 30;
        const lpos = {x:lx, y: espaceY};
        const rpos = {x:rx, y : espaceY};
        const distX = this.dim.x - this.pad.x;
        const lh = (this.dim.y - this.padTop)/50;
        for(let i=0;i<lh;i++){
            graficarRecta(context,{x:this.pad.x,y:25+i*50},
                {x:this.dim.x-30, y: 25 + i*50},colorLine);
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
    graficarEjeX(colorLine = '#e5e7eb'){
        const context = this.context;
        const espaceX = this.pad.x;
        const ty = 0;
        const by = this.dim.y - 25;
        const tpos = {x:espaceX,y:ty};
        const bpos = {x:espaceX,y:by};
        
        const distY = this.dim.y - this.pad.y;
        const lw = (this.dim.x - this.pad.x)/150;
        
        for(let i = 0;i<lw;i++){
            graficarRecta(context,{x:this.pad.x + i*150 + 50,y:0},
                {x:this.pad.x + i*150 + 50,y:distY},colorLine);
        }
        graficarRecta(context,tpos,bpos,'#7f7f7f',2);
        context.save();
        for(let i = 0;i<lw;i++){
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

class CanvasControllerComedorPromedio extends CanvasControllerComedor{
    graficar(){
        const context = this.context;
        context.clearRect(0,0,this.dim.x,this.dim.y);
        this.getRangeX();
        this.getRangeY();
        this.obtainTransformX();
        this.obtainTransformY();
        this.obtainInvertX();
        this.obtainInvertY();
        this.graficarRangosY();
        this.graficarEjeX('#6662');
        this.graficarEjeY('#6662');
        const puntos = this.data.flatMap(e=>{
            return e.map(s=>{return [s.timestamp,s.value]})
        });
        puntos.sort((a,b)=>a[0]-b[0]);
        const intervals = []
        let cant = 0;
        let timeT = 0;
        let valueT = 0;
        const cantPuntos = puntos.length;
        const fourMinutes = 4*60*1000;
        for(let i = 0;i<cantPuntos;i++){
            cant++;
            timeT += puntos[i][0];
            valueT += puntos[i][1];
            const next = Math.min(i+1,cantPuntos-1)
            if(puntos[next][0]- puntos[i][0]>fourMinutes){
                intervals.push([timeT/cant,valueT/cant]);
                //console.log(cant);
                timeT = 0;
                valueT=0;
                cant = 0;
            }
            if(i==next){
                intervals.push([timeT/cant,valueT/cant]);
                cant = 0;
            }
        }
        const type = 'dioxido_de_carbono';
        const pIntervals = intervals.map(e=>{
            const x = this.transformX(e[0]);
            const y = this.transformY(e[1]);
            return new Punto({x:x,y:y,radio:this.radio,
                        content:{value:e[1].toFixed(2),time:e[0],type:type,idb:"Promedio"}});
        });
        this.puntos = pIntervals;

        plotPuntos(context,pIntervals,'orange',4);
        pIntervals.forEach(e=>{
            e.graficarPunto(context,"orange");
        });
        this.puntosFlat = pIntervals;
        this.addAbovePoint();
    }
    graficarRangosY(){
        const context = this.context;
        let miny = this.rangeY[1];
       
        context.save();
        rangos.forEach((r,i)=>{
            const y1 = this.transformY(miny);
            const y2 = this.transformY(r);
            const pos1 = {x:this.pad.x,y:y1};
            const pos2 = {x:this.dim.x-30,y:y2};
            context.fillStyle= colorsRange[i%ncrange];
            context.fillRect(pos1.x,pos1.y,pos2.x-pos1.x,pos2.y-pos1.y);
            miny = r;
        })
        context.restore();
    }
    setData(data){
        this.data = data;
        this.graficar();
    }
}
class CanvasPlotPuntos extends CanvasControllerComedorPromedio{
    graficar(){
        const context = this.context;
        context.clearRect(0,0,this.dim.x,this.dim.y);
        this.getRangeX();
        this.getRangeY();
        this.obtainTransformX();
        this.obtainTransformY();
        this.obtainInvertX();
        this.obtainInvertY();
        this.graficarRangosY();
        this.graficarEjeX('#6662');
        this.graficarEjeY('#6662');
        console.log(this.rangeY,this.defaultY);
        const puntos = this.data.map((d)=>{
            const x = this.transformX(d.timestamp);
            const y = this.transformY(d.value);
            return new Punto({
                x:x,y:y,radio: this.radio
            })

       })
       plotPuntos(context,puntos,"green",1)
       puntos.forEach(p=>{
        p.graficarPunto(context,'red');
       })

    }
    graficarRangosY(){
        const rangosPlot = [.5,.7,1];
        const context = this.context;
        let miny = this.rangeY[1];
        const maxy = this.rangeY[0]
        context.save();
        rangosPlot.forEach((r,i)=>{
            const y1 = this.transformY(miny);
            const y2 = this.transformY(maxy*r);
            const pos1 = {x:this.pad.x,y:y1};
            const pos2 = {x:this.dim.x-30,y:y2};
            context.fillStyle= colorsRange[i%ncrange];
            context.fillRect(pos1.x,pos1.y,pos2.x-pos1.x,pos2.y-pos1.y);
            miny = maxy*r;
        })
        context.restore();
    }
    getRangeY(){
        if(!this.defaultY){
            return;
        }
        this.padTop= this.padTop===0?20:this.padTop;
        const datavalues = this.data.map(e  => e.value);
        this.rangeY = [Math.min(...datavalues),Math.max(...datavalues)];
        console.log(this.rangeY);
    }
    getRangeX(){
        const datatime = this.data.map(e=> e.timestamp);
        this.rangeX = [Math.min(...datatime),Math.max(...datatime)];
    }
}
export  {CanvasControllerComedor,CanvasControllerComedorPromedio,CanvasPlotPuntos}