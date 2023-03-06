import './css/Detalles.css';
import happy from './images/happy.png';
import cloud from './images/cloud.png';
import sun from './images/sun.png';

const nombrelugar = (e) =>{
    if(e === "ca-ctic") return "Calidad del Aire (CTIC)";
    else if(e === "ca-puerta5") return "Calidad del Aire (PUERTA 5)";
    else if(e === "ca-puerta3") return "Calidad del Aire (PUERTA 3)";
    else if(e === "cv-comedor") return "Carga Viral (Comedor Universitario)";
    else if(e === "cv-ctic") return "Carga Viral (CTIC)";
}

const obtenerhora = () => {
    const fechaActual = new Date();
    const horaActual = fechaActual.getHours();
    const minutosActuales = fechaActual.getMinutes();

    return `${horaActual}:${minutosActuales}`;
}

const obtenerfecha = () => {
    const fechaActual = new Date();
    const diaActual = fechaActual.getDate();
    const mesActual = fechaActual.getMonth() + 1; // Los meses en JavaScript empiezan en 0, por lo que debemos agregar 1
    let mes="";

    switch(mesActual){
        case 1: mes = "Ene"; break;
        case 2: mes = "Feb"; break;
        case 3: mes = "Mar"; break;
        case 4: mes = "Abr"; break;
        case 5: mes = "May"; break;
        case 6: mes = "Jun"; break;
        case 7: mes = "Jul"; break;
        case 8: mes = "Ago"; break;
        case 9: mes = "Set"; break;
        case 10: mes = "Oct"; break;
        case 11: mes = "Nov"; break;
        case 12: mes = "Dic"; break;
        default: mes = "";
    }

    return `${mes} ${diaActual}`;
}

export default function Detalles(props){

    return(<div className="container__detalles">
        <div className="container__titulo__detalles">{nombrelugar(props.id)}</div>
        <div className="container__ciudad__pais">Lima, Perú</div>
        <div className="container__hora__fecha">{`${obtenerhora()}, ${obtenerfecha()}`}</div>
        <div className='eslogan__top'>¡El aire es puro, ideal para actividades del aire libre!</div>

        <div className='container__detalles__estado'>
            <div className='container__estado'>
                <img src={happy} alt='imagen-happy'/>
            </div>
            <div className='container__promedio'>
                <div>promedio</div>
                <div>
                    <span>40</span>
                    <span>INCA</span>
                </div>
            </div>
            <div className='container__tiempo__pm'>
                <div className='container__tiempo'>
                    <div className='container__temp__uv'>
                        <img src={cloud} alt='imagen-cloud'/>
                        <div>20 ºC</div>
                    </div>
                    <div className='container__temp__uv'>
                        <img src={sun} alt='imagen-sun'/>
                        <div>10UV</div>
                    </div>
                </div>
                <div className='container__pm'>
                    PM2.5 5.9 µg/m3
                </div>
            </div>
        </div>
        
    </div>
    )
}