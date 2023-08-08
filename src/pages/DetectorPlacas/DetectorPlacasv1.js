import "./DetectorPlacasv1.css"
import placa from "./placa.jpg"
import Tabla from "./Tabla";
import { useState } from "react";
import carro from "./carro.png"


export default function DetectorPlacas() {

  const [option, setOption] = useState(1);

  return (
    <div className="container__main__detector__placas">
      <div className="container__main__placas">
        <div className="container__tabla__title container__placa">
            <div>Car Analytics: Puerta 6 Camara 2</div>
          <div className="container__tabla"><Tabla/></div>
        </div>

        <div className="container__placa container__imagen__placas">
            <div className="container__img__principal">
                <div className="container__img__ultimo">
                  <div>11:52:20 AM</div>
                  <img src={placa} alt=""/>
                </div>
            </div>
            <div className="container__imgs__secundarios">
              <div className="container__img__secundario">
                <div>11:48:35 AM</div>
                <img src={placa} alt=""/>
              </div>
              <div className="container__img__secundario">
                <div>11:47:16 AM</div>
                <img src={placa} alt=""/>
              </div>
              <div className="container__img__secundario">
                <div>11:20:56 AM</div>
                <img src={placa} alt=""/>
              </div>
            </div>
        </div>

        <div className="container__placa container__cantidad__carros">
            <img src={carro} alt=""/>
            <div className="container__main__is">
              <div className="container__ingreso__salida">
                  <div>Ingreso: </div>
                  <div>50</div>
              </div>
              <div className="container__ingreso__salida">
                  <div>Salida: </div>
                  <div>30</div>
              </div>
            </div>
        </div>

        <div className="container__placa container__grafica__carros">
            <div className="container__opc__button">
              <div onClick={()=>setOption(1)} className={option === 1 ? "selected" : ""}>Entrados</div>
              <div onClick={()=>setOption(2)} className={option === 2 ? "selected" : ""}>Salidos</div>
              <span className={option === 1 ? "selected1" : "selected2"}></span>
            </div>

        </div>
      </div>
    </div>
  );
}