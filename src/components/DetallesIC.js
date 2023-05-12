import "./css/DetallesIC.css";
import { obtenerhora } from "./obtenerhora";
import { obtenerfecha } from "./obtenerfecha";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import OpacitySharpIcon from "@mui/icons-material/OpacitySharp";
import BarChartSharpIcon from "@mui/icons-material/BarChartSharp";
import happy from "./images/happy.png";

const nombrelugar = (e) => {
  if (e === "cv-comedor") return "Comedor Universitario";
  else if (e === "cv-ctic") return "CTIC";
};

export default function DetallesIC({ id }) {
  return (
    <div className="container__main__detalles__i">
      <div className="container__titulo">{nombrelugar(id)}</div>
      <div className="container__ciudad__pais">Lima, Perú</div>
      <div className="container__hora__fecha">{`${obtenerhora()}, ${obtenerfecha()}`}</div>
      <div className="item2">
        <div className="contenido show">
          <div
            className="container__datos__cvthbg"
            style={{ background: "#9AD64D" }}
          >
            {/*style={{ background: `${item.color}` }}
                >*/}
            <div className="container__datos__cvthb">
              <div className="container__datos__c">
                <img src={happy} alt="logo" />
              </div>
              <div className="container__datos__vthb">
                <div className="container__datos__vth">
                  <div className="container__th">
                    <div className="container__datos__t">
                      <DeviceThermostatIcon className="icon__t" />{" "}
                      {/*item.temperatura*/} 25 ºC
                    </div>
                    <div className="container__datos__h">
                      <OpacitySharpIcon className="icon__h" />{" "}
                      {/*item.humedad*/} 20 %
                    </div>
                  </div>
                  <div className="container__datos__v">
                    CO2: {/*item.co2*/} 1201 ppm
                  </div>
                  <div className="container__datos__b">
                    Calidad del aire: Buena {/*item.estado*/}
                  </div>
                </div>
              </div>
            </div>
            <div className="container__btn__vermas">
              <div className="container__btn__ver__mas">
                <a href="/calidad-del-aire-interiores-comedor-universitario">
                  <BarChartSharpIcon /> VER GRAFICA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
