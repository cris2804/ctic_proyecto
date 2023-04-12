import './css/Detalles.css';
import happy from './images/happy.png';
//import cloud from './images/cloud.png';
import sun from './images/sun.png';
import { obtenerhora } from './obtenerhora';
import { obtenerfecha } from './obtenerfecha';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';

const nombrelugar = (e) =>{
    if(e === "ca-ctic") return "CTIC";
    else if(e === "ca-puerta5") return "PUERTA 5";
    else if(e === "ca-puerta3") return "PUERTA 3";
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
                <div className='container__inca__valor'>
                    <div>40</div>
                    <div>ICA</div>
                </div>
            </div>
            <div className='container__tiempo__pm'>
                <div className='container__tiempo'>
                    <div className='container__temp__uv'>
                        <DeviceThermostatIcon className='icon__t'/>
                        <div>20 ºC</div>
                    </div>
                    <div className='container__temp__uv'>
                        <img src={sun} alt='imagen-sun'/>
                        <div>10UV</div>
                    </div>
                </div>
                <div className='container__cp'>Contaminante principal</div>
                <div className='container__pm'>
                    PM2.5 5.9 µg/m³
                </div>
            </div>
        </div>

        <div className='datos__'>
            <div>NO2</div>
            <div>10 µg/m³</div>
        </div>
        <div className='datos__'>
            <div>O3</div>
            <div>3 µg/m³</div>
        </div>
        <div className='datos__'>
            <div>H2S</div>
            <div>40 µg/m³</div>
        </div>
        <div className='datos__'>
            <div>CO</div>
            <div>20 µg/m³</div>
        </div>
        <div className='datos__'>
            <div>PM 10</div>
            <div>40 µg/m³</div>
        </div>
        <div className='datos__'>
            <div>PM 2.5</div>
            <div>20 µg/m³</div>
        </div>
        <div className='datos__'>
            <div>Humedad</div>
            <div>59%</div>
        </div>
        <div className='datos__'>
            <div>Viento</div>
            <div>20.4 kmh</div>
        </div>
        
        <div className='container__btn__mas__detalles'>
            <div className='container__btn'><a href={`calidad-del-aire-exteriores?id=${nombrelugar(props.id)}`}>MÁS DETALLES</a></div>
        </div>
    </div>
    )
}