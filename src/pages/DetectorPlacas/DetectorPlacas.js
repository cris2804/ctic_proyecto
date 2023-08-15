import "./DetectorPlacas.css"
import imagen from "./carro-movimiento.png"
import placai from "./placa.jpg"
import { useState } from "react"

export default function DetectorPlacas(){
    const [placa, setPlaca] = useState('');
    const [nombre, setNombre] = useState('');
    const [dni, setDni] = useState('');
    const [condicion, setCondicion] = useState(''); // Valor por defecto para el radio
    const [destino, setDestino] = useState('');

    const handleRegistrarClick = () => {
        // Aquí puedes acceder a los valores de los estados
        console.log('Placa:', placa);
        console.log('Nombre:', nombre);
        console.log('DNI:', dni);
        console.log('Condición:', condicion);
        console.log('Destino:', destino);
    };
    return(
        <div className="container__main__all__dp">
            <div className="container__left__dp">
                 <div className="container__main__hi__dp">
                    <div className="container__hora__img_dp" style={{background: "#F55444"}}>
                        <div>
                            <span>12:45:20 PM</span>
                        </div>
                        <img src={placai} alt=""/>
                        <div>
                            <span>ÚLTIMO CARRO</span>
                        </div>
                    </div>
                </div>
                <div className="container__cantidad"> 
                    <div className="container__is__dp">
                        <div>INGRESARON</div>
                        <div>620</div>
                    </div>
                    <div className="container__is__dp">
                        <div>SALIERON</div>
                        <div>20</div>
                    </div>
                </div>
            </div>
            <div className="container__right__dp">
                <div className="container__main__form__dp">
                    <div className="carro__movimiento">
                        <div className="carro">
                            <img src={imagen} alt="" />
                        </div>
                    </div>
                    <div className="container__form__dp">
                        <div className="container__title__form__dp">Registrar Carro</div>
                        <div>
                            <div>Placa</div>
                            <input className="input" value={placa} onChange={(e) => setPlaca(e.target.value)} />
                        </div>
                        <div>
                            <div>Nombre del conductor</div>
                            <input className="input" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        </div>
                        <div>
                            <div>Dni</div>
                            <input className="input" value={dni} onChange={(e) => setDni(e.target.value)} />
                        </div>
                        <div>
                            <div>Condición</div>
                            <div className="container__condicion">
                                <div className="opcion">
                                <input type="radio" value="autorizado" checked={condicion === 'autorizado'} onChange={() => setCondicion('autorizado')} /> Autorizado
                                </div>
                                <div className="opcion">
                                    <input type="radio" value="visitante" checked={condicion === 'visitante'} onChange={() => setCondicion('visitante')} />Visitante
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>Destino</div>
                            <input className="input" value={destino} onChange={(e) => setDestino(e.target.value)} />
                        </div>
                        <div className="container__btn__registrar__dp" onClick={handleRegistrarClick}>REGISTRAR</div>
                    </div>
                </div>
            </div>
        </div>
    )
}