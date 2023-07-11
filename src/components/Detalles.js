import "./css/Detalles.css";
import happy from "./images/happy.png";
//import serio from './images/serio.png';
//import triste from './images/triste.png';
import { obtenerhora } from "./obtenerhora";
import { obtenerfecha } from "./obtenerfecha";
import { useState, useEffect } from "react";
import {BsThermometerHalf, BsSunFill} from 'react-icons/bs';
import { Getip } from "../server/Getip";

const nombrelugar = (e) => {
  if (e === "ca-ctic") return "ctic";
  else if (e === "ca-puerta5") return "puerta 5";
  else if (e === "ca-puerta3") return "puerta 3";
};

const obtenerid = (e) => {
  if (e === "ca-ctic") return "beegons:rak-3272s-e";
  else if (e === "ca-puerta5") return "beegons:rak-3272s-h";
  else if (e === "ca-puerta3") return "beegons:rak-3272s-f";
};

export default function Detalles(props) {
  const [data, setData] = useState(null);
  let host = window.location.host;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${Getip(host)}/api/v1/calidad-de-aire/${obtenerid(
            props.id
          )}?last=1`
        );
        const jsonData = await response.json();

        const d2 = jsonData[0];
        setData(d2);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [props.id]);

  return (
    <div className="container__detalles">
      <div className="container__titulo__detalles">{nombrelugar(props.id)}</div>
      <div className="container__ciudad__pais">Lima, Perú</div>
      <div className="container__hora__fecha">{`${obtenerhora()}, ${obtenerfecha()}`}</div>
      <div className="eslogan__top">
        ¡El aire es puro, ideal para actividades del aire libre!
      </div>

      <div className="container__detalles__estado">
        <div className="container__estado">
          <img src={happy} alt="imagen-happy" />
        </div>
        <div className="container__promedio">
          <div className="container__inca__valor">
            <div>40</div>
            <div>ICA</div>
          </div>
        </div>
        <div className="container__tiempo__pm">
          <div className="container__tiempo">
            <div className="container__temp__uv">
              {/*<DeviceThermostatIcon className="icon__t" />*/}
              <BsThermometerHalf className="icon__t"/>
              <div>{data ? Math.round(data.temperatura_2) : ""} ªC</div>
            </div>
            <div className="container__temp__uv">
              {/*<img src={sun} alt="imagen-sun" />*/}
              <BsSunFill className="icon__uv"/>
              <div>{data ? Math.round(data.indice_uv) : ""} UV</div>
            </div>
          </div>
          <div className="container__cp">Contaminante principal</div>
          <div className="container__pm">PM2.5 5.9 µg/m³</div>
        </div>
      </div>

      <div className="datos__" style={{ marginTop: "30px" }}>
        <div>NO₂</div>
        <div>{data ? (data.dioxido_de_nitrogeno*12180*46/298.15).toFixed(2) : ""} µg/m³</div>
      </div>
      <div className="datos__">
        <div>O₃</div>
        <div>{data ? (data.ozono*12180*48/298.15).toFixed(2) : ""} µg/m³</div>
      </div>
      <div className="datos__">
        <div>H₂S</div>
        <div>{data ? (data.sulfuro_de_hidrogeno*12180*34/298.15).toFixed(2) : ""} µg/m³</div>
      </div>
      <div className="datos__">
        <div>CO</div>
        <div>{data ? (data.monoxido_de_carbono*12180*28/298.15).toFixed(2) : ""} µg/m³</div>
      </div>
      <div className="datos__">
        <div>PM 10</div>
        <div>{data ? data.dioxido_de_carbono : ""} µg/m³</div>
      </div>
      <div className="datos__">
        <div>PM 2.5</div>
        <div>{data ? data.calidad_de_aire : ""} µg/m³</div>
      </div>
      <div className="datos__">
        <div>Humedad</div>
        <div>{data ? data.humedad : ""}%</div>
      </div>
      <div className="datos__" style={{ marginBottom: "30px" }}>
        <div>Viento</div>
        <div>{data ? data.velocidad_del_viento : ""} kmh</div>
      </div>

      <div className="container__btn__mas__detalles">
        <div className="container__btn2">
          <a href={`calidad-del-aire-exteriores?id=${nombrelugar(props.id)}`}>
            MÁS DETALLES
          </a>
        </div>
      </div>
    </div>
  );
}
