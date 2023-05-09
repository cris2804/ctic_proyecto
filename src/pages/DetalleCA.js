import "./css/DetalleCA.css";
import happy from "../components/images/happy.png";
import { useState } from "react";
import { Ica } from "../assets/Ica";
import Grafico from "../components/Grafico";
import Grafico2 from "../components/Grafico2";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Select from "../components/Select";
import { GiWindow } from "react-icons/gi";
import { MdMasks } from "react-icons/md";
import { MdOutlineWindPower } from "react-icons/md";
import { MdOutlineSportsHandball } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
//, MdWaterDrop

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
      `http://192.168.52.232:9090/api/v1/calidad-de-aire/descargar/${retornaidb(
        id
      )}?maxDate=${Number(date2)}&minDate=${Number(date1)}&columns=00000${
        checkboxes.Humedad ? "1" : "0"
      }00000${checkboxes.PM10 ? "1" : "0"}00${checkboxes.PM25 ? "1" : "0"}${
        checkboxes.Viento ? "1" : "0"
      }00${checkboxes.CO ? "1" : "0"}${checkboxes.NO2 ? "1" : "0"}0${
        checkboxes.H2S ? "1" : "0"
      }${checkboxes.O3 ? "1" : "0"}0`
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

  /*---- */
  const options = [
    { label: "Horario", value: "1" },
    { label: "Diario(24h)", value: "2" },
    { label: "Mensual", value: "3" },
  ];

  const [selectedValue, setSelectedValue] = useState("1");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleOpcion = (opc, dat) => {
    setOpcion(opc);
  };

  /*---- para el checbox para elegir  */
  const [checkboxes, setCheckboxes] = useState({
    NO2: false,
    O3: false,
    H2S: false,
    CO: false,
    PM10: false,
    PM25: false,
    Humedad: false,
    Viento: false,
  });
  function handleCheckboxChange(event) {
    const { name, checked } = event.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
  }

  //para el select
  function handleChange(event) {
    const url = event.target.value;
    window.location.href = url;
  }

  return (
    <div className="container__detalle__ca">
      <div className="forma">
        <span className="forma__titulo__lugar">{obtenerNombre(id)}</span> <br></br>
        <span className="forma__subtitulo">Calidad del aire en exteriores</span> <br></br>
        <span className="forma__linea">aaaaaaaaaaaaa</span>
      </div>
      {/*<div className="container__gota__agua"><MdWaterDrop className="gota__agua"/></div>*/}
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
              className="selector__de__lugar__cai"
              style={{ marginTop: "20px" }}
            >
              <div className="container__icon__ubi__ofi">
                {" "}
                <MdLocationPin style={{ fontSize: "2rem", color: "#1cbacc" }} />
                Ubicación Actual:{" "}
              </div>
              <select
                value={"/calidad-del-aire-exteriores?id="+id}
                onChange={handleChange}
                className="container__select__paginas__cai"
              >
                <option value="/calidad-del-aire-exteriores?id=ctic">
                  CTIC
                </option>
                <option value="/calidad-del-aire-exteriores?id=puerta 3">
                  Puerta 3
                </option>
                <option value="/calidad-del-aire-exteriores?id=puerta 5">
                  Puerta 5
                </option>
              </select>
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
              <Select
                options={options}
                value={selectedValue}
                onChange={handleSelectChange}
              />
            </div>
            <div
              className="container__detalle__descargar2"
              style={{ paddingTop: "25px" }}
            >
              <div>NO₂ μg/m³</div>
              <input
                type="checkbox"
                name="NO2"
                checked={checkboxes.NO2}
                onChange={handleCheckboxChange}
                id="cbox1"
                value="first_checkbox"
              ></input>
            </div>
            <div className="container__detalle__descargar2">
              <div>O₃ μg/m³</div>
              <input
                type="checkbox"
                name="O3"
                checked={checkboxes.O3}
                onChange={handleCheckboxChange}
                id="cbox1"
                value="first_checkbox"
              ></input>
            </div>
            <div className="container__detalle__descargar2">
              <div>H₂S μg/m³</div>
              <input
                type="checkbox"
                name="H2S"
                checked={checkboxes.H2S}
                onChange={handleCheckboxChange}
                id="cbox1"
                value="first_checkbox"
              ></input>
            </div>
            <div className="container__detalle__descargar2">
              <div>CO μg/m³</div>
              <input
                type="checkbox"
                name="CO"
                checked={checkboxes.CO}
                onChange={handleCheckboxChange}
                id="cbox1"
                value="first_checkbox"
              ></input>
            </div>
            <div className="container__detalle__descargar2">
              <div>PM 10 μg/m³</div>
              <input
                type="checkbox"
                name="PM10"
                checked={checkboxes.PM10}
                onChange={handleCheckboxChange}
                id="cbox1"
                value="first_checkbox"
              ></input>
            </div>
            <div className="container__detalle__descargar2">
              <div>PM 2.5 μg/m³</div>
              <input
                type="checkbox"
                name="PM25"
                checked={checkboxes.PM25}
                onChange={handleCheckboxChange}
                id="cbox1"
                value="first_checkbox"
              ></input>
            </div>
            <div className="container__detalle__descargar2">
              <div>Humedad μg/m³</div>
              <input
                type="checkbox"
                name="Humedad"
                checked={checkboxes.Humedad}
                onChange={handleCheckboxChange}
                id="cbox1"
                value="first_checkbox"
              ></input>
            </div>
            <div className="container__detalle__descargar2">
              <div>Viento μg/m³</div>
              <input
                type="checkbox"
                name="Viento"
                checked={checkboxes.Viento}
                onChange={handleCheckboxChange}
                id="cbox1"
                value="first_checkbox"
              ></input>
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
            {/*<div
              className="container__lugar__ubicacion"
              style={{ backgroundColor: "#9AD64D", textAlign: "center" }}
            >
              {obtenerNombre(id)}
            </div>*/}
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

            <div className="container__contaminante__principal">
              <div className="container__c__p">
                <div className="container__c__p__cv">
                  <div>Contaminantes</div>
                  <div>PM2.5</div>
                </div>
                <div className="container__c__p__b">
                  <div></div>
                  <div></div>
                </div>
                <div className="container__c__p__cov">
                  <div>Concentración</div>
                  <div>36 ug/m3</div>
                </div>
              </div>
              <div className="container__recomendaciones__salud">
                <div>RECOMENDACIONES DE SALUD</div>
                <div>¿Cómo protegerse de la contaminación del aire?</div>
                <div className="container__recomendacion__logo">
                  <div className="container__2">
                    <div className="container__rel">
                      <MdMasks style={{ color: "orange", fontSize: "3em" }} />
                      <div>
                        Los grupos sensibles deben usar una máscara al aire
                        libre
                      </div>
                    </div>
                    <div className="container__rel">
                      <MdOutlineWindPower
                        style={{ color: "orange", fontSize: "3em" }}
                      />
                      <div>Utilice un purificador de aire</div>
                    </div>
                  </div>
                  <div className="container__2">
                    <div className="container__rel">
                      <GiWindow style={{ color: "orange", fontSize: "3em" }} />
                      <div>
                        Cierra las ventanas para evitar el aire exterior sucio
                      </div>
                    </div>
                    <div className="container__rel">
                      <MdOutlineSportsHandball
                        style={{ color: "orange", fontSize: "3em" }}
                      />
                      <div>Reducir el ejercicio al aire libre</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
