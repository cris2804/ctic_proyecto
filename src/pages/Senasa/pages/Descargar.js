import "./Descargar.css"
import Botones from "../components/Botones"
import { useParams } from 'react-router-dom'
import Header from "../components/Header"
import { useState } from "react"
import { opciones } from "../assets/ubicaciones"

export default function Descargar(){
    const { numero } = useParams();
    const [checkboxes, setCheckboxes] = useState({
        mosca: true,
        temperatura: true,
        humedad: true,
        bateria: true
    })

    function handleCheckboxChange(event) {
        const { name, checked } = event.target;
        setCheckboxes({ ...checkboxes, [name]: checked });
    }

    //console.log(numero)
    
    return(
        <div className="container__descarga__senasa">
            <Header lugar="CTIC" />


            <div className="container__body__senasa">
                <div className="container__tabla__senasa__desc">
                    Trampa {numero} junin
                </div>
                
                <div className="container__descarga__opc__senasa">
                    <div className="container__check__calendar">
                        <div className="container__ntrampa__descarga">Trampa {numero}</div>
                        <div className="container__check__calendar__senasa">
                            <div className="container__chexboxes__all__senasa">
                                {
                                    opciones.map( (opc, index) => {
                                        return(
                                            <div key={index} className="container__checkboxes__senasa">
                                                <input
                                                    type="checkbox"
                                                    name={opc.variable}
                                                    checked={checkboxes[opc.variable]}
                                                    onChange={handleCheckboxChange}
                                                ></input>
                                                <div>{opc.opcion}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="container__calendario__senasa">
                                <div className="container__rango__calendar__senasa">
                                    Desde: <div className="container__calendar__senasa"><input type="date" /></div>
                                </div>
                                <div >
                                    Hasta: <input className="container__calendar__senasa" type="date" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container__tabla__ver__senasa">
                        Datos trampa {numero}
                    </div>
                
                
                    <div className="container__footer__senasa">
                        <div className="c__b_s">
                            <Botones id={numero}/>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    )
}