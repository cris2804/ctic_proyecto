import "./ControlAforo.css"
import iconocp from "./icono-cp.png"
import {RiDownloadCloudFill} from 'react-icons/ri';
import { obtenerhora } from "./obtenerhora";
import { useEffect, useRef, useState } from "react";
import { obtenerfecha } from "./obtenerfecha";
import PopupDescarga from "./PopupDescarga";

export default function ControlAforo(){
    const [hora, setHora] = useState(obtenerhora());
    const reloj = useRef(null);

    useEffect(()=> {
        const timer = setInterval(() => {
            reloj.current.innerText =  obtenerhora();
          }, 1000);
        return () =>{
            clearInterval();
        }
        
        
    },[])

    return (
        <div className="container__control__aforo">
            <img
            src="https://www.ctic.uni.edu.pe/wp-content/uploads/2020/10/foto-ctic-uni.jpg"
            alt="imagen-ctic"
            className="container__img__fondo"
          />

          <div className="container__cp__capa">
                    <div className="container__all__center">
                        <div className="container__tittle">
                            CONTROL<br></br>
                            DE AFORO <br></br>  
                            CTIC
                        </div>
                        <div className="container__all__right">
                            <div className="container__aa">AFORO ACTUAL</div>
                            <div className="container__icon__value">
                                <div className="container__icon__cp">
                                    <img src={iconocp} alt="icono__cp"/>
                                </div>
                                <div className="container__value">
                                    35
                                </div>
                            </div>
                            <div className="container__progress__bar">
                                <div className="contianer__bar__v2">
                                    <div className="progress__bar"></div>
                                    <div className="progress__actual"></div>
                                    <div className="container__values">
                                        <span>0</span>
                                        <span>23.33%</span>
                                        <span>300</span>
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