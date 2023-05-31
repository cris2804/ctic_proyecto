import { Punto } from "./PuntosPlano";
const transformCords = ([min1,max1],[min2,max2]) =>{
    return (t)=>(t -min1 )/(max1 - min1)*(max2-min2)+ min2;
}
class CanvasControllerComedor{
    constructor({context,dim={x:0,y:0},pad={x:0,y:0},data=[]}){
        this.context = context;
        this.dim = dim;
        this.pad = pad;
        this.data = data;
        this.radio = 5;
        this.default = true;
        this.padTop = 0;
        this.transformX = (t)=>{return t};
        this.transformY = (t)=>{return t};
    }

    graficar(){
        const context = this.context;

    }
    getRangeY(){
        if(!this.default){
            this.padTop = 20;
            this.rangeY =  [this.miny,this.maxy];
        }
        const datavalues = this.data.flatMap(e =>e.map(sv => sv.value));
        this.rangeY = [Math.min(...datavalues),Math.max(...datavalues)];
    }
    getRangeX(){
        const datatime = this.data.flatMap(e => e.map(s => s.timestamp));
        this.rangeX = [Math.min(...datatime),Math.max(...datatime)];
    }
    obtainTransformX(){
        const padX = this.pad.x;
        const distX = this.dim.x - padX;
        this.transformX = transformCords(this.rangeX,[padX,distX])
    }
    getPuntos(){
        const type = 'dioxido_de_carbono';

        return this.data.map(sensorData =>{
            return sensorData.map(sd =>{
                const x = this.transformX(sd.timestamp);
                const y = this.transformY(sd.value );
                return new Punto({x:x,y:y,radio:5,
                    content:{value:sd.value,time:sd.timestamp,type:type,idb:sd.idb}});
            })
        });
    }
    setRangeY(range = [0,0]){this.rangeY = range};
    setMinX(minx) {this.minx = minx}
    setMaxX(maxx) {this.maxx = maxx}
    setMinY(miny) {this.miny = miny}
    setMaxY(maxy) {this.maxy = maxy}
    setData(data) {this.data = data}
}
export  {CanvasControllerComedor}