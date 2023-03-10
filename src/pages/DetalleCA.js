import './css/DetalleCA.css';
import happy from '../components/images/happy.png';
import { useState } from 'react';
import { Ica } from '../assets/Ica';

export default function DetalleCA(){
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
        
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    
    return (
        <div className='container__detalle__ca'>
            <div>

            </div>
            <div className='container__detalle__ca__main'>
                <div className='container__detalle__ca__left'>
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
                    <div>

                    </div>
                </div>
                <div className='container__detalle__ca__right'>
                    <div className='container__estado__ca'>
                        <div className='container__valor__tipo'>
                            <div className='container__valor' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>104</div>
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

                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}