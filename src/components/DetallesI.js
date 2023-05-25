import "./css/DetallesI.css";
import { obtenerhora } from "./obtenerhora";
import { obtenerfecha } from "./obtenerfecha";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState, useEffect } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import OpacitySharpIcon from "@mui/icons-material/OpacitySharp";
import BarChartSharpIcon from "@mui/icons-material/BarChartSharp";
import happy from "./images/happy.png";
import serio from "./images/serio.png";
import triste from "./images/triste.png";

const dat = [
  { idb: "1102", lugar: "Oficina de Administración" },
  { idb: "1201", lugar: "Laboratorio SmartCity" },
  { idb: "1202", lugar: "Oficina de Calidad Universitaria" },
  { idb: "1203", lugar: "Oficina de Capacitación" },
  { idb: "1204", lugar: "Secretaría" },
];

const nombrelugar = (e) => {
  if (e === "cv-comedor") return "Comedor Universitario";
  else if (e === "cv-ctic") return "CTIC";
};

export default function DetallesI({ id }) {
  const [data, setData] = useState([]);
  const [results, setResults] = useState(dat);

  useEffect(() => {
    const fetchData = async () => {
      const promises = results.map((d) => {
        return fetch(
          `http://192.168.52.232:9090/api/v1/carga-viral/${d.idb}?last=1`
        )
          .then((response) => response.json())
          .then((data) => {
            let col = "";
            let est = "";
            let imag = "";
            if (data[0].dioxido_de_carbono < 800) {
              col = "#9AD64D";
              est = "Buena";
              imag = happy;
            } else if (
              data[0].dioxido_de_carbono > 800 &&
              data[0].dioxido_de_carbono < 1000
            ) {
              col = "orange";
              est = "Moderada";
              imag = serio;
            } else if (data[0].dioxido_de_carbono > 1000) {
              col = "#FF4242";
              est = "Perjudicial";
              imag = triste;
            }
            const d2 = {
              lugar: d.lugar,
              co2: Math.round(data[0].dioxido_de_carbono),
              temperatura: Math.round(data[0].temperatura),
              humedad: Math.round(data[0].humedad),
              estado: est,
              color: col,
              imagen: imag,
            };
            return d2;
          })
          .catch((error) => console.error(error));
      });

      const data = await Promise.all(promises);
      setData(data);
    };

    fetchData();
  }, [results]);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    if (!value) {
      setResults(dat);
    } else {
      const filteredResults = dat.filter((item) =>
        item.lugar.toLowerCase().includes(inputValue.toLowerCase())
      );
      setResults(filteredResults);
    }
  };

  const handleButtonClick = () => {
    //console.log(inputValue);
    //const filteredResults = dat.filter(
    //(item) => item.lugar.toLowerCase().includes(inputValue.toLowerCase())
    //);
    //setResults(filteredResults);
  };

  //acordeon
  const [selected, setSelected] = useState(0);
  const toggle = (i) => {
    if (selected === i) {
      setSelected(null);
    } else {
      setSelected(i);
    }
  };

  return (
    <div className="container__main__detalles__i">
      <div className="container__titulo">{nombrelugar(id)}</div>
      <div className="container__ciudad__pais">Lima, Perú</div>
      <div className="container__hora__fecha">{`${obtenerhora()}, ${obtenerfecha()}`}</div>
      <div className="container__search__">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Buscar"
        />
        <SearchOutlinedIcon
          className="icon__search"
          onClick={handleButtonClick}
        />
      </div>
      <div className="accordion">
        {data.map((item, i) => {
          return (
            <div className="item" key={i}>
              <div className="nombre" onClick={() => toggle(i)}>
                <div className="">{item.lugar}</div>
                <span>
                  {selected === i ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                </span>
              </div>
              <div className={selected === i ? "contenido show" : "contenido"}>
                <div
                  className="container__datos__cvthbg"
                  style={{ background: `${item.color}` }}
                >
                  <div className="container__datos__cvthb">
                    <div className="container__datos__c">
                      <img src={item.imagen} alt="logo" />
                    </div>
                    <div className="container__datos__vthb">
                      <div className="container__datos__vth">
                        <div className="container__datos__v">
                          CO2: {item.co2} ppm
                        </div>
                        <div className="container__datos__t">
                          <DeviceThermostatIcon className="icon__t" />{" "}
                          {item.temperatura} ºC
                        </div>
                        <div className="container__datos__h">
                          <OpacitySharpIcon className="icon__h" />{" "}
                          {item.humedad} %
                        </div>
                      </div>
                      <div className="container__datos__b">
                        Calidad del aire: {item.estado}
                      </div>
                    </div>
                  </div>
                  <div className="container__btn__vermas">
                    <div className="container__btn__ver__mas">
                      <a
                        href={`/calidad-del-aire-interiores-ctic?id=${item.lugar}`}
                      >
                        <BarChartSharpIcon /> VER GRAFICA
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
