import "./DetectorPlacas.css"
import placa from "./placa.jpg"
import Tabla from "./Tabla";


export default function DetectorPlacas() {
  return (
    <div className="container__main__detector__placas">
      <div className="container__main__placas">
        <div className="container__tabla__title container__placa">
            <div>Car Analytics: Puerta 6 Camara 2</div>
          <div className="container__tabla"><Tabla/></div>
        </div>

        <div className="container__placa container__imagen__placas">
            <div className="container__img__principal">
                <img src={placa} alt=""/>
            </div>
            <div className="container__imgs__secundarios">
                <img src={placa} alt=""/>
                <img src={placa} alt=""/>
                <img src={placa} alt=""/>
            </div>
        </div>

        <div className="container__placa">
            3          
        </div>

        <div className="container__placa">
            4
        </div>
      </div>
    </div>
  );
}