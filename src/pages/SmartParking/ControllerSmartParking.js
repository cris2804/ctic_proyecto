class ControllerSmartParking{
    constructor({contenedor,src,props}){
        this.contenedor = contenedor;
        this.src = src;
        this.props = props;
        this.iniciar();
        this.chargeImage();
    }
    iniciar(){
        const canvas = document.createElement("canvas");
        const {width,height} = this.contenedor.getBoundingClientRect();
        canvas.height = height;
        canvas.width = width;
        this.contenedor.append(canvas);
        this.width = width;
        this.height = height;
        this.canvas = canvas;
        const context = canvas.getContext("2d");
        this.context = context;
    }
    chargeImage(){
        const image = new Image();
        image.onload = () =>{
            const wi = image.width;
            const hi = image.height;
            const dw = Math.max(0,wi - this.width);
            const dh = Math.max(0,hi - this.height);
            this.dw = dw;
            this.dh = dh;
            this.context.drawImage(image, 0,0,wi-Math.min(dw*0.5,0),hi-Math.min(0,dw*0.5),-dw*0.5,-dh*0.5,wi,hi);
            this.iniciarTR();
        }
        image.src = this.src;
    }
    iniciarTR(){
        const n = 13;
        for(let i = 0;i<n;i++){
            let color = Math.random()>0.5? "green":"red";
            this.context.fillStyle = color;
            this.context.fillRect(435-this.dw*0.5 + i*20,400-this.dh*0.5 ,20,50);
            this.context.strokeRect(435-this.dw*0.5 + i*20,400-this.dh*0.5 ,20,50);
            
        }
    }
}
export {ControllerSmartParking};