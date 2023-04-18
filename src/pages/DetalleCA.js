import "./css/DetalleCA.css";
import happy from "../components/images/happy.png";
import { useState } from "react";
import { Ica } from "../assets/Ica";
import Grafico from "../components/Grafico";
import Grafico2 from "../components/Grafico2";
//import NavBarText from '../components/NavBarText'
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const gases = [
  {
    key: 1,
    nombre: "PM2.5",
  },
  {
    key: 2,
    nombre: "PM 10",
  },
  {
    key: 3,
    nombre: "SO2",
  },
  {
    key: 4,
    nombre: "NO2",
  },
  {
    key: 5,
    nombre: "H2S",
  },
  {
    key: 6,
    nombre: "NO",
  },
];

function obtenerNombre(id) {
  if (id === "ctic") return "ctic";
  else if (id === "puerta 3") return "puerta 3";
  else if (id === "puerta 5") return "puerta 5";
}

function Graficar(opc, nom) {
  const datos = Array.from({ length: 20 }, () => {
    return {
      time: new Date().toLocaleTimeString(),
      value: Math.floor(Math.random() * 500),
    };
  });
  if (opc === 0) {
    return <Grafico nombre={nom} datos={datos} />;
  } else if (opc === 1) {
    return <Grafico2 cantidad={96} nombre={nom} />;
  } else if (opc === 2) {
    return <Grafico2 cantidad={672} nombre={nom} />;
  }
}

function retornaidb(id) {
  let idb = "";
  if (id === "ctic") idb = "beegons:rak-3272s-e";
  else if (id === "puerta 3") idb = "beegons:rak-3272s-f";
  else if (id === "puerta 5") idb = "beegons:rak-3272s-h";

  return idb;
}

