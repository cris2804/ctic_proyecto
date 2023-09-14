import "./Grafica2.css"
import logo from "../img/logo_version_grafana.png"
import Grafico from "../components/Grafico"
import {data,rangosFondo,rango} from "../test/data"
import { opciones, nombres } from "../assets/ubicaciones"
import { useState } from "react"
import Botones from "../components/Botones"
import { Link } from 'react-router-dom'

export default function Grafica2(){
    const [seleccionado, setSeleccionado] = useState(0)


    return(
        <div className="container__grafica2__senasa">
            
            <div className="container__header__senasa">
                <Link to="/senasa" className="link">
                    <img src={logo} alt="logo"/>    
                </Link>
            </div>
            <div className="container__body__senasa">
                <div className="container__tabla__senasa">
                    Trampa1 junin
                </div>
                <div className="container__grafico__opc__senasa">
                    <div className="container__opc__senasa">
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
                            <Botones />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}