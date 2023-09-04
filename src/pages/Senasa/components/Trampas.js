import { useEffect, useState } from "react"
import logo from "../img/logo_version_grafana.png"
import iconoMosca from "../img/icono-mosca.png";
import iconoBateria from "../img/icono-bateria-original.png"
import iconoAdvertencia from "../img/icono-advertencia.png"
import Trampa from "./Trampa"
import { diferenciaHoras } from "../../../components/convertirfechahora";

const aux = new Date()
const actual = aux.toISOString()

export default function Trampas({setId, data, colores}){
    const [selected, setSelected] = useState(0) //0: moscas, 1: bateria
    const [dataActual, setDataActual] = useState(data)


    useEffect(() => {
        let clondataActual = data.slice();
        if(selected === 0) clondataActual.sort((a, b) => b.cantidad - a.cantidad)
        else if( selected === 1) clondataActual.sort((a, b) => a.porcentaje - b.porcentaje)
        else if( selected === 2) clondataActual = clondataActual.filter(objeto => !diferenciaHoras(2,15,actual,objeto.tiempo))

        setDataActual(clondataActual)

    }, [selected])

    return(
        <div className="container__right__senasa">
            <div className="container__icono__sc">
                <img src={logo} alt="logo"/>
            </div>
            <div className="container__cantidad__moscas">
                <div className="container__orden__moscas">
                    <img src={iconoMosca} alt="icono-mosca" onClick={()=> setSelected(0)} className={selected === 0 ? "selec" : "noselec"}/>
                    <img src={iconoBateria} alt="icono bateria" onClick={()=>setSelected(1)} className={selected === 1 ? "selec" : "noselec"}/>
                    <img src={iconoAdvertencia} alt="icono advertencia" onClick={()=>setSelected(2)} className={selected === 2 ? "selec" : "noselec"}/>
                </div>
                <div className="container__trampa__cp">
                    { dataActual.length > 0 &&
                            dataActual.map((objeto, index) => {
                            return(
                                <div key={index} className="container__vn" onClick={() => setId(objeto.nombre)}>
                                    {selected === 0
                                        ? 
                                        <Trampa nombre={objeto.nombre} cantidad={objeto.cantidad} color={colores[index].color} />
                                        : 
                                        <Trampa nombre={objeto.nombre} cantidad={selected === 2 ? "" : objeto.porcentaje+"%"} color={colores[index].color} />
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}