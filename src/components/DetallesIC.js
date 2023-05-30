import "./css/DetallesIC.css";
import { obtenerhora } from "./obtenerhora";
import { obtenerfecha } from "./obtenerfecha";
//import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
//import OpacitySharpIcon from "@mui/icons-material/OpacitySharp";
import BarChartSharpIcon from "@mui/icons-material/BarChartSharp";
import happy from "./images/happy.png";
import { useState, useEffect } from "react";
import serio from "./images/serio.png";
import triste from "./images/triste.png";

const nombrelugar = (e) => {
  if (e === "cv-comedor") return "Comedor Universitario";
  else if (e === "cv-ctic") return "CTIC";
};

const dat = [
  { idb: "2201" },
  { idb: "2202" },
  { idb: "2203" },
  { idb: "2204" },
  { idb: "2205" },
  { idb: "2208" },
  { idb: "2209" },
  { idb: "2210" },
  { idb: "2212" },
  { idb: "2213" },
];

const getLastHourToTimestamp = (horas) => {
  const now = new Date();
  const fourHoursAgo = new Date(now.getTime() - horas * 60 * 60 * 1000);
  const timestamp = fourHoursAgo.getTime();
  return timestamp;
};

export default function DetallesIC({ id }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      let sumaco2 = [],
        //sumatemperatura = 0,
        //sumahumedad = 0,
        cont = 0;
      const timestamp = getLastHourToTimestamp(2 / 15);
      const promises = dat.map((d) => {
        return fetch(
          `http://192.168.52.232:9090/api/v1/carga-viral/${d.idb}?minDate=${timestamp}&columns=001001111`
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.length !== 0) {
              let temp = 0;
              for(let i = 0; i < data.length; i ++){
                temp = temp + data[i].dioxido_de_carbono;
              }
              temp = temp / data.length;
              //sumaco2 = sumaco2 + data[0].dioxido_de_carbono;
              //sumatemperatura = sumatemperatura + data[0].temperatura;
              //sumahumedad = sumahumedad + data[0].humedad;
              sumaco2.push(temp);
              //console.log(data)
            }
          
            let d2 = null;

            if (d.idb === "2213") {
              //sumaco2 = sumaco2 / 10;
              //sumatemperatura = sumatemperatura / 10;
              //sumahumedad = sumahumedad / 10;
              const suma = sumaco2.reduce((acc, num) => acc + num, 0);
              const promedio = suma / sumaco2.length;
              let col = "";
              let est = "";
              let imag = "";
              if (promedio< 800) {
                col = "#9AD64D";
                est = "Buena";
                imag = happy;
              } else if (promedio > 800 && promedio < 1000) {
                col = "orange";
                est = "Moderada";
                imag = serio;
              } else if (promedio > 1000) {
                col = "#FF4242";
                est = "Perjudicial";
                imag = triste;
              }

              d2 = {
                lugar: d.lugar,
                co2: Math.round(promedio),
                //temperatura: Math.round(sumatemperatura),
                //humedad: Math.round(sumahumedad),
                estado: est,
                color: col,
                imagen: imag,
              };
            }

            return d2;
          })
          .catch((error) => console.error(error));
      });

      const data = await Promise.all(promises);

      setData(data);
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // Llama a la función fetchData cada 8 minutos

    // Limpia el intervalo al desmontar el componente
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container__main__detalles__i">
      <div className="container__titulo">{nombrelugar(id)}</div>
      <div className="container__ciudad__pais">Lima, Perú</div>
      <div className="container__hora__fecha">{`${obtenerhora()}, ${obtenerfecha()}`}</div>
      <div className="item2">
        <div className="contenido show">
          <div
            className="container__datos__cvthbg2"
            style={{ background: `${data ? data[9].color : ""}` }}
          >
            <div className="container__datos__cvthb">
              <div className="container__datos__c2">
                <img src={data ? data[9].imagen : ""} alt="logo" />
              </div>
              <div className="container__datos__vthb">
                <div className="container__datos__vth2">
                  <div className="container__th2">
                    {/*<div className="container__datos__t">
                      <DeviceThermostatIcon className="icon__t" />{" "}
                      {data ? data[9].temperatura : ""} ºC
                    </div>
                    <div className="container__datos__h">
                      <OpacitySharpIcon className="icon__h" /> {data ? data[9].humedad : ""}{" "}
                      %
  </div>*/}
                  </div>
                  <div className="container__datos__v2">
                    CO₂: {data ? data[9].co2 : ""} ppm
                  </div>
                  <div className="container__datos__b2">
                    Calidad del aire: {data ? data[9].estado : ""}
                  </div>
                </div>
              </div>
            </div>
            <div className="container__btn__vermas2">
              <div className="container__btn__ver__mas">
                <a href="/calidad-del-aire-interiores-comedor-universitario?id=sensor 1">
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