export default function DetalleCA() {
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get("id");

  const [isHovered, setIsHovered] = useState(false);
  //const [seleccionado, setSeleccionado] = useState(0);
  const [opcion, setOpcion] = useState("PM2.5");
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [showCalendar1, setShowCalendar1] = useState(false);
  const [showCalendar2, setShowCalendar2] = useState(false);

  const onChange1 = (date) => {
    setDate1(date);
    setShowCalendar1(!showCalendar1);
  };
  const onChange2 = (date) => {
    setDate2(date);
    setShowCalendar2(!showCalendar2);
  };

  const toggleCalendar1 = () => {
    setShowCalendar1(!showCalendar1);
  };
  const toggleCalendar2 = () => {
    setShowCalendar2(!showCalendar2);
  };

  const handleMostrar = () => {
    fetch(
      `http://192.168.52.232:9090/calidad-de-aire/descargar/${retornaidb(
        id
      )}?maxDate=${Number(date2)}&minDate=${Number(date1)}`
    )
      .then((response) => {
        if (response.ok) {
          return response.blob();
        } else {
          throw new Error("Error en la respuesta de la API");
        }
      })
      .then((blob) => {
        // Crea un enlace de descarga
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = "archivo.csv";
        downloadLink.click();
      })
      .catch((error) => {
        console.error("Error al llamar a la API:", error);
      });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  //const Seleccionar = (indice) => {
  //  setSeleccionado(indice);
  //}

  const handleOpcion = (opc, dat) => {
    setOpcion(opc);
  };

  return (
    <div className="container__detalle__ca">
      <div className="container__detalle__ca__main">
        <div className="container__detalle__ca__left">
          <div
            style={{
              boxShadow: "0 2px 20px 0 rgba(0,0,0,.08)",
              borderRadius: "2px 2px 10px 10px",
            }}
          >
            <div
              style={{
                backgroundColor: "#f3f7fb",
                paddingBottom: "25px",
                paddingTop: "25px",
                borderRadius: "2px 2px 0px 0px",
              }}
            >
              <div
                style={{
                  color: "#198CFF",
                  fontSize: "15px",
                  fontWeight: "500",
                  paddingBottom: "4px",
                  marginLeft: "10px",
                }}
              >
                CLIMA
              </div>
              <div style={{ marginLeft: "10px", fontSize: "20px" }}>
                ¿Cuál es el clima actual en el laboratorio Calidad de Aire
                (CTIC)?
              </div>
            </div>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "0px 0px 10px 10px",
                paddingBottom: "30px",
              }}
            >
              <div
                className="container__prop__valor"
                style={{ paddingTop: "30px" }}
              >
                <div style={{ color: "#3c3c3c" }}>CLIMA</div>
                <div style={{ fontWeight: "500" }}>Parcialmente nublado</div>
              </div>
              <div className="container__prop__valor">
                <div style={{ color: "#3c3c3c" }}>TEMPERATURA</div>
                <div style={{ fontWeight: "500" }}>26 ºC</div>
              </div>
              <div className="container__prop__valor">
                <div style={{ color: "#3c3c3c" }}>VIENTO</div>
                <div style={{ fontWeight: "500" }}>12.6 km/h</div>
              </div>
              <div className="container__prop__valor">
                <div style={{ color: "#3c3c3c" }}>PRESIÓN</div>
                <div style={{ fontWeight: "500" }}>1014 mbar</div>
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: "30px",
              backgroundColor: "white",
              boxShadow: "0 2px 20px 0 rgba(0,0,0,.08)",
              borderRadius: "2px 2px 10px 10px",
            }}
          >
            <div
              className="container__detalle__descargar"
              style={{
                backgroundColor: "#f3f7fb",
                paddingTop: "30px",
                paddingBottom: "30px",
                fontSize: "15px",
                fontWeight: "500",
              }}
            >
              <div style={{ color: "#198CFF", paddingBottom: "4px" }}>
                DESCARGAR DATOS (CSV)
              </div>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  paddingRight: "40px",
                }}
              >
                {" "}
                Aqui podra descargar distintos datos de nuestra plataforma,
                podra escoger el rango de fechas y los sensores a analizar.
              </div>
            </div>
            <div
              className="container__detalle__descargar container__rango__fecha__descargar"
              style={{ fontWeight: "500" }}
            >
              <div>Fecha Inicial: </div>
              <div>
                <button
                  onClick={toggleCalendar1}
                  className="container__btn__calendar"
                >
                  <div>
                    <CalendarMonthIcon />
                  </div>
                  <div>{date1.toLocaleDateString()}</div>
                </button>
                {showCalendar1 && (
                  <Calendar onChange={onChange1} value={date1} />
                )}
              </div>
            </div>
            <div
              className="container__detalle__descargar container__rango__fecha__descargar"
              style={{ fontWeight: "500" }}
            >
              <div>Fecha Final: </div>
              <div>
                <button
                  onClick={toggleCalendar2}
                  className="container__btn__calendar"
                >
                  <div>
                    <CalendarMonthIcon />
                  </div>
                  <div>{date2.toLocaleDateString()}</div>
                </button>
                {showCalendar2 && (
                  <Calendar onChange={onChange2} value={date2} />
                )}
              </div>
            </div>
            <div className="container__eh">
              <div>Evolución:</div>
              <div>Horaria</div>
            </div>
            <div
              className="container__detalle__descargar"
              style={{ paddingTop: "25px" }}
            >
              PM 2.5 μg/m³ &nbsp;&nbsp;
              <input type="checkbox" id="cbox1" value="first_checkbox"></input>
            </div>
            <div className="container__detalle__descargar">
              SO₂ μg/m³ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="checkbox" id="cbox1" value="first_checkbox"></input>
            </div>
            <div className="container__detalle__descargar">
              NO₂ μg/m³ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="checkbox" id="cbox1" value="first_checkbox"></input>
            </div>
            <div className="container__detalle__descargar">
              H₂S μg/m³ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="checkbox" id="cbox1" value="first_checkbox"></input>
            </div>
            <div className="container__detalle__descargar">
              NO μg/m³ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="checkbox" id="cbox1" value="first_checkbox"></input>
            </div>
            <div
              className="container__detalle__descargar"
              style={{
                paddingTop: "20px",
                paddingBottom: "30px",
                textAlign: "center",
              }}
            >
              <button
                onClick={handleMostrar}
                style={{
                  backgroundColor: "#7EDAE5",
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#2086D8",
                  fontSize: "20px",
                  fontWeight: "500",
                  borderColor: "#2086D8",
                  borderRadius: "20px",
                  padding: "10px 20px 10px 20px",
                  cursor: "pointer",
                }}
              >
                Descargar CSV&nbsp;&nbsp; <CloudDownloadIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="container__detalle__ca__right">
          <div
            style={{
              boxShadow: "0 2px 20px 0 rgba(0,0,0,.08)",
              borderRadius: "2px 2px 5px 5px",
            }}
          >
            <div
              className="container__lugar__ubicacion"
              style={{ backgroundColor: "#9AD64D", textAlign: "center" }}
            >
              {obtenerNombre(id)}
            </div>
            <div
              className="container__estado__ca"
              style={{ backgroundColor: "#9AD64D" }}
            >
              <div className="container__valor__tipo">
                <div
                  className="container__valor"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{ backgroundColor: "#8ac241" }}
                >
                  40
                </div>
                <div className="container__indice__tipo">
                  <div className="indice" style={{ fontSize: "16px" }}>
                    ÍNDICE ICA EN VIVO
                  </div>
                  <div
                    className="tipo"
                    style={{ fontSize: "30px", fontWeight: "500" }}
                  >
                    Perjudicial Para Grupos Sensibles
                  </div>
                </div>
              </div>
              <div className="logo__imagen">
                <img src={happy} alt="logo-happy" />
              </div>
              <div
                className={
                  isHovered
                    ? "container__detalles__ica"
                    : "container__detalles__ica2"
                }
              >
                {Ica.map((element, i) => {
                  return (
                    <div className="container__ica__rango__nombre" key={i}>
                      <div style={{ background: element.color }}>
                        {element.rango}
                      </div>
                      <div>{element.nombre}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            className="container__grafico__rangos__tipos__gases"
            style={{
              boxShadow: "0 2px 20px 0 rgba(0,0,0,.08)",
              borderRadius: "2px 2px 5px 5px",
            }}
          >
            <div className="container__tipos__gases__ca">
              {gases.map((gas) => {
                return (
                  <div
                    key={gas.nombre}
                    onClick={() => handleOpcion(gas.nombre)}
                    className={opcion === gas.nombre ? "seleccionado" : ""}
                  >
                    {gas.nombre}
                  </div>
                );
              })}
            </div>
            {/*<div className='container__rango__tiempo'>
                            <div className={seleccionado === 0 ? 'tiempo__seleccionado':''} onClick={() => Seleccionar(0)}>EN VIVO</div>
                            <div className={seleccionado === 1 ? 'tiempo__seleccionado':''} onClick={() => Seleccionar(1)}>DÍA</div>
                            <div className={seleccionado === 2 ? 'tiempo__seleccionado':''} onClick={() => Seleccionar(2)}>SEMANA</div>
                        </div>*/}
            <div className="container__grafico">{Graficar(0, opcion)}</div>
            <div className="container__porcentaje__anual__dias">
              <span>---</span> Porcentaje anual 33 ICA
            </div>
            <div className="container__porcentaje__anual__dias dias__al__año">
              <div>
                <span>Días al año en este nivel</span>
              </div>
              {Ica.map((element, i) => {
                return (
                  <div className="container__porcentaje__cantidad" key={i}>
                    <div className="container__porcentaje">
                      <div className="cien__por__ciento">
                        <div
                          className="porcentaje"
                          style={{
                            width: `${(element.valor / 365) * 100}%`,
                            background: `${element.color}`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="container__cantidad">{element.valor}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
