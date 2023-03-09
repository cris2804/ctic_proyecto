import './css/DetalleCA.css';
import happy from '../components/images/happy.png';

export default function DetalleCA(){

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
                            <div className='container__valor'>104</div>
                            <div className='container__indice__tipo'>
                                <div className='indice'>ÍNDICE ICA EN VIVO</div>
                                <div className='tipo'>Perjudicial Para Grupos Sensibles</div>
                            </div>
                        </div>
                        <div className='logo__imagen'>
                            <img src={happy} alt='logo-happy'/>
                        </div>
                    </div>

                    <div>
                        vivir

                    </div>
                </div>
            </div>
        </div>
    )
}