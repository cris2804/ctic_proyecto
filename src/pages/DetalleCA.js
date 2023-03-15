import './css/DetalleCA.css';
import happy from '../components/images/happy.png';
import { useState } from 'react';
import { Ica } from '../assets/Ica';
import Grafico from '../components/Grafico';
import Grafico2 from '../components/Grafico2';

const gases = [
    {
        "key": 1,
        "nombre": "PM2.5",
    },
    {
        "key": 2,
        "nombre": "PM 10",
    },
    {
        "key": 3,
        "nombre": "SO2",
    },
    {
        "key": 4,
        "nombre": "NO2",
    },
    {
        "key": 5,
        "nombre": "H2S",
    },
    {
        "key": 6,
        "nombre": "NO",
    }
]

function Graficar(opc){
    if(opc === 0){
        return <Grafico/>
    }else if(opc === 1){
        return <Grafico2 cantidad={100}/>
    }else if(opc === 2){
        return <Grafico2 cantidad={500}/>
    }
}

export default function DetalleCA(){
    const [isHovered, setIsHovered] = useState(false);
    const [seleccionado, setSeleccionado] = useState(0);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
        
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    
    const Seleccionar = (indice) => {
        setSeleccionado(indice);
    }

    return (
        <div className='container__detalle__ca'>
            <div>

            </div>
            <div className='container__detalle__ca__main'>
                <div className='container__detalle__ca__left'>
                    <div>
                        <div>
                            <div>CLIMA</div>
                            <div>¿Cuál es el clima actual?</div>
                        </div>
                        <div>
                            <div className='container__prop__valor'>
                                <div>CLIMA</div>
                                <div>Parcialmente nublado</div>
                            </div>
                            <div className='container__prop__valor'>
                                <div>TEMPERATURA</div>
                                <div>26 ºC</div>
                            </div>
                            <div className='container__prop__valor'>
                                <div>VIENTO</div>
                                <div>12.6 km/h</div>
                            </div>
                            <div className='container__prop__valor'>
                                <div>PRESIÓN</div>
                                <div>1014 mbar</div>
                            </div>
                        </div>
                    </div>
                    <div style={{marginTop:'100px'}}>
                        Descargar datos
                    </div>
                </div>
                <div className='container__detalle__ca__right'>
                    <div className='container__estado__ca'>
                        <div className='container__valor__tipo'>
                            <div className='container__valor' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>40</div>
                            <div className='container__indice__tipo'>
                                <div className='indice'>ÍNDICE ICA EN VIVO</div>
                                <div className='tipo'>Bueno</div>
                            </div>
                        </div>
                        <div className='logo__imagen'>
                            <img src={happy} alt='logo-happy'/>
                        </div>
                        <div className={isHovered ? 'container__detalles__ica':'container__detalles__ica2'}>
                            {Ica.map((element, i) => {
                                return(<div className='container__ica__rango__nombre'>
                                        <div style={{background: element.color}}>{element.rango}</div>
                                        <div key={i}>{element.nombre}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className='container__grafico__rangos__tipos__gases'>
                        <div className='container__rango__tiempo'>
                            <div className={seleccionado === 0 ? 'tiempo__seleccionado':''} onClick={() => Seleccionar(0)}>EN VIVO</div>
                            <div className={seleccionado === 1 ? 'tiempo__seleccionado':''} onClick={() => Seleccionar(1)}>DÍA</div>
                            <div className={seleccionado === 2 ? 'tiempo__seleccionado':''} onClick={() => Seleccionar(2)}>SEMANA</div>
                        </div>
                        <div className='container__grafico'>
                            {Graficar(seleccionado)}
                        </div>
                        <div className='container__porcentaje__anual__dias'>
                           <span>---</span> Porcentaje anual 33 ICA
                        </div>
                        <div className='container__porcentaje__anual__dias dias__al__año'>
                            <span>Días al año en este nivel</span>
                        </div>
                        <div className='container__tipos__gases__ca'>
                            {gases.map((gas)=>{
                                return <div key={gas.key}>{gas.nombre}</div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}