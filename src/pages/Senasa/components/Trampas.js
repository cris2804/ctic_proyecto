import { useState } from "react"
import logo from "../img/logo_version_grafana.png"
import iconoMosca from "../img/icono-mosca.png";
import iconoBateria from "../img/icono-bateria-original.png"
import { cantidadMoscas, porcentajeBateria, colores } from "./data"
import Trampa from "./Trampa"


cantidadMoscas.sort((a, b) => b.cantidad - a.cantidad)
porcentajeBateria.sort((a, b) => a.porcentaje - b.porcentaje)

export default function Trampas({setId}){
    const [selected, setSelected] = useState(0); //0: moscas, 1: bateria

    return(
        <div className="container__right__senasa">
            <div className="container__icono__sc">
                <img src={logo} alt="logo"/>
            </div>
            <div className="container__cantidad__moscas">
                <div className="container__orden__moscas">
                    <img src={iconoMosca} alt="icono-mosca" onClick={()=> setSelected(0)} className={selected === 0 ? "selec" : "noselec"}/>
                    <img src={iconoBateria} alt="icono bateria" onClick={()=>setSelected(1)} className={selected === 1 ? "selec" : "noselec"}/>
                </div>
                <div className="container__trampa__cp">
                    {
                        (selected === 0 ? cantidadMoscas : porcentajeBateria).map((objeto, index) => {
                            return(
                                <div key={index} className="container__vn" onClick={() => setId(objeto.nombre)}>
                                    {selected === 0 ? <Trampa nombre={objeto.nombre} cantidad={objeto.cantidad} color={colores[index].color} />
                                        :<Trampa nombre={objeto.nombre} cantidad={objeto.porcentaje+"%"} color={colores[index].color} />}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}