import "./Grafica.css"
import Grafico from "../components/Grafico"
import {data,rangosFondo,rango} from "../test/data"
import { opciones, nombres } from "../assets/ubicaciones"
import { useState } from "react"
import Botones from "../components/Botones"
import { useParams } from 'react-router-dom'
import Header from "../components/Header"

export default function Grafica(){
    const { numero } = useParams();
    const [seleccionado, setSeleccionado] = useState(0)

    //console.log(numero)


    return(
        <div className="container__grafica__senasa">
            
            <Header lugar="CTIC"/>
            
            <div className="container__body__senasa">
                <div className="container__tabla__senasa__graf">
                    Trampa {numero} junin
                </div>
                <div className="container__grafico__opc__senasa">
                    <div className="container__opc__senasa">
                        <div className="c__trampa">Trampa {numero}</div>
                        <div className="c__opc2__senasa">
                            {
                                opciones.map((opc, index) => {
                                    return(
                                        <div key={index} 
                                             className={seleccionado === index ? "selec__opc__senasa": "noselec__senasa"} 
                                             onClick={()=>setSeleccionado(index)}>
                                            {opc.opcion}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="container__vista__grafica__senasa">
                        <Grafico 
                        tlinea="monotone" 
                        vdot={false} 
                        clinea="#00796B" 
                        data={data}
                        nombrex="Tiempo"
                        nombrey={nombres[seleccionado]}
                        rangoy= {rango}
                        fondo={true}
                        rangosFondo= {rangosFondo}
                        />
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