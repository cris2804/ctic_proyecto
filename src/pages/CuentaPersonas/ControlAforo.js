import "./ControlAforo.css"
import iconocp from "./icono-cp.png"
import {RiDownloadCloudFill} from 'react-icons/ri';
import { obtenerhora } from "./obtenerhora";
import { useEffect, useRef, useState } from "react";
import { obtenerfecha } from "./obtenerfecha";
import PopupDescarga from "./PopupDescarga";
import { Getip } from "../../server/Getip";
import io from "socket.io-client";

const aforo_maximo = 350
export default function ControlAforo(){
    const [hora, setHora] = useState(obtenerhora());
    const reloj = useRef(null);
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("id");
    
    const [dataPersonas,setDataPersonas] = useState([]);
    const [dataActual,setDataActual] = useState(null);
    let host = window.location.host;

    useEffect(()=> {
        const timer = setInterval(() => {
            reloj.current.innerText =  obtenerhora();
          }, 1000);
        return () =>{
            clearInterval();
        }
    },[])

    const fetchInicial = async () =>{
        const urlDefault  = Getip(host) + `/api/v1/cuenta-personas/${id === "ctic" ? "ctic" : "smartcity" }?last=20&columns=001001`;
        const response = await fetch(urlDefault);
        const data = await response.json();
        const newData = data.map(d =>{
          const timestamp = new Date(d.time_index).getTime();
    
          return {timestamp:timestamp ,value: d.total_personas}
        });
        console.log(newData);
        setDataPersonas(newData.reverse());
      }
      useEffect(()=>{
        fetchInicial();
        const socket = io(Getip(host),{
          transports: ["websocket"]
        })
        socket.on("CuentaPersonas/CuentaPersonas:ctic",  (data)=>{
          
          const str_time = data.TimeInstant.value;
          const timestamp = new Date(str_time).getTime();
          const personas = data.total_personas.value;
          console.log(timestamp,personas);
          const newTime = {
            timestamp:timestamp,value:personas
          }
    
          setDataActual(newTime);
          
        })
      },[]);
      useEffect(()=>{
        if(dataActual){
          const newPersonas = [...dataPersonas,dataActual]
          if(newPersonas.length>20){
            newPersonas.shift();
          }
          setDataPersonas(newPersonas);
        }
      },[dataActual])

    //para el select
  function handleChange(event) {
    const url = event.target.value;
    window.location.href = url;
  }

    return (
        <div className="container__control__aforo">
            <img
            src="https://www.ctic.uni.edu.pe/wp-content/uploads/2020/10/foto-ctic-uni.jpg"
            alt="imagen-ctic"
            className="container__img__fondo"
          />

          <div className="container__cp__capa">
                    <div className="selector__de__lugar__ca">
                        <select
                            value={"/control-aforo?id="+id}
                            onChange={handleChange}
                            className="container__select__paginas__cai"
                        >
                            <option value="/control-aforo?id=ctic">
                            CTIC
                            </option>
                            <option value="/control-aforo?id=smart city">
                            Smart City
                            </option>
                        </select>
                    </div>
                    <div className="container__all__center">
                        <div className="container__tittle">
                            CONTROL<br></br>
                            DE AFORO <br></br>  
                            {id}
                        </div>
                        <div className="container__all__right">
                            <div className="container__aa">AFORO ACTUAL</div>
                            <div className="container__icon__value">
                                <div className="container__icon__cp">
                                    <img src={iconocp} alt="icono__cp"/>
                                </div>
                                <div className="container__value">
                                {dataPersonas.length === 0 ? "0" : dataPersonas[dataPersonas.length - 1].value}
                                </div>
                            </div>
                            <div className="container__progress__bar">
                                <div className="contianer__bar__v2">
                                    <div className="progress__bar"></div>
                                    <div className="progress__actual"></div>
                                    <div className="container__values">
                                        <span>0</span>
                                        <span>{dataPersonas.length === 0 ? "0" : ((dataPersonas[dataPersonas.length - 1].value/aforo_maximo)*100).toFixed(2)}%</span>
                                        <span>{aforo_maximo}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container__bottom__">
                        <div className="container__same">
                            <div>Última Actualización</div>
                            <div>15:44:20</div>
                        </div>
                        <div className="container__same">
                            <div>Fecha</div>
                            <div >{obtenerfecha()}</div>
                        </div>
                        <div className="container__same hora">
                            <div>HORA</div>
                            <div ref={reloj}>{hora}</div>
                        </div>
                        <div id="icon_descarga" className="container__same download container__relative">
                            <RiDownloadCloudFill  className="icon"/>
                            <PopupDescarga/>
                        </div>
                    </div>
          </div>
        </div>
    )
}