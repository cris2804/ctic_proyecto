class ControllerSmartParking{
    constructor({id,contenedor,src,cantidad,estado_inicial,props}){
        this.id = id;
        this.contenedor = contenedor;
        this.padre = contenedor.parentNode;
        this.src = src;
        this.props = props;
        this.scala = 1;
        this.estado_inicial = estado_inicial || [];
        this.cantidad = cantidad || 0;
        this.iniciar();
        
    }
    async iniciar(){
        console.log(this.contenedor.getBoundingClientRect(),this.padre.getBoundingClientRect());
        let canvas = null;
        if(document.getElementById(this.id)){
            canvas = document.getElementById(this.id);
        }else{
            canvas = document.createElement("canvas");
            canvas.id = this.id;
            canvas.className ="canvas-container-temp"
        }
        
        
        const {width,height} = this.padre.getBoundingClientRect();
        canvas.width = width*0.8;
        canvas.height = height*0.9;
        this.contenedor.appendChild(canvas);
        this.width = width*0.8;
        this.height = height*0.9;
        this.canvas = canvas;
        const context = canvas.getContext("2d");
        this.context = context;
        await this.chargeImage();
        
    }
    graficarFondo(image){
        const wi = image.width;
        const hi = image.height;


        const dw = wi - this.width;
        const dh = hi - this.height;
        const sw = this.width/wi;
        const sh = this.height/hi;
        if(dw < 0 || dh < 0){
            const scala = Math.min(sw, sh);
            const nw = wi*scala;
            const nh = hi*scala;
            console.log(nw,hi)

            this.scala = scala;
            this.contenedor.style.width = `${nw}px`;
            this.contenedor.style.height = `${nh}px`;
            this.canvas.width =nw;
            this.canvas.height = nh;

            this.context.drawImage(image, 0,0,wi,hi,0,0,wi*scala,hi*scala);
            this.dw = 0;
            this.dh = 0;
            
            //this.iniciarTR();
            //this.setArrayState(this.estado_inicial);
            
        }else{
            console.log(dw,dh);

            this.dw = dw;
            this.dh = dh;
            
            
            this.context.drawImage(image, 0,0,wi-Math.min(dw*0.5,0),hi-Math.min(0,dw*0.5),-dw*0.5,-dh*0.5,wi,hi);
            //this.iniciarTR();
            //this.setArrayState(this.estado_inicial);
        }
    }
    chargeImage(){
        console.log(this.image);
        if(this.image){
            console.log("holaXD");
            //this.graficarFondo(this.image);
            return;
        }
        return new Promise((resolve,reject)=>{
            const image = new Image();
            image.onload = () =>{
                this.graficarFondo(image)
                this.image = image;
                this.activo = true;
                this.iniciarTR();
                resolve();
            };
            image.onerror = (error) => {
                reject(error); // Rechazamos la promesa en caso de error al cargar la imagen
            };
            image.src = this.src;
        })
            
    }
    resizeContainer(){

    }
    async iniciarTR(){
        console.log("Escala: ", this.scala);
        const n = this.cantidad;
        //this.context.fillRect(0,0,100,100);
        //console.log(this.context);
        for(let i = 0;i<n;i++){
            //let color = Math.random()>0.5? "#c3e7ff":"#fa8071";
            const color = "#fa8071";
            this.context.fillStyle = color;
            const x = (435-this.dw*0.5 + i*20)*this.scala;
            const y = (400-this.dh*0.5)*this.scala;
            this.context.fillRect(x, y,20*this.scala,50*this.scala);
            this.context.strokeStyle = "#444";
            this.context.strokeRect(x, y,20*this.scala,50*this.scala);
            
        }
    }
    async setArrayState(array){
        //console.log(this.promesa);
        await this.chargeImage();

        //        this.graficarFondo(this.image);
        
        //console.log("hola",array,this.scala,"XD",this.activo);
        this.fillStyle = "blue";
        //this.context.fillRect(0,0,100,100);
        //console.log(this.context);
        for(let i = 0;i<Math.min(array.length,this.cantidad);i++){
            console.log("XD1",array[i]);
            let color = (array[i]==0? "#c3e7ff":"#fa8071");
            this.context.fillStyle = color;
            const x = (435-this.dw*0.5 + i*20)*this.scala;
            const y = (400-this.dh*0.5)*this.scala;
            this.context.fillRect(x, y,20*this.scala,50*this.scala);
            this.context.strokeStyle = "#444";
            this.context.strokeRect(x, y,20*this.scala,50*this.scala);
            
        }
    }
}
export {ControllerSmartParking};