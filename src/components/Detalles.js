import './css/Detalles.css';
import happy from './images/happy.png';
import cloud from './images/cloud.png';
import sun from './images/sun.png';
import { obtenerhora } from './obtenerhora';
import { obtenerfecha } from './obtenerfecha';

const nombrelugar = (e) =>{
    if(e === "ca-ctic") return "Calidad del Aire (CTIC)";
    else if(e === "ca-puerta5") return "Calidad del Aire (PUERTA 5)";
    else if(e === "ca-puerta3") return "Calidad del Aire (PUERTA 3)";
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
                <div>Promedio</div>
                <div className='container__inca__valor'>
                    <div>40</div>
                    <div>INCA</div>
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
        <div className='container__actividades'>
            <div className='actividades__1'>
                <div>| DEPORTES AL AIRE LIBRE</div> <div>| COMER AFUERA</div>
            </div>
            <div className='actividades__2'>
                | EVENTOS AL AIRE LIBRE
            </div>
        </div>
        <div className='datos__'>
            <div>Humedad</div>
            <div>59%</div>
        </div>
        <div className='datos__'>
            <div>Viento</div>
            <div>20.4 kmh</div>
        </div>
        <div className='datos__'>
            <div>NO2</div>
            <div>10 µg/m3</div>
        </div>
        <div className='datos__'>
            <div>O3</div>
            <div>3 µg/m3</div>
        </div>
        <div className='datos__'>
            <div>H2S</div>
            <div>40 µg/m3</div>
        </div>
        <div className='datos__'>
            <div>CO</div>
            <div>20 µg/m3</div>
        </div>
        <div className='container__btn__mas__detalles'>
            <div className='container__btn'><a href='detalle-calidad-del-aire'>MÁS DETALLES</a></div>
        </div>
    </div>
    )
}